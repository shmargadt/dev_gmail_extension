/*global $, document, chrome, _ */

var jquery_script = document.createElement('script');
jquery_script.src = chrome.extension.getURL('lib/jquery-1.10.2.min.js');
(document.head || document.documentElement).appendChild(jquery_script);

var gmail_script = document.createElement('script');
gmail_script.src = chrome.extension.getURL('lib/gmail.js');
(document.head || document.documentElement).appendChild(gmail_script);

var moment_script = document.createElement('script');
moment_script.src = chrome.extension.getURL('lib/moment.min.js');
(document.head || document.documentElement).appendChild(moment_script);

var moment_timezone_script = document.createElement('script');
moment_timezone_script.src = chrome.extension.getURL('lib/moment-timezone-with-data.js');
(document.head || document.documentElement).appendChild(moment_timezone_script);

var email_bottom_bar_script = document.createElement('script');
email_bottom_bar_script.src = chrome.extension.getURL('app/email_bottom_bar.js');
(document.head || document.documentElement).appendChild(email_bottom_bar_script);


var jquery_stylesheet = document.createElement('link');
jquery_stylesheet.rel = "stylesheet";
jquery_stylesheet.type = "text/css";
jquery_stylesheet.href = chrome.extension.getURL('css/jquery-ui.min.css');
(document.head || document.documentElement).appendChild(jquery_stylesheet);


var extension_stylesheet = document.createElement('link');
extension_stylesheet.rel = "stylesheet";
extension_stylesheet.type = "text/css";
extension_stylesheet.href = chrome.extension.getURL('css/gmail_extension.css');
(document.head || document.documentElement).appendChild(extension_stylesheet);

var email_bottom_bar_stylesheet = document.createElement('link');
email_bottom_bar_stylesheet.rel = "stylesheet";
email_bottom_bar_stylesheet.type = "text/css";
email_bottom_bar_stylesheet.href = chrome.extension.getURL('css/email_bottom_bar.css');
(document.head || document.documentElement).appendChild(email_bottom_bar_stylesheet);

var calendar_modal_stylesheet = document.createElement('link');
calendar_modal_stylesheet.rel = "stylesheet";
calendar_modal_stylesheet.type = "text/css";
calendar_modal_stylesheet.href = chrome.extension.getURL('css/calendar_modal.css');
(document.head || document.documentElement).appendChild(calendar_modal_stylesheet);

