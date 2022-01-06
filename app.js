/*
let Admines = ["Ahmed", "Osama", "Sayed", "Stop", "zdd"];
let Employee = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

let counter = 0
let counter2 = 0

for (let z = 0; z < Admines.length; z++) {
    
    if (Admines [z]==="Stop") break;  
    counter2 += 1
    
}
document.write(`we have ${counter2} admins <hr>`)

    




for ( i = 0; i < Admines.length; i++) {
    if (Admines[i]==="Stop") break;
    document.write(`<div>`)
    
    document.write(`The admin for group ${i+1} is ${Admines[i]}`)
    document.write(`<h3>Members</h3>`)
     
    for (let j = 0; j < Employee.length; j++) {
      if (Employee[j][0]===Admines[i][0]){counter +=1 
      document.write(` <h4> -${counter} ${Employee[j]}</h4>`)}
      
        
    }
    counter = 0
    document.write(`<hr></div>`)
}
document.write(`we have ${z} admins`)

777






/* /* // const tst = document.querySelector(".test");
// const tst2 = document.querySelector(".test2");

// const chgtxt = () => {
//     tst.innerHTML="hi"
//     tst.style.backgroundColor="black"
// }

// const chgClr = () => {
//     tst2.style.backgroundColor = "pink"
//     tst2.innerHTML="Love U"

// }
// const chgClrB = () => {
//     tst2.style.backgroundColor = "black"
//     tst2.innerHTML="hate U"
// }

// window.addEventListener("load", () => {
//     tst2.addEventListener("mouseover",chgClr)
//     tst2.addEventListener("mouseout",chgClrB)

// });
// const subForm = () => {
//     const Fname = document.getElementById("Fname").value;
//     const Lname = document.getElementById("Lname").value;
//     alert("Your name is " + Fname+" "+Lname )

// }

/*
const car = {
    A: "a",
    B: "b",
    C: "c",
     start: function() {
         alert("wroom")
     },
};
//console.log(car.C);
//car.start()

const person = {
    Fname : "ss",
    Lname : "yy",
    age : 27,

    greeting= function (){
console.log("hi I'm " + this.name + " " + this.age +" " + this.job);
    }
}
// console.log(person.F
//person.showcontext();

const cars = ["a", "b","c"];
console.log(cars);

const persons = [
    {
        name: "Sultan",
        age: 27,
        job: "programmar",
      greeting: function()
      {
          console.log(this);
      },

      showcontent: function()
      {
          alert("Hi I'm "+this.name +" "+this.age)
      }

    },

    {
        name: "Maged",
        age: 47,
        job: "mobilia",
      greeting: function()
      {
          console.log(this);
      },

      showcontent: function()
      {
          alert("Hi I'm "+this.name +" "+this.age)
      }

    },

    {
        name: "Hassan",
        age: 57,
        job: "officar",
      greeting: function()
      {
          console.log(this);
      },

      showcontent: function()
      {
          alert("Hi I'm "+this.name +" "+this.age)
      }

    },

];
console.log(persons[0]);

/*to hsow a specfic functions I write the name of the array
 after that i write ehich index I want ti=o show aftter that
  I write the name of the methode I wante to show*/
//persons[0].showcontent(); 

// const cars = ["a","d","c"];
// console.log(cars);
// cars.push("d");
// console.log(cars);
// console.log(cars.length);
// //removes last value form array
// cars.pop();
// console.log(cars);
// cars.push("b");
// console.log(cars);
// cars.sort();
// console.log(cars);
// cars.reverse();
// console.log(cars);
// cars.splice(0,0,"q")
// console.log(cars);
// cars.splice(1,0,"w");
// console.log(cars);



// const number = [205 , 322, 588]

// console.log(number);
// x = Math.random();
// y = x.toFixed(1)
// z = y*10;
// number.push(z);
// console.log(number);
// console.log(Math.floor(Math.random()*10)+1);

// //add new properties to object
// dog= {
//     fname: "ss",
//     color:"white",
// };
// console.log(dog);

// Object.assign(dog, {
//     price: 200,
//     brand: "qwe"
// })

// console.log(dog);

// const date = new Date();

// console.log(date.getHours() + ":" + date.getMinutes());
// if (date.getHours() < 17) {
//   //  alert("day")
// }
// date.setHours(22)
// console.log(date.getHours());

