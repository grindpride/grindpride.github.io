// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {
console.log('intro init');
var debug = false;
var skiped = false;
if (window.location.host === 'localhost:1234') {
    debug = true;
}

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
    playerDefaults = { autoplay: 1,
    autohide: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    controls: 0,
    disablekb: 1,
    enablejsapi: 1,
    iv_load_policy: 3 };
var vid = [{ 'videoId': 'AzR_QYX1eEM', 'suggestedQuality': 'hd720' }],
    randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;
var stopPlayAt = 27;
var stopPlayTimer;

console.log(currVid);

window.onYouTubePlayerAPIReady = function () {
    console.log('YouTubePlayerAPIReady');
    if (!skiped) {
        tv = new YT.Player('tv', {
            events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange },
            playerVars: playerDefaults
        });
    }
};

function onPlayerReady() {
    if (!debug && !skiped) {
        tv.loadVideoById(vid[currVid]);

        // tv.playVideo();
    }
}
function fakeClick(fn) {
    var $a = $('<a href="#" id="fakeClick"></a>');
    $a.bind("click", function (e) {
        e.preventDefault();
        fn();
    });

    $("body").append($a);

    var evt,
        el = $("#fakeClick").get(0);

    if (document.createEvent) {
        evt = document.createEvent("MouseEvents");
        if (evt.initMouseEvent) {
            evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            el.dispatchEvent(evt);
        }
    }

    $(el).remove();
}

function onPlayerStateChange(event) {
    var time, rate, remainingTime;
    $('#tv').addClass('active');
    clearTimeout(stopPlayTimer);
    if (event.data == YT.PlayerState.PLAYING) {
        time = tv.getCurrentTime();
        // Add .4 of a second to the time in case it's close to the current time
        // (The API kept returning ~9.7 when hitting play after stopping at 10s)
        if (time + .4 < stopPlayAt) {
            rate = tv.getPlaybackRate();
            remainingTime = (stopPlayAt - time) / rate;
            stopPlayTimer = setTimeout(pauseVideo, remainingTime * 1000);
        }
    }
}
function pauseVideo() {
    tv.pauseVideo();
}

// function onPlayerStateChange(e) {
//     if (e.data === 1){
//         $('#tv').addClass('active');
//         $('.hi em:nth-of-type(2)').html(currVid + 1);
//     } else if (e.data === 2){
//         $('#tv').removeClass('active');
//         if(currVid === vid.length - 1){
//             currVid = 0;
//         } else {
//             currVid++;
//         }
//         // tv.loadVideoById(vid[currVid]);
//         // tv.seekTo(vid[currVid].startSeconds);
//     }
// }

function vidRescale() {

    var w = $(window).width() + 200,
        h = $(window).height() + 200;

    tv.setSize(w, w / 16 * 9);
    $('.tv .screen').css({ 'left': '0px' });
}

$(window).on('load resize', function () {
    if (tv) vidRescale();
});

$('#playIntro').click(function () {
    if (tv) {
        tv.stopVideo();
        tv.playVideo();
    }
});

$('#skipIntro').click(function () {
    skiped = true;
    $('section.section-intro').slideUp(300);
    if (tv) {
        pauseVideo();
    }
});

if (debug) {
    $('#skipIntro').click();
}
},{}],141:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '51255' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[141,3])
//# sourceMappingURL=/dist/06487297b2a70c7082d9bea6ee99e446.map