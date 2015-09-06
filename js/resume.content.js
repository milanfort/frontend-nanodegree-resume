/*
 * resume.content.js
 *
 * Created by Milan Fort <http://www.milanfort.com/>.
 */

/*jslint
 browser: true, continue: true, indent  : 4,
 maxerr : 50,   maxlen  : 110,  plusplus: true,
 regexp : true, todo    : true
 */

/*global $, Handlebars, resume */

resume.content = (function () {
    'use strict';

    var display, init;

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
            var template, html;

            template = Handlebars.compile($('#' + templateId).html());
            html = template(data);

            $('#' + rootElementId).append(html);
        });
    };

    init = function () {
        console.info("Initializing module resume.content");

        display('bio.json', 'headerTemplate', 'header');
        display('bio.json', 'contactsTemplate', 'lets-connect');
        display('work.json', 'workExperienceTemplate', 'workExperience');
        display('projects.json', 'projectsTemplate', 'projects');
        display('education.json', 'educationTemplate', 'education');
    };

    return { init: init };
}());
