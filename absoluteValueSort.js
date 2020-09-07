function absSort(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	*/

	// your code goes here

  const compare = function(x, y){
    //a<b
    /// ???
    //4, 5, 6 =>
    //5, 4, 6 => 4, 5, 6
     let a2 =  Math.abs(x);//a, b
     let b2 = Math.abs(y);
    if (a2 < b2){
      return -1;
    } else if(a2 > b2){
      return 1;
    } else{
      if (x<y){ //x =-7
        return -1;
      }else return 1;
      
    }
    //return a < b ? -1 : 1;
  }
 
  return arr.sort(compare)
  
}