T={};T.popup = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1>");_.b(_.v(_.d("i18n.hello",c,p,0)));_.b(", <a href=\"http://www.last.fm/user/");_.b(_.v(_.f("username",c,p,0)));_.b("\">");_.b(_.v(_.f("username",c,p,0)));_.b("</a>!</h1>\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);if(_.s(_.f("isNothingToShow",c,p,1),c,p,0,113,143,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  ");_.b(_.v(_.d("i18n.isNothingToShow",c,p,0)));_.b("\r");_.b("\n");});c.pop();}_.b("\r");_.b("\n" + i);_.b("<ul class=\"songs\">\r");_.b("\n" + i);if(_.s(_.f("nowPlaying",c,p,1),c,p,0,204,302,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li id=\"now-playing\" class=\"song\" data-song='");_.b(_.v(_.f("songData",c,p,0)));_.b("'>\r");_.b("\n" + i);_.b(_.rp("song",c,p,"      "));_.b("    </li>\r");_.b("\n");});c.pop();}_.b("\r");_.b("\n" + i);if(_.s(_.f("lastScrobbled",c,p,1),c,p,0,341,451,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li id=\"");_.b(_.v(_.f("timestamp",c,p,0)));_.b("\" class=\"scrobbled song\" data-song='");_.b(_.v(_.f("songData",c,p,0)));_.b("'>\r");_.b("\n" + i);_.b(_.rp("song",c,p,"      "));_.b("    </li>\r");_.b("\n");});c.pop();}_.b("</ul>\r");_.b("\n");return _.fl();;})
T.song = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"panels\">\r");_.b("\n" + i);_.b("  <div class=\"panel date\">\r");_.b("\n" + i);_.b("    <img src=\"img/eq.gif\" class=\"now-playing-icon\">\r");_.b("\n" + i);_.b("    ");_.b(_.v(_.f("date",c,p,0)));_.b("\r");_.b("\n" + i);if(_.s(_.f("service",c,p,1),c,p,0,133,338,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      ");_.b(_.v(_.d("i18n.from",c,p,0)));_.b("\r");_.b("\n" + i);_.b("      <a href=\"http://");_.b(_.v(_.f("service",c,p,0)));_.b("\">\r");_.b("\n" + i);_.b("        <img src=\"http://www.google.com/s2/favicons?domain=");_.b(_.v(_.f("service",c,p,0)));_.b("\"\r");_.b("\n" + i);_.b("             title=\"");_.b(_.v(_.f("service",c,p,0)));_.b("\" class=\"service-icon\">\r");_.b("\n" + i);_.b("      </a>\r");_.b("\n");});c.pop();}_.b("  </div>\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);_.b("  <div class=\"panel actions\">\r");_.b("\n" + i);_.b("    <a href=\"#\" class=\"button unscrobble\">\r");_.b("\n" + i);if(_.s(_.f("timestamp",c,p,1),c,p,0,459,496,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        ");_.b(_.v(_.d("i18n.unscrobble",c,p,0)));_.b("\r");_.b("\n");});c.pop();}if(!_.s(_.f("timestamp",c,p,1),c,p,1,0,0,"")){_.b("        ");_.b(_.v(_.d("i18n.dontScrobble",c,p,0)));_.b("\r");_.b("\n");};_.b("    </a>\r");_.b("\n" + i);if(_.s(_.f("downloadUrl",c,p,1),c,p,0,617,709,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("      <a href=\"");_.b(_.v(_.f("downloadUrl",c,p,0)));_.b("\" download=\"");_.b(_.v(_.f("filename",c,p,0)));_.b("\" class=\"button download\"></a>\r");_.b("\n");});c.pop();}_.b("    <a href=\"#\" class=\"button love ");if(_.s(_.f("isLoved",c,p,1),c,p,0,774,781,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("pressed");});c.pop();}_.b("\"></a>\r");_.b("\n" + i);_.b("  </div>\r");_.b("\n" + i);_.b("</div>\r");_.b("\n" + i);_.b("\r");_.b("\n" + i);_.b("<div class=\"info\">\r");_.b("\n" + i);if(_.s(_.f("unknownTrack",c,p,1),c,p,0,860,966,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <span class=\"artist\">\r");_.b("\n" + i);_.b("      ");_.b(_.v(_.f("artist",c,p,0)));_.b("</span>&nbsp;&ndash; <span class=\"track\">");_.b(_.v(_.f("track",c,p,0)));_.b("</span>\r");_.b("\n");});c.pop();}if(!_.s(_.f("unknownTrack",c,p,1),c,p,1,0,0,"")){_.b("    <a href=\"");_.b(_.v(_.f("artistUrl",c,p,0)));_.b("\" class=\"artist\">\r");_.b("\n" + i);_.b("      ");_.b(_.v(_.f("artist",c,p,0)));_.b("</a>&nbsp;&ndash; <a href=\"");_.b(_.v(_.f("trackUrl",c,p,0)));_.b("\" class=\"track\">");_.b(_.v(_.f("track",c,p,0)));_.b("</a>\r");_.b("\n");};_.b("</div>\r");_.b("\n");return _.fl();;})
T.options = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"options\">\r");_.b("\n" + i);_.b("	<img src=\"img/logo.png\" class=\"logo\">\r");_.b("\n" + i);_.b("	<h2>");_.b(_.v(_.f("scrobbleFrom",c,p,0)));_.b(":</h2>\r");_.b("\n" + i);_.b("	<ul>\r");_.b("\n" + i);_.b("		<li>\r");_.b("\n" + i);_.b("			<label for=\"vk_com\">\r");_.b("\n" + i);_.b("				<input type=\"checkbox\" name=\"connectors\" value=\"vk.js\" id=\"vk_com\">\r");_.b("\n" + i);_.b("		    vk.com\r");_.b("\n" + i);_.b("  		</label>\r");_.b("\n" + i);_.b("		</li>\r");_.b("\n" + i);_.b("		<li>\r");_.b("\n" + i);_.b("			<label for=\"youtube_com\">\r");_.b("\n" + i);_.b("				<input type=\"checkbox\" name=\"connectors\" value=\"youtube.js\" id=\"youtube_com\">\r");_.b("\n" + i);_.b("				youtube.com\r");_.b("\n" + i);_.b("			</label>\r");_.b("\n" + i);_.b("		</li>\r");_.b("\n" + i);_.b("		<li>\r");_.b("\n" + i);_.b("			<label for=\"bandcamp_com\">\r");_.b("\n" + i);_.b("				<input type=\"checkbox\" name=\"connectors\" value=\"bandcamp.js\" id=\"bandcamp_com\">\r");_.b("\n" + i);_.b("				bandcamp.com\r");_.b("\n" + i);_.b("			</label>\r");_.b("\n" + i);_.b("		</li>\r");_.b("\n" + i);_.b("	</ul>\r");_.b("\n" + i);_.b("    <label for=\"correct-track-names\">\r");_.b("\n" + i);_.b("        <input type=\"checkbox\" name=\"correct-track-names\" id=\"correct-track-names\">\r");_.b("\n" + i);_.b("        ");_.b(_.v(_.f("correctTrackNames",c,p,0)));_.b("\r");_.b("\n" + i);_.b("        <br>\r");_.b("\n" + i);_.b("        <span class=\"note\">");_.b(_.t(_.f("correctTrackNamesNote",c,p,0)));_.b("</span>\r");_.b("\n" + i);_.b("    </label>\r");_.b("\n" + i);_.b("	<p class=\"note\">");_.b(_.v(_.f("optionsNote",c,p,0)));_.b("</p>\r");_.b("\n" + i);_.b("</div>\r");_.b("\n");return _.fl();;})
