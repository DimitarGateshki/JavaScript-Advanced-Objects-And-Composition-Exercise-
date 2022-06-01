function solve(arr) {
    let first=arr[0].split(' | ');
    let t=first[0].substring(2);
    let lan=first[1];
    let lon=first[2].substring(0,first[2].length-2);
  
    let towns=[];
    
    for (let i = 1; i < arr.length; i++) {
         first=arr[i].split(' | ');
         let town={};
         town[t]=first[0].substring(2);
         town[lan]=Number(Number(first[1]).toFixed(2));    
         town[lon]=Number(Number(first[2].substring(0,first[2].length-2)).toFixed(2)); 
         towns.push(town);   
    }
  
  
  console.log(JSON.stringify(towns));
  }