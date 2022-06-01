function solve() {

    let factory={
       mage: function (n) {
      let obj={
        name:n,
        health:100,
        mana:100,
  
        cast: function (spell) {
          console.log(`${this.name} cast ${spell}`);
          this.mana-=1;
          
        }
  
      }
      return obj;
  
      
    },
  
  
    fighter:function(n) {
      let obj={
        name:n,
        health:100,
        stamina:100,
  
        fight: function () {
          console.log(`${this.name} slashes at the foe!`);
          this.stamina-=1;
          
        }
  
      }
      return obj;
      
    }
  };


  return factory;
  }
  