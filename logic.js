/* 
 * logic.js -- main logic
 *
 * Codes from Jack Works(zjwpeter@gmail.com)
 * And idea is from Scott Shen(scottshen0515@gmail.com)
 * 
 * Vola Studio 2014.
 *
 * 
 */
dom.game.source.click(function () {
    var $t = $(this).stop(true);
	var result = checkr($t.attr('r'), settings.tgr, settings.tolerance, true);
	if(result == "in range"){
		win();
	}
	else{
		lose();
	}
})
function lose(){
	Event.publish("result lose")("result",["lose"]);
}
function win(){
	Event.publish("result win")("result",["win"]);
	ani();
}
function ani(){
    settings.tgr = random(70,150)
	dom.game.target.attr("r", settings.tgr);
	dom.game.source.css("fontSize",0).attr("r",10)
	.animate({"fontSize":150 + settings.tolerance}, {
		step: function(now) {
			var $t = $(this);
			$t.attr("r",now);
			if(checkr(now, settings.tgr, settings.tolerance, false) == "stop animation"){
				$t.stop(true);
				lose();
			}
		},
		duration:Math.random()*1000 + settings.speed
	}, 'linear', function () {
	    lose();
	})
}
function random(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
function checkr(s,t,m,c){
	/*
	 * 
     * Actions:
	 * "too big"   "continue animation"
	 * "too big"   "stop animation"
	 * "too small" "continue animation"
	 * "in range"  "continue animation"
     *                        t-m                                t+m                        t+2m
     *          too small                   in range                       stop animation               too big
	*/
	  if(t+m<s&&c) return "too big";
	  if(t+m+m<s){if(c)return "too big";else return ("stop animation")}
	  if(!c&&(t+m<s||t-m>s||(t-m<s&&s<t+m)))return "continue animation"
	  if(t-m>s&&c)return "too small"
	  if(t-m<s&&s<t+m)return "in range"
	  return "error"
	 
}