// if (date.getHours() > 17) {
//     //  alert("night")
//   }
// fname = "fd";
// const email = "dd";
// suBForm = function () {
//     if (!(fname && email)) {
//         alert("missing info")
//     }
//     else{
//         alert("hi " +fname + "   your email is : " + email)
//     }
// }

// const message = "hi my name is Sultan SS";
// console.log(message);
// const myRgx = /s/ig;
// console.log(message.match(myRgx));
// console.log(message.replace("hi", "Hello"));

// const displaymessage = (username) => {
//     const mmesage = "hi my friend good to see you in my site "
//     usrgx = /my friend/;
//     if (!username) {
//         console.log(mmesage);
//     }else{
//         console.log(mmesage.replace(usrgx,username));
//     }
// }
// displaymessage("Sultan")


// const onlyNumber = (number) => {
//     try {
//         if (typeof number !== "number") {
//             throw "insert a number asshole"
//         } else {
//             console.log("good job");
//         }
//     } catch (error) {
//         alert(error)
//     }
// }
// onlyNumber(3)


// /*const chkEmail = (email) => {
//     const myRegEx = /\s+@\s+\./;
//     try {
//         if (!myRegEx.test(email)) {
//             alert("this is a valid Email")
//         } else {
//             throw "not a valid EMail"
//         }
//     } catch (error) {
//         alert(error)
//     }
// }
// chkEmail("sd.sd@.asd")

// //-----

// const iSAnEmail = (email) => {
//     const my_rgx = /\s+@\s+\./;
//     try {
//         if (my_rgx.test(email)) {
//             alert("valid Email")
//         } else {
//             throw "not valid Email"
//         }
//     } catch (error) {
//         alert(error)
//     }
// }
// iSAnEmail("sultan@ad.com")
// */


// const fruit = ["apple" , "banana" , "orange" , " kiwi" , "pear"];

// const exoticFruits = [];
// const domesticFruits = [];

// for (let i = 0; i < fruit.length; i++) {
//     if (fruit[i] === "apple" || fruit[i]==="pear" ) {
//         domesticFruits.push(fruit[i]);
//     } else {
//         exoticFruits.push(fruit[i])
//     }
// }
// console.log(exoticFruits);
// console.log(domesticFruits);



/*const w = ["m", "n", "z", "p"];
const x = [];
const y = [];

for (let i = 0; i < w.length; i++) {
    if (w[i] === "m" || w[i] === "n") {
        x.push(w[i])
    } else {
        y.push(w[i])
    }
}
console.log(x);
console.log(y);


const person = {
    fname: "Sultan",
    lname: "Yasin",
    age: 27
}
let personInfo = " ";
for(key in person){
    personInfo +=person[key] + " ";
}
console.log(personInfo);
//alert(personInfo)*/

/*const person = {
    fname: "Mouna",
    Lname: "Husen",
    age: 27,
    status: "married",

}
let newPerson = " ";
for (let key in person) {
    newPerson += person[key] + " ";
}
console.log(newPerson);

let newperson2 = "";
for (ky in person) {
    switch (ky) {
        case "fname":
            newperson2 += "First name: " + person[ky] + "<br>"
            break;
        case "Lname":
            newperson2 += "Lasst name: " + person[ky] + "<br>"
            break;
        case "age":
            newperson2 += "age : " + person[ky] + "<br>"
            break;
        case "status":
            newperson2 += "status: " + person[ky] + "<br>"
            break;

        default:
           console.log("no much");
    }
}
document.querySelector("#txt-bx").innerHTML= newperson2




const person = {
    Fname: "Sultan",
    Lname: "Yasin",
    Age:27,
    Status:"Married"
}
 let perInfo = "";
 for(let key in person){

    switch (key) {
        case "Fname":
            perInfo+=`First name ${person[key]}\n`
            break;
        case "Lname":
            perInfo+=`Last name ${person[key]} \n`
            break;
        case "Age":
            perInfo+=`Age is  ${person[key]}\n`
            break;
        case "Status":
            perInfo+=`Status ${person[key]}\n`
            break;
    
        default:
            break;
    }
 }
 console.log(perInfo);



const text = "hi,sultan,yasin,syria,sweden"

let nxt = "";
for(ty of text){
    switch (ty) {
        case ",":
            nxt +=", \n"
            break;
    
        default: nxt+=ty
            
    }
}
console.log(nxt);
*/


