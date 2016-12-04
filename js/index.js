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



    for(var i=0;i<outer_link.length;i++){
        var flag=true;
        outer_link[i].onclick = function () {

            if(flag){
                this.nextElementSibling.style.display='block';

                flag=false;
            }
            else{
                this.nextElementSibling.style.display='none'
                flag=true;
            }

        }

    }
//                //li点击事件
//            for(var i=0;i<innerUl.length;i++) {
//                a[i].onclick = function () {
//
//                }
//




}