var bio = {
	'name' : 'Sean Holcomb',
	'role' : 'Web Developer',
	'contacts' : {
		'mobile' : '(858)449-5236',
		'email' : 'seanholcomb@gmail.com',
		'github' : 'sean-holcomb',
		'twitter' : 'sean-holcomb',
		'location' : 'San Diego'
	},
	'skills' : [
		'JavaScript', 'Python', 'Java', 'SQL', 'Android', 'HTML5', 'CSS3'
	],
	'biopic': 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAL3AAAAJGQ1ZmUyMTc3LWYyZDAtNDBiNi05ZGI0LWY2ODgyNzM5YmZjYw.jpg',
	'welcomeMessage' : 'Welcome to my resume.'
};

bio.display = function(){



	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedTwit = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

	$('#header').prepend(formattedRole)
		.prepend(formattedName)
		.append(formattedPic)
		.append(formattedMsg);
	$('#topContacts').append(formattedEmail)
		.append(formattedMobile)
		.append(formattedGithub)
		.append(formattedTwit);
	$('#footerContacts').append(formattedEmail)
		.append(formattedMobile)
		.append(formattedGithub)
		.append(formattedTwit);
	if(bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		var formattedSkill;
		var len = bio.skills.length;
		for (var skill = 0; skill < len; skill += 1){
			formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
			$('#skills').append(formattedSkill);
		}
	}
	$('#mapDiv').append(googleMap);
};

var projects = {
	'project' : [
		{
			'title' : 'Ipsum Lorum',
			'dates' : 'November 2015',
			'description' : 'Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum',
			'images' : []
		}
	]
};

projects.display = function(){


	var len = projects.project.length;
	for (var i = 0; i < len; i += 1){
		$('#projects').append(HTMLprojectStart);

		var formTitle = HTMLprojectTitle.replace('%data%', projects.project[i].title);
		var formDates = HTMLprojectDates.replace('%data%', projects.project[i].dates);
		var formDesc = HTMLprojectDescription.replace('%data%', projects.project[i].description);

		$('.project-entry:last').append(formTitle)
			.append(formDates)
			.append(formDesc);
		var leng = projects.project[i].images.length;
		for (var pic = 0; pic < leng; pic += 1){
			var formImage = HTMLprojectImage.replace('%data%', projects.project[i].images[pic]);
			$('.project-entry:last').append(formImage);
		}
	}
};

var work = {
	'jobs' : [
		{
			'title' : 'Waiter',
			'employer' : 'Ki\'s Restaurant',
			'dates' : 'October 2014 - December 2015',
			'description' : 'Take orders and ensure quility dinning experience for customers.',
			'location' : 'San Diego, CA, US'
		}
	]
};

work.display = function(){


	var len = work.jobs.length;
	for (var job = 0; job < len; job += 1){
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);

		$('.work-entry:last').append(formattedEmployerTitle)
			.append(formattedDates)
			.append(formattedDescription);
	}
};

var education = {
	'schools' : [
		{
			'name' : 'University of California Santa Cruz',
			'location' : 'Santa Cruz, CA, US',
			'dates' : 2013,
			'degree' : 'B.A.',
			'major' : ['History'],
			'url' : 'filler'
		}
	],
	'onlineCourses' : [
		{
			'title' : 'Android Developer Nanodegree',
			'school' : 'Udacity',
			'date' : 2015,
			'url' : 'Udacity.com'
		},
		{
			'title' : 'Front-End Web Developer Nanodegree',
			'school' : 'Udacity',
			'date' : 2015,
			'url' : 'Udacity.com'
		},
		{
			'title' : 'Full Stack Web Developer Nanodegree',
			'school' : 'Udacity',
			'date' : 2015,
			'url' : 'Udacity.com'
		}
	]
};

education.display = function(){

	len = education.schools.length;
	for (var school = 0; school < len; school += 1){
		$('#education').append(HTMLschoolStart);

		var formName = HTMLschoolName.replace('%data%', education.schools[school].name);
		var formDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		var formDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		var formLoc = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		var formMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major[0]);
		var fromMajorDeg = formMajor + formDegree;

		$('.education-entry:last').append(formName)
			.append(formLoc)
			.append(formDates)
			.append(fromMajorDeg);
	}

	leng = education.onlineCourses.length;
	for (var oClass = 0; oClass < leng; oClass += 1){
		$('#education').append(HTMLschoolStart);

		var formTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[oClass].title);
		var formSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[oClass].school);
		var formDates = HTMLonlineDates.replace('%data%', education.onlineCourses[oClass].date);
		var formUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[oClass].url);
		var formFull = formTitle + formSchool;

		$('.education-entry:last').append(formFull)
			.append(formDates)
			.append(formUrl);
	}
};

function locationizer(work){
	locs = [];
	for (var job in work.jobs){
		locs.append(work.jobs[job].location);
	}
	return locs;
}

bio.display();
projects.display();
work.display();
education.display();
