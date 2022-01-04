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
*/