/*let newTxt = "";
for(let val of text){
switch (val) {
    case ",":
        newTxt +=", <br>"
        break;

    default:
        newTxt+=val
        
}
}
//console.log(newTxt);
document.querySelector("#txt-bx").innerHTML=newTxt*/


/* myreg = /,/g;
console.log(text.replace(myreg , "\n"));
 */
/* let newTxt = "";
for(let val of text){
    switch (val) {
        case ",":
            newTxt += ", \n"
            break;
    
        default:
            newTxt+=val;
    }
} 
console.log(newTxt);*/

/*const IsAnEmail = (email) =>{
    myRgx =/\s+ @\s+\./ 
    if (email) {
      alert("valid Email") 
    } else {
        alert("not valid Email")
    }
    
}
IsAnEmail("addasdasdad")*/


 /*const iSAnEmail = (email) => {
    const my_rgx = /\s+@\s+\./;
    try {
        if (my_rgx.test(email)) {
       alert("valid Email")
        } else {
       throw "not valid Email"
        }
    } catch (error) {
        alert(error)
    }
     }
     iSAnEmail("sultan@ad.com")

     const chkmil = (email) => {
         rgx=/\s+@ \s+\./;
         try {
             if (rgx.test(email)) {
                 alert("valid")
             } else {
                 throw"not valid"
             }
             
         } catch (error) {
             alert(error)
         }
     }

chkmil("asd.@asd")
*/






/* for(let ky in person){
    switch (ky)    case "fname":
           newperson2 += "First name : " + person[ky] + "<br>" 
            break;
            case "Lname":
           newperson2 += "Last name : " + person[ky] + "<br>" 
            break;
            case "age":
            newperson2 += "age : " + person[ky] + "<br>" 
            break;
            case "socialsitiation":
            newperson2 += "status : " + person[ky] + "<br>" 
             break;
        default:
            console.log("no match found");
            
    }
}
document.querySelector("#txt-bx").innerHTML= newperson2;*/

















// let text = "Elzero Web School";
// if (text.includes("W") === true) {
//     console.log("good");
// }








/* --------------------- TRENARY OPERATOR (Small if)
let fname = "sultan ";
let gander = "Male";
let age = 77;

//if gander = male, print mr else print mrs
gander === "Male" ? console.log("Mr") : console.log("Mrs");


console.log(`Hello  ${gander ==="Male" ? "Mr" : "Mrs"} ${fname}`);

let result = gander ==="Male" ? "Mr" : "Mrs";
 document.write(result)
//I use this way to save the result of gander inside result

age < 18 ? console.log("U can't drive a car") 
: age >= 18 && age < 70 ? console.log("U still able to drive") 
: age > 70 && age < 72 ? console.log("U can't drive car anymore")
: console.log("U most die");

If age less than 18  > U can't drive car 
2- age more than  or equal to 18 and  less than 70 
> U still able to derive a car
3- if age between 70 & 72 > u can't drive car anymore
4- else (more than 72) U most die*/







/*
let price = 100;
let discount = false;
let discountAmount = 20;
let country = "Syria";
let student = false;
let parent = true;

// if (discount === true) {    
//    price -= discountAmount;
//     //pric = price -discountAmount (-=) 
// }else if (country ==="Syria") {
//     //if the person is from Syria and has no parent he will get external discount
//     //else he will just get the normal discount.
//     if (parent === true) {
//         price -= discountAmount;
//     }
//     else{
//         price -= discountAmount +10; 
//     }
//     price -= discountAmount +10;
//     //an order to check if the country is Syria so the discount is met
// }else if (country ==="Egypt") {

//     if (student ===true) {
//       price -= discountAmount +10 ;
//     }else{
//         price -= discountAmount;
//     }


   
//   // an order to check if the country is Egypt so the price will be 10kr lower
// }else{
//     price -= 10; // the default value if none of conditions accures 
// }

console.log(price);










let theName = "Sultan Yasin ";
console.log(theName);

console.log(theName[1])
 used to show the specfic place of the index 0.1.2.3 so here 1 = u *returns indefiend*

 console.log(theName.charAt(6));
 it is also used to show a specific place of the index but
  *returns empty for undefined index*

console.log(theName.length);
 to count the length of the index.

console.log(theName.trim());
 is used to cut out the empty spaces around the index

console.log(theName.indexOf("s"));

this function allowes me to look after a the place of(string inside String)
 returns the number of the word I looking for or returns -1 if there is no matching.

console.log(theName.indexOf("s", 10));
works similar to indexof() but here i give place to start from instade of starting from 0

console.log(theName.lastIndexOf("n"));
works similar to indexof() but this start searching from right to left

console.log(theName.slice(3, 10));
 it used to cut from the string, can also give it negative value - to begane from the end

console.log(theName.repeat(2));
 it used to repeat the the element I want


const text = "Hej there , Jag heter Sultan , and I'm comming from Syria";
console.log(text.split(","))
I can transferom a text to an array by using *split()*. Inside the parantes
I write where to i want to make a new line in my array EX if i want to
make a new line efter , so I just write it inside the parantace,, pay attention to
the letter or the mark inside the () will be deleted. I can decide how many times I want to splite just by give it number


let a = "Mo Su Ya";
 console.log(a.substring(2,4));
 // used to cut things from the string and can revese the number if iy wasnt write
 
 console.log(a.includes("Su",6));
 // used to chck if my string includes the word i'm looking after or not

console.log(a.startsWith("M",5));
//to check if the word beganing with the letter I wrote. or if the letter exists there

console.log(a.endsWith("o",2));
//chekes if the string ending with the letter I wrote in (.length) otherwose it cheks the last letter in the string
*/

























