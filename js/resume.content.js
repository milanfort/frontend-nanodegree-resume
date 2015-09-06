
display = function (fileName, templateId, rootElementId) {
    var url = location.origin.startsWith('http')
        ? location.href + 'data/' + fileName
        : 'http://www.milanfort.com/frontend-nanodegree-resume/data/' + fileName;

    $.ajax({
        type: 'GET',
        url: url,
        headers: {
            Accept: 'application/json'
        },
        timeout: 500

    }).done(function (data) {
        var template = Handlebars.compile($('#' + templateId).html());
        var html = template(data);
        $('#' + rootElementId).append(html);
    });
};

display('bio.json', 'headerTemplate', 'header');
display('bio.json', 'contactsTemplate', 'lets-connect');
display('work.json', 'workExperienceTemplate', 'workExperience');
display('projects.json', 'projectsTemplate', 'projects');
display('education.json', 'educationTemplate', 'education');
