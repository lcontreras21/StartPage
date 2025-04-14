// first line is a comment
// Changed format to follow style in https://github.com/AveYo/fox/blob/main/UserChrome.js
// That adds await/async to fix _gbrowser issue caused in firefox 136.0.2

let { classes: Cc, interfaces: Ci, manager: Cm, utils: Cu } = Components;
const Services = globalThis.Services || ChromeUtils.importESModule('resource://gre/modules/Services.jsm').Services;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NOTE: cannot be set in UC snippets below because reason? and also cannot be set in init normally

// ==UserScript==
// @name            NewTabPageOverride v2
// @author          lcontreras21
// @description
// @include         main
// @onlyonce
// ==/UserScript==

if (typeof UC === 'undefined') var UC = {};

var UC_NewTabPageOverride_init = function () {
  // Override about:newtab to go to my custom startpage
  ChromeUtils.defineESModuleGetters(this, {AboutNewTab: 'resource:///modules/AboutNewTab.sys.mjs'}); // Version 136 made me change this
  var newTabURL = 'file://///home/lcontreras/Repos/StartPage/startpage.html';
  AboutNewTab.newTabURL = newTabURL;
};

UC_NewTabPageOverride_init();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function UserChromeJS () {
  Services.obs.addObserver(this, 'chrome-document-global-created', false);
};
UserChromeJS.prototype = {
  observe: function (s) {
    s.addEventListener('DOMContentLoaded', this, { once: true });
  },
  handleEvent: async function (evt) {
    let browser = evt.originalTarget, document = browser, window = browser.defaultView, console = window.console;
    if (window.gBrowserInit && !window.gBrowserInit.delayedStartupFinished) {
      await window.delayedStartupPromise;
    }
    if (!window.gBrowserInit || !window.docShell) {
      /* console.info(window.location.href); */ return;
    }
    /*******************************************    PLACE UC SNIPPETS BELOW THIS LINE!    *******************************************/
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // ==UserScript==
    // @name            SelectTabModifierOverride v2
    // @author          lcontreras21
    // @description
    // @include         main
    // @onlyonce
    // ==/UserScript==

    if (typeof UC === 'undefined') UC = {};

    UC.SelectTabModifierOverride = {
      init: function () {
        // Set Goto Tab I (now CTRL + i), was (ALT + i)
        let key1 = window.document.getElementById('key_selectTab1');
        let key2 = window.document.getElementById('key_selectTab2');
        let key3 = window.document.getElementById('key_selectTab3');
        let key4 = window.document.getElementById('key_selectTab4');
        let key5 = window.document.getElementById('key_selectTab5');
        let key6 = window.document.getElementById('key_selectTab6');
        let key7 = window.document.getElementById('key_selectTab7');
        let key8 = window.document.getElementById('key_selectTab8');
        let keyL = window.document.getElementById('key_selectLastTab');
        key1.setAttribute('modifiers', 'accel');
        key2.setAttribute('modifiers', 'accel');
        key3.setAttribute('modifiers', 'accel');
        key4.setAttribute('modifiers', 'accel');
        key5.setAttribute('modifiers', 'accel');
        key6.setAttribute('modifiers', 'accel');
        key7.setAttribute('modifiers', 'accel');
        key8.setAttribute('modifiers', 'accel');
        keyL.setAttribute('modifiers', 'accel');

        console.info('\u2713 SelectTabModifierOverride v2');
      }
    };

    UC.SelectTabModifierOverride.init();
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*******************************************    PLACE UC SNIPPETS ABOVE THIS LINE!    *******************************************/
  }
}; if (!Services.appinfo.inSafeMode) new UserChromeJS();
/// ^,^