//----------IMPOTAAAAAAANNNTT------**TIMING**-----

//run code after certain time has gone by specified milliseconds.

/*setTimeout(() => {
    alert("pussy")
}, 3000);*/






/*

// To run a code over and over with a time interval
const myinterval = setInterval(() => {
    console.log("Hi")
}, 2000);

const stopInterVal = () => {
    clearInterval(myinterval);
};
  */
































/*
//--------------SCOPE
//1- Global scope I can write it and call it any were EX
const globalVariable = "I'm a global variable"
console.log(globalVariable)
document.write (globalVariable)

const localVariable = () => {
    document.write ("I'm a local variable")
    document.write (globalVariable)
}

localVariable()


for (let index = 0; index < 4; index++) {
    const localElement = "I'm a local block variable";
    console.log(localElement);
    
}
*/






/*Regular Expression

const message="Hello I like to say hello";

const myrgx = /Hello/ig;
console.log(message.search("Hello"));//search find just one value / match find many 

 to replace a specfic word or meaning* to maket global i have to write (g) after myrgx
console.log(message.replace(myrgx, "hi"))


regular expressions used to change the greeting from global to the name of the user

const displayMessage = (userName) => {
const greatig = "Hello to my site my dear friend";
const rglrex= /friend/;
if (!userName) {
    console.log(greatig)
} else{
    console.log(greatig.replace(rglrex,userName));
};}
displayMessage("")



// ----------------Email test / or test anything if it include a specific sign
const Emailtest = (email) => {
    const regex = /@/
    if (regex.test(email)) { alert("Valid") } else{alert ("not valid")}
  }      
   Emailtest("as@")

   //-------------fel Hantering

 const checkSomething = (something) => {
     try {
         console.log(something)
     } catch (error) {
         alert("error : something went wrong")
     }
 };
checkSomething(11)

If I write consol.log in try block instade if console.log, catch funktion will
show me show the wrong metode that I mmade. " so the code I want to test puts just in
try {agsdfsdf}" and i decide how the mistake will be shown by catch 
Ex catch (error){ alert ("something went wrong")*/

/*tconst onlyNumber = (number) => {
    try {
        if (typeof number !== "number") {
            throw "this is not a number"   
        }else{
            console.log("this is a good number")
        }
        
    } catch (error) {
        alert(error)
    }
}
onlyNumber("s")
hrow functon just throwing the sentence i wrote to catch to show it in the way I
want, console.log or alert or.. */





//regex test methode
// const aRegExp = /Hello/i




/*
--------------------switch

let fname = "Sultan"
 if (fname =="") {
     alert("give a name your mother fucker")
     
 }else if (fname !=="Sultan") {
     alert("Who are you mother fucker")
     
 }
 else alert("welocme hony")*/

