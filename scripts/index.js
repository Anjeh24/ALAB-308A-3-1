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
    return db1;
   } else if 
     ((id > 4) && (id < 7)){
        return db2;
   } else if ((id > 7) && (id < 10)){
    return db3;
   } else {
    return (`${id} is not recognized in our database`);
   }


}

getUserData();

console.log(getUserData);

//appdiv.innerHTML = getUserData

//Got confused and didn't clearly understand if i just had to be a function to return students data. So, I just added 
//to the function