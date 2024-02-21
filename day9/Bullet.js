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

        //this란? 
        //거푸집으로부터 태어난 인스턴스가 자기 자신을 가리킬수 있는 변수 
        //아래의 코드에서, move() 내에서 인스턴스인 현재 총알이 자기자신을 
        //가리켜야 하므로 this를 사용함

        //현재 총알의 인스턴스와 게임에 존재하는 모든 적군과의 충돌검사 후, 
        //충돌이면 (총알을 화면에서제거+ 총알을  배열에서제거) 나 죽고
        //충돌이면 (적군도 화면에서제거+ 적군도  배열에서제거) 너 죽고
        for(let i=0; i< enemyArray.length;i++){ //적군 수만큼 ...

            let result = collisionCheck(this , enemyArray[i]);//충돌여부를 판단하기
            if(result){//충돌 감지
                
                score +=enemyArray[i].score; //전역변수 score에 10누적

                //나죽고 (화면제거 + 배열에서 제거 )
                wrapper.removeChild(this.div);
                bulletArray.splice( bulletArray.indexOf(this) , 1 );

                //(적군)너죽고(화면제거 + 배열에서 제거)
                wrapper.removeChild(enemyArray[i].img);
                enemyArray.splice(i , 1);

            }
        }

        //화면의 한계점을 넘어설땐, 총알을 제거(화면에서제거+ 배열에서제거)
        if(this.x >=1280){
            wrapper.removeChild(this.div);//1.화면에서 제거 
            bulletArray.splice( bulletArray.indexOf(this) ,1); //2.배열에서도 제거     
        }

        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}