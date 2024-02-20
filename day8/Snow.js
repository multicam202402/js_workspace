/*눈을 정의한다 */

class Snow{
    //변수와 함수만 올 수 있다..    

    //눈이 가져야할 속성,상태값들을 보유
    constructor(container, x, y, width, height, velX, velY){
        this.container=container; //어디 요소에 부착할지, 즉 이 눈의 부모요소
        this.div=document.createElement("div");
        this.x=x;        
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX; //x축으로의 속도
        this.velY=velY; //y축으로의 속도 

        //style 적용 
        this.div.style.background="#ffffff";

        this.div.style.position="absolute";
        this.div.style.top=this.y+"px";
        this.div.style.left=this.x+"px";
        
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        
        this.container.appendChild(this.div); //부모에 부착
    }
}
