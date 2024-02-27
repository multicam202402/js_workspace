/*
모든 새들의 어버이인 그냥 새를 정의한다 
*/
class Bird{
    constructor(color, age, name){
        //색상 및 나이는 모든 새들이 공통적으로 가져야할 변수로 정의
        this.color=color;
        this.age=age;         
        this.name=name;
        console.log("Im a bird");
    }
}