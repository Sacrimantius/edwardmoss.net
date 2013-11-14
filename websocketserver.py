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
            Players[self.id][1].logic(message)
        else:
            count = 0;
            for socketid, player in Players.items():
                if socketid != self.id:
                    player[0].write_message(player[1].name + u": " + message)
                    count = count + 1;
            print u"Outgoing Message: Recieved by %d People" %count

    def on_close(self):
        del Players[self.id]    
        print u"Closed Connection"



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
        command = command.lstrip('!')
        if command.startswith("changename"):
            print u"Changing Name"
            self.changeName(command.lstrip("changename "))
        elif command.startswith("createdeck"):
            print u"CreatingDeck"
            RegularDeck()

class Card(object):

    def __init__(self, value, type):
        self.value = value
        self.type = type
            
class Deck(object):

    def __init__(self,cardlist):
        Cards = cardlist
        print u"Deck Created"

    def shuffle(self):
        print u"Suffled"

class RegularDeck(Deck):

    def __init__(self):
        print u"Creating Regular Deck"
        valuelist = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
        suitlist = ['D', 'H', 'C', 'S']
        cardlist = [Card(value, suit) for value in valuelist for suit in suitlist]
        super(RegularDeck, self).__init__(cardlist)




application = tornado.web.Application([
    (r"/websocket", WebSocketHandler),
])
 


if __name__ == "__main__":
    application.listen(8001)
    tornado.ioloop.IOLoop.instance().start()