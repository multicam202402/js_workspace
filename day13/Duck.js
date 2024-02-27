/*
그냥 새를 상속받게 될 즉 새라는 종류의 하위 종인 오리를 정의
*/
class Duck extends Bird{
    constructor(color, age){
        //this.age=5; //상속관계에서 부모의 탄생보다 , 부모의 초기화보다
        //앞서는 자식의 코드는 인정받지 못함. 불가능
        //super() 생성자 호출 이전의 코드는 에러..
        super(color, age, "오리");//부모님 먼저 태어나세요
        console.log("Im a duck");
    }
}
 