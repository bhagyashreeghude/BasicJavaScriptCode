
/*let type='ji';
console.log(typeof type);

let type2=Number(type)
console.log(typeof type2);
console.log(type2);

let sub=['math','sst','sci','hind','eng'];
console.log(sub.length);

console.log(sub.push('bio'));
console.log(sub);
//
console.log(sub.unshift('litreture'));
console.log(sub);
//
console.log(sub.pop());
console.log(sub);
//
console.log(sub.shift());
console.log(sub);
//
//
console.log(sub);
console.log(sub.splice(1,3));
console.log(sub.indexOf('sc'));*/

let book=[
    ['rat','bat','mat','cat'],
    ['mita','rita','sita','gita'],
    ['loon','moon','roon','doon']
];
console.log(book[1][2],book[2][1],book[0][3]);

for(i=1;i<10;i++){
    console.log(`2* ${i} = ${2*i}`);
}

function multi(num1,num2){
    for(i=1;i<10;i++){
        document.write(`${num1}* ${i} = ${num1*i}`);
        document.write("<br>")
    }  
}
multi(5,3);

function add(num1,num2){
    addition=num1+num2;
    return addition;
}

console.log(add (5,6));

function addi(){
    let addo=arguments[0]+arguments[1]+arguments[2];
    console.log(addo);
}
addi(5,7);
addi(3,5,2);



let person={
    fname:'ram',
    lname:'sita',
    sayhi(){
        console.log("hi i am "+ this.lname+ " and i have a "+toy.color +" bear");
    }
};
let toy={
    color:'brown'
}
person.sayhi();
person.fname='shree';
console.log(person);




///set and get date
let date=new Date;
console.log(date);
date.setDate(date.getDate());
console.log(date);

//getFullYear
let year=date.getFullYear();
console.log(year);
/*year.setFullYear(date.getFullYear()+2);
console.log(year);

/*getMonth
let month=month.getMonth();
console.log(month);
month.setMonth(11);
console.log(month);

//getDay
let day=date.getDay();
console.log(day);
*/
//getDate
let date1=date.getDate();
console.log(date1);
let date2=new Date();
console.log(date2.setDate(date2.getDate()+2));


/*getHours
let hour=date.getHours();
console.log(hour);


//getminutes
let minutes=date.getMinutes();
console.log(minutes);

//getseconds
let seconds=date.getSeconds();
console.log(seconds);

*/

//getter function

let veg = {
    veg1 : 'potato',
    veg2 : 'tomato',
    get getveg1(){
        return this.veg1.toUpperCase();
    }
};
console.log(veg.getveg1);

//getter function

let vegi = {
    veg1 : 'potato',
    veg2 : 'tomato',
    getveg1 : function(){
        return this.veg1.toUpperCase();
    }
};
console.log(vegi.getveg1());

//setter function

let vegetable = {
    veg1 : 'potato',
    veg2 : 'tomato',
    set setveg2(n){
         this.veg2=n.toUpperCase();
    }
};
vegetable.setveg2='cucumber';
console.log(vegetable);

//constructor
function School(teach,classess,rooms,students){
    this.teacher = teach;
    this.classess= classess;
    this.rooms = rooms;
    this.students=students;
}
var mahaveer = new School('meena','primary',5,40);
console.log(mahaveer);
//prototype in js
School.prototype.subject='Hindi';
console.log(mahaveer.subject);

//nested objects
var details = {
    name: 'ram',
    contact: 8826,
    email: "123@gmail.com",
    personalInfo: {
        address:{
            street: 151,
            city: 'tonk',
            country: 'india'
        }
    }

};
console.log(details.personalInfo.address.city);