T={};T.popup = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h1>Привет, <a href=\"http://www.last.fm/user/");_.b(_.v(_.f("username",c,p,0)));_.b("\">");_.b(_.v(_.f("username",c,p,0)));_.b("</a>!</h1>");_.b("\n" + i);if(_.s(_.f("isNothingToShow",c,p,1),c,p,0,102,147,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  Скоро здесь появятся заскробленные песни.");_.b("\n");});c.pop();}_.b("\n" + i);if(_.s(_.f("nowPlaying",c,p,1),c,p,0,184,247,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("  <div id=\"now-playing\" class=\"song\">");_.b("\n" + i);_.b(_.rp("song",c,p,"    "));_.b("  </div>");_.b("\n");});c.pop();}_.b("\n" + i);_.b("<ul id=\"last-scrobbled\">");_.b("\n" + i);if(_.s(_.f("lastScrobbled",c,p,1),c,p,0,309,361,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <li class=\"song\">");_.b("\n" + i);_.b(_.rp("song",c,p,"      "));_.b("    </li>");_.b("\n");});c.pop();}_.b("</ul>");_.b("\n");return _.fl();;})
T.song = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<a href=\"");_.b(_.v(_.f("trackUrl",c,p,0)));_.b("\">");_.b("\n" + i);_.b("  <img src=\"");_.b(_.v(_.f("icon",c,p,0)));_.b("\" class=\"icon\">");_.b("\n" + i);_.b("</a>");_.b("\n" + i);_.b("\n" + i);_.b("<a href=\"");_.b(_.v(_.f("artistUrl",c,p,0)));_.b("\">");_.b(_.v(_.f("artist",c,p,0)));_.b("</a> &ndash; <a href=\"");_.b(_.v(_.f("trackUrl",c,p,0)));_.b("\">");_.b(_.v(_.f("track",c,p,0)));_.b("</a>");_.b("\n" + i);_.b("\n" + i);_.b("<span class=\"date\">");_.b("\n" + i);_.b("  <img src=\"img/eq.gif\" class=\"now-playing-icon\">");_.b("\n" + i);_.b("  ");_.b(_.v(_.f("date",c,p,0)));_.b("\n" + i);_.b("</span>");_.b("\n");return _.fl();;})
