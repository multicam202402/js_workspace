/*이퀄라이저에 사용될 막대를 정의한다*/
class Rect{
    constructor(container, bg, x, y, width, height){
        this.container=container;
        this.div=document.createElement("div");
        this.bg=bg;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
          
        //style 적용 
        this.div.style.background=this.bg;
        this.div.style.position="absolute";
        this.div.style.top=this.y+"px";
        this.div.style.left=this.x+"px";
        

    }
}