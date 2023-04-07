function setClock(){
    var dateInfo = new Date(); //
    var hour = hours(dateInfo.getHours()-13);
    var min = modifyNumber(dateInfo.getMinutes());
    var sec = modifyNumber(dateInfo.getSeconds());
    var year = dateInfo.getFullYear();
    var month = modifyNumber(dateInfo.getMonth()+1); //monthIndex를 반환해주기 때문에 1을 더해준다.
    var date = modifyNumber(dateInfo.getDate());
    document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;
    document.getElementById("date").innerHTML = year + " / " + month + " / " + date;
}
function hours(hours) {
    if(parseInt(hours)<10) {
        return "0"+hours;
    } else if (parseInt(hours)===24) {
        return "00";
    } else return hours;
}

function modifyNumber(time) {
    if(parseInt(time)<10) {
        return "0"+time;
    } else return time;
}



window.onload = function(){
    setClock();
    setInterval(setClock,1000); //1초마다 setClock 함수 실행
}