/*const chkage = (age) => {
    if (age > 17) {
        alert("U can drive the car")
    } else alert("U can't drive")
};

const findFruit = (fruit) => {
    const formattedFruit = fruit.toLowerCase();
    switch (formattedFruit) {
        case "apple":
            alert("yes we have appels");
            break;
        case "orange":
            alert("yes we have orange");
            break;
        case "pears":
            alert("yes we have pears");
            break;
        default:
            alert("it is not your dream house your mother fucker")
    }
}

window.addEventListener("load", () => {
    document.getElementById("age").
    addEventListener("click", () => chkage(15));

    document.getElementById("fruit").
    addEventListener("click", () => findFruit("PeArs"))

})

const chkAge = (age) => {if (age < 18) { alert ("no"); } else alert("yes");}

const findfruit = (fruit) => { const formattedFruit = fruit.toLowerCase();
    switch(fruit) {
        case "orange": alert("yes"); break;
        case "kiwi": alert("yes"); break;
        default: alert("fuck off");
    }
}
    

        
   

window.addEventListener("load", () =>{
 document.getElementById("age").addEventListener("click",() => chkAge(19))
 
 document.getElementById("fruit").addEventListener("click", () => findfruit("ss"))


});*/











/*//--------------------String methode and properties
const firstName = "Sultan";
console.log(firstName.length);// it can be useful to set a limit 
//to write somthing like a feedback.

console.log(firstName.toUpperCase());//make all letters to uppercase.
console.log(firstName.toLowerCase());



//--Transform string into Array---------//
const text = "Hej there , Jag heter Sultan , and I'm comming from Syria";
console.log(text.split(","))
//I can transferom a text to an array by using *split()*. Inside the parantes
// I write where to i want to make a new line in my array EX if i want to
//make a new line efter , so I just write it inside the parantace,, pay attention to
//the letter or the mark inside the () will be deleted

console.log(text.replace("Hej","Tjena"));
//Replace is used to replace something with somthing else.*/







//--------------------------date

//getdate()/gatHour() getMounth() getMinutes getTime getDay.
// all this methodes used to specify the time but setMounth(),setHour()
//is used to re-enter the exsistig values to new values  i want








//-----------------Objects and arrays


/*const person = [

    {
        name: "Sultan",
        age: 27,
        country: "sweden"
    },

    {
        name: "Carl",
        age: 29,
        country: "sweden"
    },

    {
        name: "Abd",
        age: 23,
        country: "Syria"
    }



]
console.log(person)
const person ={
    name:"Sultan",
    country:"Syria",
    age:27,
    jobb: function(){
        alert("I'm a programmar")
    }

};
console.log(person)
//person.jobb();


const person = {
    name:"Sultan",
    age:27,

    greeting: function () {
        alert("Hi, my name is " + this.name + " I'm " + this.age + " years old")
    }

}
person.greeting();


 // ---------------------ARRAY
 const car = ["volvo", "bmw", "nissan"]
console.log(car);

const person = [

    {
        name: "Sultan",
        age: 27,
        country: "sweden",
        greeting: function () {
            alert("Hi, my name is " + this.name + " I'm " + this.age + " years old")
        }
    
    },

    {
        name: "Carl",
        age: 29,
        country: "sweden",
        greeting: function () {
            alert("Hi, my name is " + this.name + " I'm " + this.age + " years old")
        }
    
    },

    {
        name: "Abd",
        age: 23,
        country: "Syria",
        greeting: function () {
            alert("Hi, my name is " + this.name + " I'm " + this.age + " years old")
        }
    
    }



];
console.log(person); //to show all content of the array.
console.log(person[1]); // to show all infiormation about one of the index.
console.log(person[2].name); // to show a specfic value of an index.
person[1].greeting(); // to show a function of an index 


const.cars = ["bmw","audi","volvo"];
// to add a new value i use push methode EX cars.push("Mercedes") 
//by this way i can add a new value without doing anything in the array it self

cars.pop() 
  this propperty sued if i want to remove the last value of an array

cars.sort() 
it used for alphabetical order then=> console.log(cars)

cars.reverse ()
it used to reverse an array so it will be Z to A instade of A to Z

{  cars.splice(1,0,Ferrari) 

//firs number is to tell where I want to put the new value
//secound number is to tell how many values i want to delete after my new value
//theard, the name of the new value i will use
It used to put new value in a very specfic place of an array  }


//Object and  properties




const vila = {

space: 200,
price: 200000

}
console.log(vila);

// to add a propertey to an object I use this syntax.
Object.assign(vila, {
    rom: 4,
    place: "Turkey",
    features: "Beside the sea"
});
//first I write object.assign () inside the parantes I write the object I'm targeting
// followed by comma , then I giveit the new values that I want to add by {}.

*/














// const testEl = document.getElementById("test")

// const testel2 = document.getElementById("test2");

