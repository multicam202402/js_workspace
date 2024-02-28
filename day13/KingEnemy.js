/*
우리는 이미 적군 클래스를 가지고 있음에도, 아래의 클래스를 별도로 만드는
이유는? 부모로 물려받는 기능이 현재 상황에 맞지 않을 경우 업그레이드할
필요가 있다.. 즉 부모가 물려준 메서드를 동일한 이름으로 재정의하는 기법을
오버라이딩(OverRiding)
이때, 메서드명이 부모와 자식 둘다 보유하고 있으므로, 호출시엔 자식의 
메서드가 최신 메서드 이므로, 자식 메서드를 최우선하여 호출
*/
class KingEnemy extends GameObject{
    constructor(container, src, x, y, width, height,velX,velY, r, velR){
        super(container, src, x, y, width, height,velX,velY);

        this.r=r; //이 객체의 로테이트
        this.velR=velR; //각도의 크기 

        //style 
        this.img.style.transform=`rotate(${this.r}deg)`;
    }
    
    //녹색 왕파리는 움직임이 틀리므로, 부모의 메서드와 완전 100% 동일한
    //메서드로 재정의하자 
    move(){ //메서드 오버라이딩(부모 메서드 재정의 기법)
        //물리량 변화
        this.r +=this.velR;
        this.x +=this.velX;
        this.y +=this.velY;

        //렌더링(그래픽 처리)
        this.img.style.transform=`rotate(${this.r}deg)`;
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";        
    }
}






