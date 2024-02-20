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
        this.div.style.borderRadius=50+"%";

        this.div.style.position="absolute";
        this.div.style.top=this.y+"px";
        this.div.style.left=this.x+"px";
        
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        //부모 요소에 부착 
        this.container.appendChild(this.div);
    }

    //공 움직이기 
    move(){
        //물리량 변경
        this.x += this.velX;
        this.y += this.velY;

        //공의 현재 x+width 값이, 우측 벽의 한계(900)에 도달하면 velX의 부호를 반대로 전환,즉  -1 곱하기
        //공의 현재 x값이, 좌측 벽의 한계(0)에 도달하면 velX의 부호를 반대로 전환
        if(this.x<=0 || (this.x+this.width) >=900){
            this.velX=this.velX*-1;
        }

        //공의 현재 y값이, 위쪽 벽의 한계(0)에 도달하면 velY의 부호를 반대로 전환 
        //공의 현재 y+height 값이, 아래쪽 벽의 한계(900)에 도달하면 velY부호를 반대로 전환
        if(this.y<=0 || (this.y+this.height)>=900){
            this.velY=this.velY*-1;
        }

        //현재 움직이고 있는 공 인스턴스에 , 정보를 출력해보자  <div></div>
        let str="x:"+this.x+"\n";
        str = str+"y:"+this.y;

        this.div.innerText=str;

        //렌더링
        this.div.style.top=this.y+"px";
        this.div.style.left=this.x+"px";        
    }
}