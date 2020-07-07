var mongoose   = require("mongoose"),
	Campground = require("./models/campground"),
	Comment    = require("./models/comment");

var data = [
	{
		name: "Cloud's Rst",
		image: "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Bacon ipsum dolor amet buffalo jowl biltong, cupim hamburger drumstick prosciutto shank. Picanha 		chislic ball tip beef ribs frankfurter, meatloaf pork loin kevin rump shank hamburger andouille sausage drumstick. Alcatra picanha short ribs flank boudin, ham jerky venison shank turducken. T-bone buffalo strip steak ribeye pig. Cow spare ribs prosciutto, pancetta tongue shank turducken short ribs jowl landjaeger tail beef jerky flank pork loin. Shank shankle cow filet mignon. Pastrami hamburger shoulder jerky pork belly, tail cupim short ribs alcatra leberkas bresaola meatball burgdoggen corned beef."	
	},
	{
		name: "Light Camp",
		image: "https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Bacon ipsum dolor amet buffalo jowl biltong, cupim hamburger drumstick prosciutto shank. Picanha chislic ball tip beef ribs frankfurter, meatloaf pork loin kevin rump shank hamburger andouille sausage drumstick. Alcatra picanha short ribs flank boudin, ham jerky venison shank turducken. T-bone buffalo strip steak ribeye pig. Cow spare ribs prosciutto, pancetta tongue shank turducken short ribs jowl landjaeger tail beef jerky flank pork loin. Shank shankle cow filet mignon. Pastrami hamburger shoulder jerky pork belly, tail cupim short ribs alcatra leberkas bresaola meatball burgdoggen corned beef."
	},
	{
		name: "Fire Hill",
		image: "https://images.pexels.com/photos/1061640/pexels-photo-1061640.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Bacon ipsum dolor amet buffalo jowl biltong, cupim hamburger drumstick prosciutto shank. Picanha chislic ball tip beef ribs frankfurter, meatloaf pork loin kevin rump shank hamburger andouille sausage drumstick. Alcatra picanha short ribs flank boudin, ham jerky venison shank turducken. T-bone buffalo strip steak ribeye pig. Cow spare ribs prosciutto, pancetta tongue shank turducken short ribs jowl landjaeger tail beef jerky flank pork loin. Shank shankle cow filet mignon. Pastrami hamburger shoulder jerky pork belly, tail cupim short ribs alcatra leberkas bresaola meatball burgdoggen corned beef."
	}
]

function seedDB(){
	//REMOVE CAMP GROUNDS
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
			} else {
				console.log("Campground Removed!!");
				//ADD CAMPGROUNDS
				data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if(err){
						console.log(err);
					} else {
						console.log("added Campground");
						//Create comment
						Comment.create({
							text: "this is great, wish there was net",
							author: "Homer"
						}, function(err, comment){
							if(err){
								console.log(err);
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("created new comment");
							}
						});
					}
				});
			});
		}
	});
	
}

module.exports = seedDB;