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
        this.div.style.filter="blur(2px)";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.container.appendChild(this.div);
    }
    move(){
        this.x+=this.velX;
        this.y+=this.velY;

        //화면의 한계점을 넘어설땐, 총알을 제거(화면에서제거+ 배열에서제거)
        if(this.x >=1000){
            wrapper.removeChild(this.div);//1.화면에서 제거 
            bulletArray.splice( bulletArray.indexOf(this) ,1); //2.배열에서도 제거     
        }


        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}