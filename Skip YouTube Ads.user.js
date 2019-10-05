// ==UserScript==
// @name Skip YouTube Ads
// @description Automatically skips YouTube ads once the Skip Ad button is available
// @namespace 
// @version 0.0.1
// @match https://*.youtube.com/*
// @run-at document-idle
// @license MIT
// ==/UserScript==

(function (global) {
    'use strict';
    var self = global; 

    self.elementExists = function (sel) {
        return document.querySelectorAll(sel).length;
    };

    self.toggleAdSkip = function (sel) {
        var canSkipAd = setInterval(function () {
            let skipBtn = document.querySelector('.ytp-ad-skip-button'); 

            if (typeof skipBtn === 'object' && skipBtn !== null) {
                clearInterval(canSkipAd);
                skipBtn.click();
            }
        }, 1000);
    }

    self.bindEvents = function () {
        if (self.elementExists('video.video-stream')) {
            self.toggleAdSkip();
        }
    };
    
    function init() {
        self.bindEvents();
    }

    init();
})(window);
