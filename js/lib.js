/*앞으로 재사용가능성이 높으며, 유용하거나 ,복잡한 로직은 함수로 
정의해놓고 이 파일안에 모아놓자*/
function dan(n){
    for(let i=1;i<=9;i++){
        document.write(`${n}*${i}=${n*i} <br>`);
    }
} 

/*----------------------------------------------
랜덤값 반환하기    
max 값까지의 랜덤한 값 구하기 단,
getRandom(5);   0~5 까지
----------------------------------------------*/
function getRandom(max){
    let n = (max+1)*Math.random(); //0.0xxxxx  1보다 작은 실수가 난수로 반환됨
    //700.3489348540923
    n = parseInt(n);
    //console.log(n);
    return n; //결과를 리턴
}

/*----------------------------------------------
최소값과 최대값을 지정하여 반환되는 랜덤
getRandomByRange(2, 6)
----------------------------------------------*/
function getRandomByRange(min, max){
    let result = min + getRandom(max-min);
    //console.log(result);
    return result;
}




