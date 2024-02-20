/*이퀄라이저에 사용될 막대를 정의한다*/
class Rect{
    constructor(container, bg, x, y, width, height, targetH){
        this.container=container;
        this.div=document.createElement("div");
        this.bg=bg;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.targetH=targetH; //막대가 늘어나거나, 줄어들 목표 높이 
          
        //style 적용 
        this.div.style.background=this.bg;
        this.div.style.position="absolute";
        this.div.style.top=this.y+"px";
        this.div.style.left=this.x+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        //부모 요소에 부착 
        this.container.appendChild(this.div);
    }

    //막대의 움직임 정의 , 결국 높이를 자유롭게 지정 
    //감속도 공식으로 막대의 높이를 움직이자
    //나의높이 = 현나높이 + a*(targetH - 현나높이);
    move(){
        //물리량 계산
        this.height = this.height + a*(this.targetH - this.height);

        //렌더링
        this.div.style.height=this.height+"px";
    }
}