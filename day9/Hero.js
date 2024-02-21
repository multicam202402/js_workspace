/*
주인공을 정의한다
*/
class Hero{
    constructor(container, src, x, y, width, height, velX, velY){
        /*객체가 보유한 변수를 멤버변수라 한다..*/
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        
        //style 
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.top=this.y+"px";
        this.img.style.left=this.x+"px";

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.container.appendChild(this.img);        
    }

    //움직이기 
    move(){
        //물리량 변화 
        this.x +=this.velX;
        this.y +=this.velY;

        //렌더링
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}