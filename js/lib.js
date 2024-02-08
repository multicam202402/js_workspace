/*앞으로 재사용가능성이 높으며, 유용하거나 ,복잡한 로직은 함수로 
정의해놓고 이 파일안에 모아놓자*/
function dan(n){
    for(let i=1;i<=9;i++){
        document.write(`${n}*${i}=${n*i} <br>`);
    }
} 