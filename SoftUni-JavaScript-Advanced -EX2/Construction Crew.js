function solve(input) {
   
    if(input[input.dizziness]){
      let water=input.experience * input.weight / 10;
      input.levelOfHydrated+=water;
      input.dizziness=false;
    }
 
    return input;
 
   
    
 
 }