/*공을 정의한다 */
class Ball{

    constructor(container, bg, x, y, width, height, velX, velY, text){
        this.container=container;
        this.div=document.createElement("div");
        this.bg=bg;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;
        this.text=text;//공의 좌표를 출력하기 위한 텍스트

        //style 적용 
        this.div.style.background=this.bg;
        
        this.div.style.position="absolute";
        this.div.style.top=this.y+"px";
        this.div.style.left=this.x+"px";
        
    }
}