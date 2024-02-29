/*썸네일과 큰 이미지에 사용될 포토 객체*/
class Photo{
    constructor(container, src, x, y, width, height){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.img.src=this.src;
        this.msg="연습";

        //style
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //이미지에 테두리 적용 ( box에 의하면 border, margin, padding 등은 크기에 영향)
        this.img.style.border="2px solid yellow";
        this.img.style.boxSizing="border-box";

        this.container.appendChild(this.img);

        //이미지에 클릭 이벤트 연결 
        $(this.img).click(()=>{
            //이벤트 처리 영역에서 this의 scope 는 이벤트를 일으킨 객체를 의미하지만
            //화살표 함수를 사용하면, 바깥쪽 상위 scope 영역을 접근할 수 있다
            //aside  안에 있는 pic이라는 이미지 객체의 src를 현재 클릭한 썸네일과 동일하게처리
            
            //현재 클릭된 객체가 배열의 어디에 존재하는지를 알아맞출수만 있다면, 
            //같은 index를 같는  movie.marvel 배열로부터  각종 정보를 가져올 수 있다.
            let index = thumbArray.indexOf(this);
            console.log("당신이 선택한 포토의 배열의 인덱스는 ",  index, "이고, 이 index로 marvel["+index+"] 접근");

            let obj = movie.marvel[index]; //마블 배열내의 영화 정보 객체 하나를 추출 
            

            $("#pic").attr("src", this.src); //큰 이미지 보여주기 
            
            
            let tag="개봉일 : "+obj.release_year+"<br>";
            tag+="부제목 : "+obj.phase;
            $("#content").html(tag);
        });
    }
}