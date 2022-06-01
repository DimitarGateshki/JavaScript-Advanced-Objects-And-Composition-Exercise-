function rectangle(w, h, colour) {
    let c=colour[0].toUpperCase()+colour.substring(1);
  
    let obj={
      width:Number(w),
      height:Number(h),
      color:c,
  
       calcArea:function (){
         return this.width*this.height;
  
      }
  
    };
  
    return obj;

  }