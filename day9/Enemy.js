/*적군을 정의한다*/
class Enemy{
    constructor(container, src, direct, score , x, y, width, height,velX,velY){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.direct=direct; //양수 1, -1 좌
        this.score=score; //적군은 태어날때부터 자기가 몇점 짜리인지 결정된다...
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        //style
        this.img.src=this.src;
        this.img.style.transform=`scaleX(${this.direct})`;

        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.container.appendChild(this.img);
    }

    move(){
        this.x += this.velX;
        this.y += this.velY;

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";        
    }
}