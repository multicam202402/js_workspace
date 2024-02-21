/*총알을 정의한다*/
class Bullet{
    constructor(container, x, y, width, height, velX, velY){
        this.container=container;
        this.div=document.createElement("div");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        //style
        this.div.style.borderRadius=50+"%";
        this.div.style.background="red";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.container.appendChild(this.div);
    }
}