/* 
 * UI.js -- deal with user interface
 *
 * Codes from Jack Works(zjwpeter@gmail.com)
 * And idea is from Scott Shen(scottshen0515@gmail.com)
 * 
 * Vola Studio 2014.
 *
 * most of ui event based on event.js
 */

/* Points update */
Event.on("points changed", function (e) {
	var now = Math.round(e.now);
	var type = e.type;// add minus* clear
	var value = e.value;//changed value
	e.type != "clear" && dom.game.tile.score.html(now);

	if (type == "add" && value >= 1.5) {
	    gameBoardTileTips("Critical!");
	}
});
Event.on("points new high", function(v){
});

/* Game Start & Over */
dom.game.tile.start.click(function (){
	ani();
});
Event.on("result lose",function (){
    gameBoardTileTips("Game over");
});

/* Menu activity */
function menuAnimation() {
    var list = [dom.menu.about.get(0), dom.menu.inf.get(0), dom.menu.classic.get(0), dom.menu.settings.get(0)];
    var thisIndex = list.indexOf(this);
    var css = [[2, 1, 0, 0], [1, 2, 1, 0], [0, 1, 2, 1], [0, 0, 1, 2]][thisIndex];
    function SUB_setClass(d, n) {
        d.className = "menu " + ["","dis1","active"][n];
    }
    for (var i in list) {
        SUB_setClass(list[i], css[i]);
    }
}
$(".menu").mouseover(menuAnimation);
dom.menu.about.click(function () {
    $(".stage").hide();
    $(".game_stage_about").show();
});
dom.menu.inf.click(function () {
    $(".stage").hide();
    $(".game_stage_gaming").show();
});
$(".backToMenu").click(function () {
    $(".stage").hide();
    $(".game_stage_menu").show();
});
function gameBoardTileTips(text) {
    $(".game_board_tile.tips").html(text)
        .animate({ "zoom": 1.25 },250)
        .animate({ "zoom": 1 }, 250, function () {
            this.innerHTML = 'In'
        });
}
