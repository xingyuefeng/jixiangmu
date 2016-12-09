/**
 * Created by xingyuefeng on 2016/12/4.
 */
window.onload=function(){
    var box=document.getElementById("box");
    //鼠标悬浮动画
    var h1=document.getElementsByTagName("h1");
    var a=document.getElementsByTagName("a");
    var outer_link=document.getElementsByClassName("outer_link");
    var innerUl=document.getElementsByClassName("innerUl");
    for(var i=0;i< a.length;i++) {
        a[i].onmouseenter = function () {
            this.children[0].style.borderRadius = "5px";
            this.children[0].style.color = "white";
            this.children[0].style.backgroundColor = "skyblue";
            animate(this.children[0], {paddingLeft: 30});
        }
        a[i].onmouseleave = function () {
            this.children[0].style.borderRadius = "";
            this.children[0].style.color = "deepskyblue";
            this.children[0].style.backgroundColor = "";
            animate(this.children[0], {paddingLeft: 0, backgroundColor: 0});
        }

    }


    //li点击事件

    for(var i=0;i<outer_link.length;i++){
        outer_link[i].onclick = function () {
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            var a=getStyle(this.nextElementSibling,'display')
            console.log(a)
            if(a=='none'){
                for(var i=0;i<innerUl.length;i++){
                    innerUl[i].style.display='none';
                }
                this.nextElementSibling.style.display='block';
            }
            else {
                this.nextElementSibling.style.display='none';
            }
            //阻止文字被选中
            if(document.all){
                document.onselectstart= function(){return false;}; //for ie
            }else{
                document.onmousedown= function(){return false;};
                document.onmouseup= function(){return true;};
            }
            document.onselectstart = new Function('event.returnValue=false;');



        }

    }
//




}