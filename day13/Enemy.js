/*적군을 정의한다*/
class Enemy extends GameObject{
    constructor(container, src, x, y, width, height,velX,velY){
        super(container, src, x, y, width, height,velX,velY); //나보다 부모님이 먼저 초기화 되어야 하니깐..
    }
}