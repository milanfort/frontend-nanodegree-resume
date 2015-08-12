
/* Bio Section */

var bio = {
    "name": "John Doe",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "650-555-7777",
        "email": "john.doe@gmail.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "San Francisco"
    },
    "welcomeMessage": "Welcome to my site! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque pellentesque tellus, id mollis sapien consequat non. Sed sollicitudin et eros ut pretium. Praesent dapibus in turpis sed placerat. Aliquam luctus convallis velit, sed bibendum tellus pharetra id.",
    "skills": ["HTML5", "CSS3", "JavaScript", "Node.js", "CouchDB"],
    "biopic": "images/fry.jpg"
};

bio.display = function () {
    var $header = $('#header');
    var $topContacts = $("#topContacts");
    var $footerContacts = $("#footerContacts");

    var name = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);

    var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var email = HTMLemail.replace('%data%', bio.contacts.email);
    var github = HTMLgithub.replace('%data%', bio.contacts.github);
    var twitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var location = HTMLlocation.replace('%data%', bio.contacts.location);

    $header.prepend(role);
    $header.prepend(name);

    $topContacts.append(mobile);
    $topContacts.append(email);
    $topContacts.append(github);
    $topContacts.append(twitter);
    $topContacts.append(location);

    $footerContacts.append(mobile);
    $footerContacts.append(email);
    $footerContacts.append(github);
    $footerContacts.append(twitter);
    $footerContacts.append(location);

    $header.append(HTMLbioPic.replace('%data%', bio.biopic));
    $header.append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    if (bio.skills) {
        $header.append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }
};


/* Work Section */

var work = {
    "jobs": [
        {
            "employer": "Google",
            "title": "Software Engineer",
            "location": "Mountain View, CA, US",
            "dates": "2011-present",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id nulla nisi. Praesent vitae tristique metus, non sagittis orci. Praesent eu metus eget metus gravida venenatis. Curabitur semper arcu neque, quis convallis lorem varius in. Vivamus bibendum dui ut nunc iaculis, eget commodo eros semper. Cras turpis lacus, elementum sed quam non, tincidunt ullamcorper libero. Cras bibendum justo eget malesuada tristique."
        },
        {
            "employer": "Facebook",
            "title": "Front-End Web Developer",
            "location": "Menlo Park, CA, US",
            "dates": "2009-2011",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere pretium euismod. Aliquam sed rutrum sem. Ut non lectus ut leo ultrices cursus ac in velit. Proin pharetra a sapien sed ornare. Pellentesque ullamcorper mattis egestas. Curabitur dignissim tempus consequat. Vestibulum lectus elit, finibus non arcu a, tristique sodales ante. Nullam a sollicitudin sapien. Fusce id quam in sem fringilla hendrerit sit amet et quam. Vivamus mattis augue turpis, ut sodales odio commodo a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        }
    ]
};

work.display = function () {
    for (var jobIndex in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobIndex].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};


/* Projects Section */

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2013",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim purus ante, a interdum magna lacinia a. Ut cursus neque nec porta posuere. Cras vel odio tincidunt, consectetur justo non, semper lacus. In hendrerit libero nisi, sit amet blandit erat hendrerit sit amet. Proin non augue in quam vestibulum consectetur mattis in nisl. Maecenas est magna, interdum sit amet nibh non, semper gravida mauris. Aliquam felis risus, consequat nec varius vel, lacinia ut magna. Fusce dignissim fringilla sapien, et malesuada nibh dictum vel. Mauris felis libero, ullamcorper id risus eu, egestas semper arcu.",
            "images": ["http://lorempixel.com/300/200/sports/", "http://lorempixel.com/300/201/sports/", "http://lorempixel.com/300/202/sports/"]
        },
        {
            "title": "Sample Project 2",
            "dates": "2014",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan semper ante quis commodo. Sed tristique molestie odio non fringilla. Vivamus posuere, libero sed elementum scelerisque, magna felis convallis ex, non pretium neque sem ut erat. Morbi sagittis pulvinar odio, eu scelerisque nulla imperdiet eu. Aenean ac nisi venenatis, sagittis nisi quis, tristique ligula. Sed sollicitudin vulputate lacus, sed placerat nisi. Donec quis pretium odio, vulputate tempus ligula. Cras facilisis vel turpis vitae tristique. Phasellus venenatis lorem a neque laoreet, ut tempor massa vehicula. Phasellus malesuada molestie dictum. Praesent vehicula ac velit ut vulputate. Vivamus varius porta nisl, sit amet gravida augue pulvinar vel. Etiam ut mollis eros, vitae rhoncus justo. Quisque laoreet dolor at sem facilisis viverra. Nunc cursus at odio nec dictum. Vivamus eros nulla, auctor eget felis id, ultrices egestas augue.",
            "images": ["http://lorempixel.com/450/200/sports/", "http://lorempixel.com/450/201/sports/"]
        }
    ]
};

