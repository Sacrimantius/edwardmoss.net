//Written by <DebugEd> while on a train heading back from Colchester. P.S. I have no internet this is mostly from memory.
//I was trying to think of a good use for parse and facebook together and being a game developler I decided to make:
// FACEBOOK VETERAN FIGHTER!
//In Facebook Veteran Fighter (FVF) two users take their 5 most veteran facebook friends and battle them
// TO THE DEATH!
//OK! Your friends don't actually die. Instead it will take your most veteran friends and match them against another users friends.
//In a lowest id takes all, best of 5 friends BATTLE TO THE DEATH.

//"Initializes" parse. (Basically tell our site which database we're going to connect to)
Parse.initialize("DeO6nCeFKlIjl9vKcejkbPH71YAk1FlnfRg1dypa", "y4JA2RrRtsKAkuiatp1tK5hgYFWUUnwo36zwy3EC");

//Define variables to hold our 5 friends id's
var friend1, friend2, friend3, friend4, friend5;

//This function gets friends because I don't have any at the moment
//What it actually does is pull back all our facebook friends from which we select the 5 with the lowest id's
$('#GetFriends').click(function(){

	FB.login(function(response){

		FB.api("/me/friends", function(response){

			for (var i = 0; i <=4; i++){

				//Print your team onto the screen
				$('#FacebookFriends').append("<img src='https://graph.facebook.com/" + response.data[i].id + "/picture?height=200'/><br/><p>" + response.data[i].name + " - " + response.data[i].id + "</p><br/>");

			}

			//Get your friends ready to be saved into the database later
			friend1 = response.data[0].id;
			friend2 = response.data[1].id;
			friend3 = response.data[2].id;
			friend4 = response.data[3].id;
			friend5 = response.data[4].id;

		});

		FB.api("/me", function(response){

			//Get your id so we know who's team it is
			user = response.id;

		});

	});

});

//This function takes the friends brought back from the GetFriends function and saves them into our Parse database
$('#SaveFriends').click(function(){

	//Create a blueprint of our parse table
	var FacebookVeteranTeamTable = Parse.Object.extend('FacebookVeteranTeam');

	//Create a row that will go into our table
	var FacebookVeteranTeam = new FacebookVeteranTeamTable();

	//Setup our team based on the friends we got back earlier
	FacebookVeteranTeam.set('Team_Captain', user);
	FacebookVeteranTeam.set('Friend_1', friend1);
	FacebookVeteranTeam.set('Friend_2', friend2);
	FacebookVeteranTeam.set('Friend_3', friend3);
	FacebookVeteranTeam.set('Friend_4', friend4);
	FacebookVeteranTeam.set('Friend_5', friend5);

	//Save our team into the table
	FacebookVeteranTeam.save(null, {
		success: function(response){ 

			//Do X if it was a success
			alert('Success');
			console.log('New object created:- ' + response );

		},error: function() {

			//Do Y if an error occured
			alert('There hase been an error... Check the logs.');
			console.log('Error:- ' + response );

		}
	});

});

//TO THE DEATH!
$('#Fight').click(function(){

	//Create a blueprint of our parse table
	var FacebookVeteranTeamTable = Parse.Object.extend('FacebookVeteranTeam');

	//Create a new question to ask our table
	var FacebookVeteranTeamQuery = new Parse.Query(FacebookVeteranTeamTable);

	//Get the last team that was entered
	FacebookVeteranTeamQuery.ascending("createdAt");

	//Get only 1 team
	FacebookVeteranTeamQuery.first({
		success: function(response) {

			//Get back the individual team members entered who you will fight
			$('#FacebookFriends').append("<img src='https://graph.facebook.com/" + response.get('Friend_1') + "/picture?height=200'/><br/>" + response.get('Friend_1') + "</p><br/>");
			$('#FacebookFriends').append("<img src='https://graph.facebook.com/" + response.get('Friend_2') + "/picture?height=200'/><br/>" + response.get('Friend_2') + "</p><br/>");
			$('#FacebookFriends').append("<img src='https://graph.facebook.com/" + response.get('Friend_3') + "/picture?height=200'/><br/>" + response.get('Friend_3') + "</p><br/>");
			$('#FacebookFriends').append("<img src='https://graph.facebook.com/" + response.get('Friend_4') + "/picture?height=200'/><br/>" + response.get('Friend_4') + "</p><br/>");
			$('#FacebookFriends').append("<img src='https://graph.facebook.com/" + response.get('Friend_5') + "/picture?height=200'/><br/>" + response.get('Friend_5') + "</p><br/>");

		}
	});

});
