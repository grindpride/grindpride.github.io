require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({173:[function(require,module,exports) {
console.log("intro init");var o=!1,e=!1;window.location.host;var t=document.createElement("script");t.src="https://www.youtube.com/player_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);var a=void 0,i=window.location.href;console.log(i);var l,r={autoplay:1,autohide:1,modestbranding:1,rel:0,showinfo:0,controls:0,disablekb:1,enablejsapi:1,iv_load_policy:3},c={videoId:"AzR_QYX1eEM",suggestedQuality:"hd720",host:"https://www.youtube.com",origin:i},d=27;function s(t){console.log("PLAYER IS READY"),o||e||(t.target.loadVideoById(c),t.target.playVideo())}function u(o){var e,t;console.log("onPlayerStateChange"),console.log(o.data),$("#tv").addClass("active"),clearTimeout(l),-1==o.data&&(console.log("play -1"),o.target.playVideo()),o.data==YT.PlayerState.PLAYING&&(e=a.getCurrentTime())+.4<d&&(t=a.getPlaybackRate(),l=setTimeout(w,1e3*((d-e)/t)))}function w(){a.pauseVideo()}function y(){var o=$(window).width()+200;$(window).height();a.setSize(o,o/16*9),$(".screen").css({left:"0px"})}window.onYouTubePlayerAPIReady=function(){console.log("YouTubePlayerAPIReady"),e||(a=new YT.Player("tv",{events:{onReady:s,onStateChange:u},playerVars:r}),window.VideoControl=a)},$(window).on("load resize",function(){a&&y()}),$("#playIntro").click(function(){a&&(a.stopVideo(),a.playVideo())}),$("#skipIntro").click(function(){e=!0,$("section.section-intro").slideUp(300),a&&w()}),o&&$("#skipIntro").click();
},{}]},{},[173])