function test(mJsDate){
    var str = mJsDate.toLocaleString().substring(0, 3) +
              " number " + Math.ceil(mJsDate.date() / 7) +
              " of the month";
    return str;
 }
 var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
 var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
 for(var i = 1; i <= 31; i++) {
    var myDate = "2014-01-"+ i;
    console.log( days[myDate.getDay()+","+test(moment(myDate))+" неделя "+  months[myDate.getMonth()]+" "+ myDate.getFullYear()]);
 }