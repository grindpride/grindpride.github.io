require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({173:[function(require,module,exports) {
console.log("intro init");var e=!1,t=!1;window.location.host;var o=document.createElement("script");o.src="https://www.youtube.com/player_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(o,n);var i,a,c={autoplay:1,autohide:1,modestbranding:1,rel:0,showinfo:0,controls:0,disablekb:1,enablejsapi:1,iv_load_policy:3},l=[{videoId:"AzR_QYX1eEM",suggestedQuality:"hd720"}],r=Math.floor(Math.random()*l.length),d=r,s=27;function u(){e||t||i.loadVideoById(l[d])}function v(e){var t=$('<a href="#" id="fakeClick"></a>');t.bind("click",function(t){t.preventDefault(),e()}),$("body").append(t);var o,n=$("#fakeClick").get(0);document.createEvent&&(o=document.createEvent("MouseEvents")).initMouseEvent&&(o.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(o)),$(n).remove()}function p(e){var t,o;$("#tv").addClass("active"),clearTimeout(a),e.data==YT.PlayerState.PLAYING&&(t=i.getCurrentTime())+.4<s&&(o=i.getPlaybackRate(),a=setTimeout(y,1e3*((s-t)/o)))}function y(){i.pauseVideo()}function f(){var e=$(window).width()+200;$(window).height();i.setSize(e,e/16*9),$(".tv .screen").css({left:"0px"})}console.log(d),window.onYouTubePlayerAPIReady=function(){console.log("YouTubePlayerAPIReady"),t||(i=new YT.Player("tv",{events:{onReady:u,onStateChange:p},playerVars:c}))},$(window).on("load resize",function(){i&&f()}),$("#playIntro").click(function(){i&&(i.stopVideo(),i.playVideo())}),$("#skipIntro").click(function(){t=!0,$("section.section-intro").slideUp(300),i&&y()}),e&&$("#skipIntro").click();
},{}]},{},[173])