// const addtext = () => {
//     testEl.innerHTML ="Sultan yasin"
// }

//----------------------------------------------------------
// const changbg = () => {
//     testel2.style.backgroundColor = "blue"
// };

// const backbg = () => {
//     testel2.style.backgroundColor = "white"
// };

// window.addEventListener("load", () => {

//     testel2.addEventListener("onmouseover", changbg) 

//     testel2.addEventListener ("mouseout", backbg)
// }

// );
//---------------------------------------------------

// const cahngbg = () => {
//     testel2.style.backgroundColor = "white"
// }

// const backbg = () => {
//     testel2.style.backgroundColor = "chartreuse"
// }
// const addText = () => {
//     testel2.innerHTML = "It is nice effect"
// }

// testel2.addEventListener("mouseover", cahngbg)
// testel2.addEventListener("mouseout", backbg)
// testel2.addEventListener("mouseover", addText )
// testel2.addEventListener("mouseout", hideText)


// ---------------------------------------------


/* let names = (...x)=> {return`String [${x.join("],[")}] => G-8 !`};
console.log(names("Sultan","Yasin","Mikael")) */

/* let names = function(...x){
  return `[${x.join("],[")}] => !Done`
}
console.log(names("SS",";;", "ssdf"));
 */
//I can get the same output by remobing return satement from the arrow function
/* let names = (...x)=> `String [${x.join("],[")}] => Done !`
console.log(names("Sultan","Yasin","Mikael")) */



/*let num = [1,5,8,9]
 
Diffrent wayes to solv same problem
let newNum = [];
for (let i = 0; i < num.length; i++) newNum.push(num[i]*2)
console.log(newNum);
   */
/*  let addSelf = num.map(function(el){
   return el *2
 }) 
 console.log(addSelf);*/

/*console.log(x= num.map((el)=>el*2));*/

   //invert the letters from capital letters to small letters

/* let swa = "SuLtAn YaSiN"
let newSwa = swa.split("").map(function (ele) {
    return ele===ele.toLowerCase()?ele.toUpperCase():ele.toLowerCase();
}).join("")
console.log(newSwa);

//how to invert the numbers from + to -

let invertnumber = [-1,2,-3,4,-5]
let inv=invertnumber.map(function (el) {
    return -el;
})
console.log(inv);

let ignoreNumbers = "S1u9l9t4a0n5"
let ign = ignoreNumbers.split("").map( function (ele) {
    return isNaN (parseInt(ele)) ? ele : ""
} ).join("");
console.log(ign); */

let ignoreNumbers = "S1u9l9t4a0n5"
/* let ign = ignoreNumbers.split("").map( function (ele) {
   return isNaN(parseInt(ele)) ? ele : ""; 
} ).join("");
console.log(ign); */
//console.log(ignore = ignoreNumbers.split("").map((a)=>isNaN(parseInt(a)) ? a : "").join(""));
//It can be solved ethir by map or filter
let ign = ignoreNumbers.split("").filter( function (p) {
    return isNaN(parseInt(p))
 } ).join("")
 console.log(ign);
console.log(ignoreNumbers.split("").filter((x)=>isNaN(parseInt(x)) ).join("-"));



let invertnumber = [-1,2,-3,4,-5]
/* let inv = invertnumber.map( function (ele) {
   return -ele 
} )
console.log(inv) */

console.log(inv = invertnumber.map((x)=>-x));


let swa = "SuLtAn YaSiN"
/* let newSwa = swa.split("").map( function (ele) {
    return ele===ele.toUpperCase()? ele.toLowerCase() : ele.toUpperCase();
} ).join("") */
console.log(newSwa = swa.split("").map((a)=>a==a.toLowerCase()?a.toUpperCase():a.toLowerCase()).join(""));

let friends = ["ab","ac","bb","az", "ss"]
console.log( friends.filter((el)=> el.startsWith("a")).join(".."));

let numbers = [1,2,8,9,4,6,5,7]
console.log(numbers.filter((x)=> x%2==0));
console.log(numbers.filter((x)=> x%2==1));

let sentence = "I Love Foood Code Too Playing Much";
console.log(sentence.split(" ").filter((ele)=>ele.length<=4).join(" "));

let mix = "A13BS2ZX8 3 4  f d e 3 ";
// concatinate  map and filter 
console.log(mix.split("").filter((x)=> !isNaN(parseInt(x))).map((x)=>x*x) .join(" "));
