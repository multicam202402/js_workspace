/*적군을 정의한다*/
class Enemy{
    constructor(container, src, direct, x, y, width, height,velX,velY){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.direct=direct; //양수 1, -1 좌
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        //style
        this.img.src=this.src;

        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.container.appendChild(this.img);
    }
}