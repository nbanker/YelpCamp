var Campground = require("../models/campground");
var Comment = require("../models/comment");

//ALL middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err){
				req.flash("error", "Camp not found!!");
				res.redirect("back");
			} else {
				//does user own campground?
			if(foundCampground.author.id.equals(req.user._id)){
				next();
			} else {
				req.flash("error", "You are not allowed to do that");
				res.redirect("back");
			}
			}
		});
	} else {
		req.flash("error", "You need to be logged in to do that");
		res.redirect("back");
	}
}

middlewareObj.checkCommentOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if(err){
				res.redirect("back");
			} else {
				//does user own comment?
			if(foundComment.author.id.equals(req.user._id)){
				next();
			} else {
				req.flash("error", "No permission to edit");
				res.redirect("back");
			}
			}
		});
	} else {
		req.flash("error", "Get logged in!!!");
		res.redirect("back");
	}
}

middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "Please login first you numpty")
	res.redirect("/login");
}

module.exports = middlewareObj