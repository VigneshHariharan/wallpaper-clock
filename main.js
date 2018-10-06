
/*------------------------------------Function is created with date------------*/


const myTime = () =>{


let t = new Date();
let h = t.getHours();
let m = t.getMinutes();
let s = t.getSeconds();
let meridiem = 'AM';
let d = t.getDate();
let y = t.getFullYear();
/*------------------------------------days and months are stored in array getDay and getMonth method gives only numbers to use for date format------------*/

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'
    , 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'Febraury', 'March', 'April', 'May', 'June'
    , 'July', 'August', 'September', 'October', 'November',
    'December']
let da = t.getDay();
let mn = t.getMonth();




/*------------------------------------loops to add 0 before minutes,hours,seconds(01,02,03...)------------*/


    if (s < 10) {
        s = "0" + s;
    }
     
    
if(h > 12){
    h = h-12;
  meridiem = 'PM';
}
    if (h < 10) {
        h = "0" + h;
   }


    if (h === 0) {
        h = 0;
    }

    if (m < 10) {
        m = "0" + m;
    }

/*------------------------------------selecting an id and inserting values using innerText,days and months are displayed by the arrays------------*/

   const someday = document.getElementById('day');
someday.innerText = `It's ${days[da]}` ;


const somedated = document.getElementById('date');
somedated.innerText =  `${months[mn]} , ${d} , ${y} `;

const sometimed = document.getElementById('timed');
sometimed.innerText = `${h} : ${m} : ${s}  ${meridiem}`;

}
/*------------------------------------refreshing the function every 1s by setting interval------------*/

myTime();
setInterval(myTime, 1000);


