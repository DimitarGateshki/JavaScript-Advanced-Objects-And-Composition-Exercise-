function solve(input) {
    let products={};
 
   for (let i = 0; i < input.length; i+=2) {
     let food=input[i];
     let calorie=Number(input[1+i]);
 
     products[food]=calorie
     
   }
 
   console.log(products);
    
 
 }