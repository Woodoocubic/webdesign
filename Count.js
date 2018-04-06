var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;
var RADIUS=8;
var MARGIN_TOP=60;
var MARGIN_LEFT=30;

var endTime=new Date(2014, 6, 11, 18,47,52);
var curShowTimeSeconds=0;

var balls=[];



window.onload=function () {
    var canvas=document.getElementById('canvas');
    var canvas=canvas.getContext('2d');

    canvas.width=WINDOW_WIDTH;
    canvas.height=WINDOW_HEIGHT;
    curShowTimeSeconds=getCurrentShowTimeSeconds();

    setInterval(){
        render(context);
        update();

    }

}

function getCurrentShowTimeSeconds() {
    var curTime=new Date();
    var ret=endTime.getTime()-curTime.getTime();
    ret=Math.round(ret/1000);

    return ret>=0 ? ret:0;
}

function addBalls(x,y,num) {
    for (var i=0; i<digit[num].length;i++)

}

function render (cxt){

    cxt.clearRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);

    var hours=parseInt(curShowTimeSeconds/3600);
    var minutes =parseInt((curShowTimeSeconds-hours*3600)/60);
    var second =curShowTimeSeconds%60;

    renderDigit (MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), cxt);
    renderDigit (MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP, parseInt(hours%10), cxt);
    renderDigit (MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP, 10, cxt);

    renderDigit (MARGIN_LEFT+39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10), cxt);
    renderDigit (MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP, parseInt(minutes%10), cxt);
    renderDigit (MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP, 10, cxt);

    renderDigit (MARGIN_LEFT+78*(RADIUS+1), MARGIN_TOP, parseInt(seconds/10), cxt);
    renderDigit (MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP, parseInt(seconds%10), cxt);
}

renderDigit (x, y, num, cxt){
    cxt.fillStyle="rgba(0, 102, 153)";

    for (var i=0; i<Digit[num].length; i++)
        for (var j=0; j<Digit[num][i].lenth; j++)
            if(Digit[num][i][j]==1){
                cxt.beginPath();
                cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
                cxt.closePath();
                cxt.fill();
            }
}

function update() {
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nextHours=parseInt(nextShowTimeSeconds/3600);
    var nextMinutes =parseInt((nextShowTimeSeconds-hours*3600)/60);
    var nextSecond =nextShowTimeSeconds%60;

    var curHours=parseInt(curShowTimeSeconds/3600);
    var curMinutes =parseInt((curShowTimeSeconds-hours*3600)/60);
    var curSecond =curShowTimeSeconds%60;

    if(nextSecond!=curSecond){

        curShowTimeSeconds=nextShowTimeSeconds;
    }
}
