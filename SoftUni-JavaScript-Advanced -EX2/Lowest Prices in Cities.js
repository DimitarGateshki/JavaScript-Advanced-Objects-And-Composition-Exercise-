function solve(arr) {
    let res={};
    
      for (let e of arr) {
      let [t,pro,pri]=e.split(' | ');
      pri=Number(pri);
      if(!res.hasOwnProperty(pro)){
      res[pro]={town:t,price:pri};
      }else{
        if(res[pro].price>pri){
          res[pro].town=t;
          res[pro].price=pri;
        }
      }
      
    }
  
    for (let e in res) {
      console.log(`${e} -> ${res[e].price} (${res[e].town})`);
    }
  }