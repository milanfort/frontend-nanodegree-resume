# Online Resume


## Introduction

This repository contains a solution to assignment #2 of the Udacity's Front-End Web Developer Nanodegree Programme.

The task was to develop a resume web application that dynamically generates the page content from data
stored in JavaScript objects, using pre-written HTML and CSS templates.
The resume must also include a map that displays location-based data using markers.


## Solution

To improve maintainability, we have first externalized all JavaScript objects into JSON files,
and implemented their asynchronous retrieval using AJAX. Then, we have employed the
[Handlebars](http://handlebarsjs.com/)
templating engine to perform the page content generation.


## Live Version

The solution is deployed through GitHub Pages at the following URL:
[http://www.milanfort.com/frontend-nanodegree-resume/](http://www.milanfort.com/frontend-nanodegree-resume/).


## Installation Instructions

To open the website locally, please follow these steps:

1. Clone this git repository:
    ```
    $ git clone https://github.com/milanfort/frontend-nanodegree-resume.git
    ```

2. Change your working directory to _frontend-nanodegree-resume_

3. Open file `index.html` in your web browser
