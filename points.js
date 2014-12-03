/* 
 * points.js -- logic about points
 *
 * Codes from Jack Works(zjwpeter@gmail.com)
 * And idea is from Scott Shen(scottshen0515@gmail.com)
 * 
 * Vola Studio 2014.
 *
 */
(function () {
	Event.on("result lose", function(){
		data.points = 0;
		Event.publish("points changed",[{now:0, type: "clear"}]);
	});
	Event.on("result win", function(){
		var gotpts = point_calc(doms.source.attr("r"), settings.tgr, settings.tolerance, settings.speed);
		data.points += gotpts;
		Event.publish("points changed",[{now: data.points, type: "add", value: gotpts}]);
	});
	Event.on("points changed", function(){
		if(data.bestPoints < data.points){
			Event.publish("points new high",[data.points]);
		}
	});
    /* 
     * Use to calc the point when click. wish a better version
     * gsr: r of source circle
     * gtr: r of target circle
     * mis: mistake (settings.torlorance)
     * time: settings.speed
     */
	function point_calc(gsr, gtr, mis, time){
		var points = 1/(Math.abs(gsr - gtr)*time*mis) * 1e5;// * 8;
		points = parseFloat(points.toFixed(2));
		if(points>5)points = 5;
		else if(points<1)points = 1;
		return points;
	}
})();
