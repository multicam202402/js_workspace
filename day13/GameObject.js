/*
GameObject 클래스는 게임에 등장하는 모든~~~~~ 객체들의 최상위 객체이다 
따라서 앞으로 정의될 주인공, 적군, 아이템, 총알, 대포 등등.. 모든 클래스가 이 클래스를
상속받아서 코드를 구현하면 중복된 코드를 피해갈 수 있고, 코드 작성 시간을 단축시킬 수 있슴
*/
class GameObject{
    constructor(container, src, x, y, width, height,velX,velY){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;

        //style
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //부착 
        this.container.appendChild(this.img);
    }

    move(){
        //물리량변화 
        this.x +=this.velX;
        this.y +=this.velY;

        //그래픽 렌더링 
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }

}