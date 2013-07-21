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
        self.player = Player(self)

    def on_message(self, message):
        if message.startswith("!"):
            print u"Command Found"
        else:
            print u"No Command"

    def sendTo(socket, message):
        socket.write_message(message)

    def on_close(self):
        for i in range (0,len(self.clients)):
            if self.clients[i] == self:
                self.clients.remove(self.clients[i])


class Player(WebSocketHandler):

    def __init__(self,):
        print u"Player Created"
        self.write_message(u"Test")

    def changeName(self, name):
        self.name = name;
 
application = tornado.web.Application([
    (r"/", MainHandler),
    (r"/websocket", WebSocketHandler),
])
 
if __name__ == "__main__":
    application.listen(8080)
    tornado.ioloop.IOLoop.instance().start()