projects.display = function() {
    for (var i = 0; i < this.projects.length; i++) {
        var project = this.projects[i];
        var $start = $(HTMLprojectStart);
        $start.append(HTMLprojectTitle.replace("%data%", project.title));
        $start.append(HTMLprojectDates.replace("%data%", project.dates));
        $start.append(HTMLprojectDescription.replace("%data%", project.description));

        for (var j = 0; j < project.images.length; j++) {
            $start.append(HTMLprojectImage.replace("%data%", project.images[j]));
        }
        $("#projects").append($start);
    }
};


/* Education Section */

var education = {
    "schools": [
        {
            "name": "Massachusetts Institute of Technology",
            "location": "Cambridge, MA, US",
            "degree": "M.Sc.",
            "majors" : ["Software Engineering"],
            "dates": "2005-2009",
            "url": "http://web.mit.edu"
        },
        {
            "name": "Stanford University",
            "location": "Palo Alto, CA, US",
            "degree": "B.Sc.",
            "majors" : ["Computer Science"],
            "dates": "2000-2004",
            "url": "https://www.stanford.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Principles of Reactive Programming",
            "school": "École Polytechnique Fédérale de Lausanne",
            "date": "2015",
            "url": "https://www.coursera.org/course/reactive"
        },
        {
            "title": "Statistical Learning",
            "school": "Stanford University",
            "date": "2015",
            "url": "https://statlearning.class.stanford.edu"
        },
        {
            "title": "Data Analysis and Statistical Inference",
            "school": "Duke University",
            "date": "2014",
            "url": "https://www.coursera.org/course/statistics"
        }
    ]
};

education.display = function () {
    var $education = $('#education'),
        i;

    if (education.schools) {
        for (i = 0; i < education.schools.length; i++) {
            var $start = $(HTMLschoolStart);
            var school = education.schools[i];

            $start.append(HTMLschoolName.replace('%data%', school.name).replace('#', school.url)
                + HTMLschoolDegree.replace('%data%', school.degree));

            $start.append(HTMLschoolDates.replace('%data%', school.dates));
            $start.append(HTMLschoolLocation.replace('%data%', school.location));
            $start.append(HTMLschoolMajor.replace('%data%', school.majors));

            $education.append($start);
        }
    }

    if (education.onlineCourses) {
        $education.append(HTMLonlineClasses);

        for (i = 0; i < education.onlineCourses.length; i++) {
            var $startOnline = $(HTMLschoolStart);
            var course = education.onlineCourses[i];

            $startOnline.append(HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url)
            + HTMLonlineSchool.replace('%data%', course.school));
            $startOnline.append(HTMLonlineDates.replace('%data%', course.date));
            //$startOnline.append(HTMLonlineURL.replace('%data%', course.url));
            $startOnline.append($('<br>'));

            $education.append($startOnline);
        }
    }
};


/* Misc */

function init() {
    $("#main").append(internationalizeButton);
    $("#mapDiv").append(googleMap);
}

function inName(name) {
    console.log(name);
    var names = name.split(" ");

    return names[0] + " " + names[1].toUpperCase();
}


/* Display Resume */

bio.display();
work.display();
projects.display();
education.display();

init();
