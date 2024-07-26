// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

let appdiv = document.getElementById('app')


 function getUserData(id) {
   const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
    if ((id > 1) && (id < 4)){
        setTimeout(function(){return db1}, 100); //if conditions are met, try to get users data within one onehundreth of a second etc
    
   } else if 
     ((id > 4) && (id < 7)){
        setTimeout(function(){return db2}, 200);
   } else if ((id > 7) && (id < 10)){
    setTimeout(function(){return db3}, 200);
   } else {
    return (`${id} is not recognized in our database`);
   }
  
}

async function displayData(){ //async function to execute once conditions are met. Well, I tried to figure out a strategy / solution thogh not perfect.
  let userData =   await getUserData(id); 
  console.log(userData);
}
displayData();


//getUserData();

//console.log(getUserData);

//appdiv.innerHTML = getUserData

//Got confused and didn't clearly understand if i just had to be a function to return students data. So, I just added 
//to the function