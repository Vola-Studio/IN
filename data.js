/* 
 * data.js -- Dom & Game Settings
 *
 * Codes from Jack Works(zjwpeter@gmail.com)
 * And idea is from Scott Shen(scottshen0515@gmail.com)
 * 
 * Vola Studio 2014.
 *
 * You can change the game settings in 
 *     var settings = { ...
 */
var doms = {
	environment : $("#game_env"),
	target : $("#game_tg"),
	source : $("#game_sc"),
	message_templet : $("#msg"),
	board : $("#game_board_mask"),
	board_points : $(".board_points"),
	board_msg : $("#game_title"),
	restart_btn : $(".start"),
	settings_title : $("#settings_title"),
	menu_to_settings : $(".settings"),
	menu : $(".game_menu"),
	settings : $(".game_settings"),
	settings_btn : $(".settings_btn"),
	settings_apply : $(".settings_apply")
}
var dom = {
    menu: {
        about: $("#menu_about"),
        inf: $("#menu_inf"),
        classic: $("#menu_classic"),
        settings: $("#menu_settings")
    },
    about: {},
    game: {
        environment: $("#game_env"),
        target: $("#game_tg"),
        source: $("#game_sc"),
        tile: {
            start: $(".game_board_tile.start"),
            mode: $(".game_board_tile.mode"),
            score: $(".game_board_tile.score span"),
            exit: $(".game_board_tile.exit")
        }
    },
    settings: {

    }
}
/* 
 * settings.tgr is the size of the target circle
 * settings.tolerance is the mistake the game will accept
 * if you don't click the source cirle in (settings.speed + random number)ms, you will lose the game
 */
var settings = {
    tgr: 100,
    tolerance: 20,
    speed: 900
}
var data = {
	points: 0,
	bestPoints: 0,
}
