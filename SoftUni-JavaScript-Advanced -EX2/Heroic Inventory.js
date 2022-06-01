function solve(arr) {
    let res=[];
  
    for (let e of arr) {
      let [tname,tlevel,titems]=e.split(' / ');
      tlevel=Number(tlevel);
      titems=titems ? titems.split(', ') : [];
      let hero={
        name:tname,
        level:tlevel,
        items:titems
      };
  
      res.push(hero);
    }
  
    console.log(JSON.stringify(res));
   
    
  }