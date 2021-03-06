(function() {

var lastNotificationTime = 0;

function bind(audio) {
    if (!$) return;

    audio.bind("play", function() {
        sendStartPlaying(audio);
    });

    audio.bind("loadedmetadata", function() {
        sendStartPlaying(audio);
    });

    audio.bind("timeupdate", function() {
        if (getTimestamp() >= lastNotificationTime + LASTIQUE_UPDATE_INTERVAL_SEC)
            sendContinuePlaying(audio);
    });
}

function sendStartPlaying(audio) {
    if (!window.Player || isNaN(getDuration(audio)))
        return;

    lastNotificationTime = getTimestamp();
    var info = getCurrentTrackInfo(audio);
    sendToBackground({
        event: "start_playing",
        service: "bandcamp.com",
        song: info
    });
}

function sendContinuePlaying(audio) {
    if (!window.Player)
        return;

    lastNotificationTime = getTimestamp();
    sendToBackground({
        event: "continue_playing",
        song: {
            id: getId(audio)
        }
    });
}

function getCurrentTrackInfo(audio) {
    var info = {
        id: getId(audio),
        duration: getDuration(audio),
        downloadUrl: getDownloadUrl(audio)
    }

    var track = getTrack();
    if (!tryGetCompilationArtistAndTrack(track, info)) {
        info.artist = getArtist();
        info.track = track;
    }

    return info;
}

function getMode() {
    if (window.location.hostname == "bandcamp.com")
        return Mode.Discover;

    var path = window.location.pathname.split("/")[1];
    if (!path || path == "album" || path == "releases")
        return Mode.Album;
    if (path == "track")
        return Mode.Track;
}

function tryGetCompilationArtistAndTrack(track, resultObj) {
    if (getMode() != Mode.Album)
        return false;

    var result = true;
    var delimiter = " - "
    $("#track_table .title span[itemprop='name']").each(function() {
        var title = $(this).text();
        if (title.indexOf(delimiter) == -1)
            result = false;
    });

    if (result && typeof(resultObj) === "object") {
        var pos = track.indexOf(delimiter);
        resultObj.artist = track.substr(0, pos);
        resultObj.track = track.substr(pos + 3);
    }

    return result;
}

function getId(audio) {
    var src = audio.attr("src");

    var idStrPos = Math.max(src.indexOf("&id="), src.indexOf("?id="));
    if (idStrPos == -1)
        return getArtist() + " - " + getTrack();

    var idPos = idStrPos + 4;
    var idStrEnd = src.indexOf("&", idStrPos + 1);
    return idStrEnd == -1 ? src.substr(idPos) : src.substr(idPos, idStrEnd - idPos);
}

function getDuration(audio) {
    return audio.prop("duration");
}

function getTrack() {
    var mode = getMode();
    if (mode == Mode.Album)
        return $(".track_info .title").text().trim();
    if (mode == Mode.Track)
        return $("#name-section .trackTitle").text().trim();
    if (mode == Mode.Discover)
        return $(".detail-player .playing,.busy").parents(".discover-detail-inner").find(".track_info .title-section").text().trim();
}

function getArtist() {
    var mode = getMode();
    if (mode == Mode.Album || mode == Mode.Track)
        return $("span[itemprop=byArtist]").text().trim();
    if (mode == Mode.Discover)
        return $(".detail-player .playing,.busy").parents(".discover-detail-inner").find(".detail-body .detail-artist a").text().trim();
}

function getDownloadUrl(audio) {	
    return ensureAbsoluteUrl(audio.attr("src"));
}

function ensureAbsoluteUrl(url) {
	if (url.startsWith("//"))
		return window.location.protocol + url;
	return url;
}

var Mode = { Album : 0, Track : 1, Discover : 2 };

var mode = getMode();
if (mode == Mode.Album || mode == Mode.Track)
    bind($("audio").first());
if (mode == Mode.Discover)
    $(document).ajaxComplete(function() {
        bind($("audio").eq(2));
    });
})();
