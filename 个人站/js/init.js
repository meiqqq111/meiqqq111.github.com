window.onload = function () {
    var oBtn = document.getElementById('btn');
    var timer=null;
    var lock = false;
    window.onscroll=function(){
        var srcoll = document.documentElement.scrollTop || document.body.scrollTop;
        if(lock){
            clearInterval(timer);
        }
        lock=true;
        if(srcoll<=0){
            oBtn.style.display='none';
        }else{
            oBtn.style.display='block';
        }
    };
    oBtn.onclick=function(){
        clearInterval(timer);
        var Srcoll = document.documentElement.scrollTop || document.body.scrollTop;
        var start = Srcoll;
        var dis = 0-start;
        var count=Math.floor(2000/30);
        var n=0;
        timer=setInterval(function(){
            n++;
            //ÈÃË­¶¯
            lock=false;
            document.documentElement.scrollTop=document.body.scrollTop=start+dis*n/count;
            if(n==count){
                clearInterval(timer);
            }
        },30)
    };
};
