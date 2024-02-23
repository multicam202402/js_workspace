/*
달력의 셀을 정의
*/
class Cell{
    constructor(container, x, y, width, height, content){
        this.container=container;
        this.div=document.createElement("div");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.content=content; //셀에 채워질 내용

        //style 
        this.div.style.border="1px solid gray";
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        //셀에 표시될 텍스트 정보 
        this.div.innerText = this.content;
        this.container.appendChild(this.div);
    }
}