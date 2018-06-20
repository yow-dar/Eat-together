var answer[4][20];
var question[20];
function getRandomArray(1, 20, 20) {  
    var rdmArray = [n];   
        for(var i=0; i<n; i++) 
      {
        var random = 0;          
          do 
        {
          var exist = false;      
          rdm = getRandom(minNum, maxNum);  
          if(rdmArray.indexOf(rdm) != -1) exist = true;   
        } 
          while (exist);  
          rdmArray[i] = rdm;
      }
      rdmArray = Math.floor(rdmArray);
    return rdmArray;
}
