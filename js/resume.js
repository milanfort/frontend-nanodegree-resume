/*
 * resume.js
 *
 * Created by Milan Fort <http://www.milanfort.com/>.
 */

/*jslint
 browser: true, continue: true, indent  : 4,
 maxerr : 50,   maxlen  : 110,  plusplus: true,
 regexp : true, todo    : true
 */

/*global resume */

var resume = (function () {
    'use strict';

    var init = function () {
        console.info("Initializing module resume");
        resume.content.init();
        //resume.map.init();
    };

    return { init: init };
}());
