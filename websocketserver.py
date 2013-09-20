#!/usr/bin/python2
 
import tornado.web
import tornado.websocket
import tornado.ioloop
import uuid



Players = {}
Sockets = {}



class WebSocketHandler(tornado.websocket.WebSocketHandler):

    def open(self):
        self.id = uuid.uuid4()
        player = Player()

        Players[self.id] = (self, player)

    def on_message(self, message):

        if message.startswith('!'):
            print u"Command Found"
            Players[self.id].logic(message)
        else:
            count = 0;
            for socketid, player in Players.items():
                if socketid != self.id:
                    player[0].write_message(player[1].name + u": " + message)
                    count = count + 1;
        print u"Outgoing Message: Recieved by %d People" %count

    def on_close(self):
        print u"Closed"



class Player(object):

    def __init__(self,):
        self.name = "Anon"
        self.health = 10
        print u"Player Created"

    def hit(self):
        self.health = self.health - 1


    def changeName(self, name):
        print u"Name Changed"
        self.name = name
 
    def logic(self, command):
        print u"Starting Logic"
        command.lstrip('!')
        print command
        if command.startswith("changename"):
            self.changeName(command.lstrip("changename "))



application = tornado.web.Application([
    (r"/websocket", WebSocketHandler),
])
 


if __name__ == "__main__":
    application.listen(8001)
    tornado.ioloop.IOLoop.instance().start()