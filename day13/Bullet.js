/*총알을 정의한다
상속이란? 
  과거에 작성해놓았던 클래스와 동일한 내용을 또 다시 작성하지 않기 위해
  즉 코드 중복을 피하기 위해, 기존의 클래스를 재사용하는 oop의 클래스
  정의 기법 
*/
class Bullet extends GameObject {
  constructor(container, src, x, y, width, height, velX, velY) {
    super(container, src, x, y, width, height, velX, velY);
  }
}