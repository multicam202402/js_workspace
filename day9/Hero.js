/*
주인공을 정의한다
*/
class Hero{
    constructor(container, src, x, y, width, height, velX, velY){
        /*객체가 보유한 변수를 멤버변수라 한다..*/
        this.container=container;
        this.img;
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

    }
}