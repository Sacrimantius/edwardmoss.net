#!/usr/bin/python2
 
import tornado.web
import tornado.websocket
import tornado.ioloop
import uuid

players = []
 
class MainHandler(tornado.web.RequestHandler):

    def get(self):
        self.render("index.php")
 

class WebSocketHandler(tornado.websocket.WebSocketHandler):

    def open(self):
        self.player = Player()
        players.append(self)
        print u"Open Socket"

    def on_message(self, message):

        if message.startswith('!'):
            print u"Command Found"
            self.player.logic(message.lstrip('!'))
        else:
            for socket in players:
                if socket != self:
                    socket.write_message(self.player.name + u": " + message)
                    print u"Outgoing Message"

    def sendTo(socket, message):
        socket.write_message(message)

    def on_close(self):
        players.remove(self)
        print u"Closed"


class Player(object):

    def __init__(self,):
        self.name = "Anon"
        print u"Player Created"

    def changeName(self, name):
        print u"Name Changed"
        self.name = name;
 
    def logic(self, command):
        print u"Starting Logic"
        print command
        if command.startswith("changename"):
            self.changeName(command.lstrip("changename "))

application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/websocket", WebSocketHandler),
])
 
if __name__ == "__main__":
    application.listen(8001)
    tornado.ioloop.IOLoop.instance().start()