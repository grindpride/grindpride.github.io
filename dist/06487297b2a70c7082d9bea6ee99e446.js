require = function (r, e, n) {
    function t(n, o) {
        function i(r) {
            return t(i.resolve(r))
        }

        function f(e) {
            return r[n][1][e] || e
        }

        if (!e[n]) {
            if (!r[n]) {
                var c = "function" == typeof require && require;
                if (!o && c) return c(n, !0);
                if (u) return u(n, !0);
                var l = new Error("Cannot find module '" + n + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            i.resolve = f;
            var s = e[n] = new t.Module(n);
            r[n][0].call(s.exports, i, s, s.exports)
        }
        return e[n].exports
    }

    function o(r) {
        this.id = r, this.bundle = t, this.exports = {}
    }

    var u = "function" == typeof require && require;
    t.isParcelRequire = !0, t.Module = o, t.modules = r, t.cache = e, t.parent = u;
    for (var i = 0; i < n.length; i++) t(n[i]);
    return t
}({
    32: [function (require, module, exports) {
        console.log("wtf");
        var e = void 0;
        "localhost:1234" === window.location.host && (e = !0);
        var t = document.createElement("script");
        t.src = "https://www.youtube.com/player_api";
        var o = document.getElementsByTagName("script")[0];
        o.parentNode.insertBefore(t, o);
        var a, n, i = {
                autoplay: 1,
                autohide: 1,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
                controls: 0,
                disablekb: 1,
                enablejsapi: 0,
                iv_load_policy: 3
            }, l = [{videoId: "AzR_QYX1eEM", suggestedQuality: "hd720"}], s = Math.floor(Math.random() * l.length), r = s,
            d = 27;

        function c() {
            e || a.loadVideoById(l[r])
        }

        function u(e) {
            var t, o;
            $("#tv").addClass("active"), clearTimeout(n), e.data == YT.PlayerState.PLAYING && (t = a.getCurrentTime()) + .4 < d && (o = a.getPlaybackRate(), n = setTimeout(w, 1e3 * ((d - t) / o)))
        }

        function w() {
            a.pauseVideo()
        }

        function h() {
            var e = $(window).width() + 200;
            $(window).height();
            a.setSize(e, e / 16 * 9), $(".tv .screen").css({left: "0px"})
        }

        $(".hi em:last-of-type").html(l.length), window.onYouTubePlayerAPIReady = function () {
            a = new YT.Player("tv", {events: {onReady: c, onStateChange: u}, playerVars: i})
        }, $(window).on("load resize", function () {
            h()
        }), $("#skipIntro").click(function () {
            $("section.section-intro").slideUp(300), w()
        }), e && $("#skipIntro").click();
    }, {}]
}, {}, [32])
