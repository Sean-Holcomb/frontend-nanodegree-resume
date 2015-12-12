var bio = {
	"name" : "Sean Holcomb",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "(858)449-5236",
		"email" : "seanholcomb@gmail.com",
		"github" : "sean-holcomb",
		"location" : "San Diego"
	},
	"skills" : [
		"JavaScript", "Python", "Java", "SQL", "Android", "HTML5", "CSS3"
	],
	"bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAL3AAAAJGQ1ZmUyMTc3LWYyZDAtNDBiNi05ZGI0LWY2ODgyNzM5YmZjYw.jpg",
	"message" : "Welcome to my resume."
};

bio.display = function(){



	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.message);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedPic);
	$("#header").append(formattedMsg);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedGithub);
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill;
		for (var skill in bio.skills){
			formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
	$("#main").append(internationalizeButton);
	$("#mapDiv").append(googleMap);
}

var projects = {
	"project" : [
		{
			"title" : "Ipsum Lorum",
			"dates" : "November 2015",
			"desc" : "Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum",
			"images" : []
		}
	]
}

projects.display= function(){



	for (i in projects.project){
		$("#projects").append(HTMLprojectStart);

		var formTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
		var formDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
		var formDesc = HTMLprojectDescription.replace("%data%", projects.project[i].desc);

		$(".project-entry:last").append(formTitle);
		$(".project-entry:last").append(formDates);
		$(".project-entry:last").append(formDesc);
		for (pic in projects.project[i].images){
			var formImage = HTMLprojectImage.replace("%data%", projects.project[i].images[pic]);
			$(".project-entry:last").append(formImage);
		}
	}
}

var work = {
	"jobs" : [
		{
			"title" : "Waiter",
			"employer" : "Ki's Restaurant",
			"dates" : "October 2014 - December 2015",
			"description" : "Take orders and ensure quility dinning experience for customers.",
			"location" : "San Diego, CA, US"
		}
	]
};

work.display = function(){



	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
}

var education = {
	"schools" : [
		{
			"name" : "University of California Santa Cruz",
			"location" : "Santa Cruz, CA, US",
			"dates" : "2010-2013",
			"degree" : "B.A.",
			"major" : "History"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Android Developer Nanodegree",
			"onlineSchool" : "Udacity",
			"dates" : "June 2015 - November 2015",
			"url" : "Udacity.com"
		},
		{
			"title" : "Front-End Web Developer Nanodegree",
			"onlineSchool" : "Udacity",
			"dates" : "November 2015 - January 2015",
			"url" : "Udacity.com"
		},
		{
			"title" : "Full Stack Web Developer Nanodegree",
			"onlineSchool" : "Udacity",
			"dates" : "November 2015 - January 2015",
			"url" : "Udacity.com"
		}
	]
}

education.display = function(){

	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var fromMajorDeg = formMajor + formDegree;

		$(".education-entry:last").append(formName);
		$(".education-entry:last").append(formLoc);
		$(".education-entry:last").append(formDates);
		$(".education-entry:last").append(fromMajorDeg);
	}

	for (oClass in education.onlineCourses){
		$("#education").append(HTMLschoolStart);

		var formTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[oClass].title);
		var formSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[oClass].onlineSchool);
		var formDates = HTMLonlineDates.replace("%data%", education.onlineCourses[oClass].dates);
		var formUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[oClass].url);
		var formFull = formTitle + formSchool;

		$(".education-entry:last").append(formFull);
		$(".education-entry:last").append(formDates);
		$(".education-entry:last").append(formUrl);
	}
}

function locationizer(work){
	locs = [];
	for (job in work.jobs){
		locs.append(work.jobs[job].location);
	}
	return locs;
}

function inName() {
    var finalName = $('#name').text();
    finalName=finalName.toLowerCase();
    var name=finalName.split(" ");
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1);
    name[1]=name[1].toUpperCase();
    finalName=name.join(" ");
    return finalName;
}

bio.display();
projects.display();
work.display();
education.display();
