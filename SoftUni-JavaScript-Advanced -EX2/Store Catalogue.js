function solve(arr) {
    let res={};
    let letters=[];
    
      for (let e of arr) {
      let [pro,pri]=e.split(' : ');
      let el={product:pro,price:pri};
      
      
      
      if(!letters.includes(pro[0])){
        letters.push(pro[0]);
        res[pro[0]]=[];
  
      }
      res[pro[0]].push(el);
  
      
    }
    letters=letters.sort((a,b)=>a.localeCompare(b));
  
    for (let e in res) {
      res[e]=res[e].sort((a,b)=>a.product.localeCompare(b.product));
    }
  
    for (let el of letters) {
      console.log(el);
      res[el].forEach(e=>console.log(` ${e.product}: ${e.price}`));
    }   
  }