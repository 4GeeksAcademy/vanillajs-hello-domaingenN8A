import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let tld = ['.com','.net','.gov']
  
  console.log("Hello Rigo from the console!");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < tld.length; l++) {
          console.log(pronoun[i]+adj[j]+noun[k]+tld[l])
          
        }
       
        
      }
      
    }
  }
};
