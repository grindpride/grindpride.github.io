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
})({4:[function(require,module,exports) {
console.log('Main script');

$('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors: ['field', 'translation'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '.section-intro',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    // sectionsColor : ['#ccc', '#fff'],
    // paddingTop: '87px',
    // paddingBottom: '30px',
    // fixedElements: '#header, .footer',
    responsiveWidth: 768,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: 'reveal', percentage: 62, property: 'translate' },

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function onLeave(index, nextIndex, direction) {
        if (nextIndex != 3) {
            $('.aside-field, .sidebar-right__field, .timeline').addClass('hidden');
        } else {
            $('.aside-field, .sidebar-right__field, .timeline').removeClass('hidden');
        }
    },
    afterLoad: function afterLoad(anchorLink, index) {},
    afterRender: function afterRender() {},
    afterResize: function afterResize() {},
    afterResponsive: function afterResponsive(isResponsive) {},
    afterSlideLoad: function afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
});

// $.fn.fullpage.setMouseWheelScrolling(false);
// $.fn.fullpage.setAllowScrolling(false);

var ps1 = new PerfectScrollbar('#psEventLine', {
    wheelSpeed: 1,
    wheelPropagation: false,
    minScrollbarLength: 20
});

var ps2 = new PerfectScrollbar('#psTranslation', {
    wheelSpeed: 1,
    wheelPropagation: false,
    minScrollbarLength: 20
});

// $('.tabs__content.bio').each(
//     function () {
//         new PerfectScrollbar(this);
//     })

var events = $("[data-materialId]");
var eventLine = $('#psEventLine');

var materials = $('.material');
var translationLine = $('#psTranslation');
var players = $('.player');
players.hover(function () {
    var name = $(this).data('profile');
    $('.player__hover[data-profile="' + name + '"]').addClass('active');
}, function () {
    $('.player__hover').removeClass('active');
});
var materialArray = [11, 15, 16, 17, 19, 20, 25, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 49, 52, 53];
translationLine.on('ps-scroll-y', function (e) {

    materials.each(function (i) {
        var materialTop = $(materials[i]).position().top;
        if (materialTop > 0 && materialTop < 333) {
            var id = $(materials[i]).attr('id').replace('material-', '');
            if (!$("[data-materialid = " + id + "]").length) return;

            if ($('#psEventLine').hasClass('hidden') && currentId != id) {
                var eventTop = $("[data-materialid = " + id + "]").position().top;
                // console.log('scrolli eveents rom translation', materialTop )
                eventLine[0].scrollTop += eventTop - 60;
                if (materialArray.indexOf(Number.parseInt(id)) > -1) {
                    $('.field').attr('material-id', id);
                    $('.sidebar-right__field').attr('material-id', id);
                }

                currentId = id;
            } else {
                // console.log('no scroll events')
            }
        }
    });
});

var currentId = void 0;

$('#psEventLine').on('ps-scroll-y', function (e) {
    var st = this.scrollTop;
    // console.log(st);
    events.each(function (i) {
        var eventTop = $(events[i]).position().top;
        if (eventTop > 0 && eventTop < 333) {
            var id = $(events[i]).data('materialid');
            var materialTop = $("#material-" + id).position().top;
            if ($('#psTranslation').hasClass('hidden')) {
                $('#psTranslation')[0].scrollTop += materialTop;

                if (materialArray.indexOf(Number.parseInt(id)) > -1) {
                    $('.field').attr('material-id', id);
                    $('.sidebar-right__field').attr('material-id', id);
                }
            } else {
                // console.log('no scrolli cose hidden')
            }
        }
    });
});

var menu = $('.menu__list');
var panels = $('.panel');
$('.player, .player-profile__close').click(function () {

    $('.player-profile').removeClass('visible');
});
$('[data-profile]').click(function () {
    var profileId = $(this).data('profile');
    console.log(profileId);
    if (profileId && $('#' + profileId).length) {
        $('#' + profileId).addClass('visible');
    }
});
$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        // console.log(e);
        $('.player-profile.visible').removeClass('visible');
    }
});

$('.burger').click(function () {
    console.log('toggle');
    $(this).toggleClass('active');
    panels.toggleClass('hidden');
});

$("ul.tabs__caption").on("click", "li:not(.active)", function () {
    $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active");
});

$('.content').on("click", ".content__title:not(.active)", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var hidden = $('.content__tab.hidden');
    var open = $('.content__tab:not(.hidden)');
    hidden.removeClass("hidden");
    open.addClass("hidden");
});

$('.timeline__card').on('click', function () {

    var id = $(this).attr('timeline');
    $('.header__translation').click();
    var materialTop = $("#material-" + id).position().top;
    var currentTop = $('#psTranslation')[0].scrollTop;
    $('#psTranslation').animate({ scrollTop: currentTop + materialTop }, 600);
});
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
},{}]},{},[141,4])
//# sourceMappingURL=/dist/bb700be984d8fa85eac07289a5c5f4fa.map