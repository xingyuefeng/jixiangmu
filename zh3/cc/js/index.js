/**
 * Created by 跃锋 on 2016/10/16.
 */
window.onload=function(){
    var lis=document.getElementById("circle").children;
    var imgs=document.getElementById("imgs");
    var box=document.getElementById("box");
    for(var i=0;i<lis.length;i++){
        //保存当前序号
        lis[i].index=i;
        lis[i].onmouseover=function(){
            //清除样式
            for(var j=0;j<lis.length;j++){
                lis[j].className="";
            }
            this.className="current";
            target=-this.index*600;
            xuhao=this.index;
            imgs.style.left=target+"px";

        }
    }
    box.onmouseover=function(){
        clearInterval(timer);
    }
    box.onmouseout=function(){
        timer=setInterval(change,2000);
    }

    //自动滚动
    var timer=null;
    var xuhao= 0,step=0;
    timer=setInterval(change,2000);
    function change(){
        step-=600;
        xuhao++;
        if(step<=-3600){

            step=0;
        }
        if(xuhao>=6){
            xuhao=0;
        }
        //清除样式
        for(var j=0;j<lis.length;j++){
            lis[j].className="";
        }
        lis[xuhao].className="current";

        imgs.style.left=step+"px";

    }

}