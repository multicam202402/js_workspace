/*주인공을 정의한다*/
 //이 시점부터 GameObject 가 보유한 모든 요소(속성, 메서드)는 자식이
 //사용할 수 있다..
class Hero extends GameObject{
    constructor(container, src, x, y, width, height,velX,velY){
        super(container, src, x, y, width, height,velX,velY); //상속관계에 있는 자식의 생성자가 호출될때는 반드시
        //부모의 초기화가 선행되어야 하므로, 부모의 생성자를 호출해야 한다
    }
}