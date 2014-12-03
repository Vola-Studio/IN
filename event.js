/* 
 * Event -- Libs form Vola Studio
 *
 * Codes from Jack Works(zjwpeter@gmail.com)
 * 
 * Vola Studio 2014.
 *
 * 
 */
(function () {
    var Events = {};
    var Event = {
        on : on,
        publish : publish,
    };
    function on(name,fn){
    	if(!fn){return -1;}
        fn = fn instanceof Array?fn:[fn];
        Events[name] = Events[name] instanceof Array?Events[name]:[];
        for(var i in fn){
            Events[name].push(fn[i]);
        }
    }
    function publish(name,args){
        try{
            for(var i in Events[name]){
                try{
                    Events[name][i].apply(this,args);
                }catch(e){}
            }
        }catch(e){}
        return publish;
    }
    window.Event = Event;
})();