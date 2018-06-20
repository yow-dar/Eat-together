var answer[48] = ["安平古堡","祀典武廟","英商德記洋行","赤崁樓",
                     "二鯤鯓砲台","四草砲台","巽方砲台","安平小砲台",
                     "四草砲台","孔廟文化園區","赤崁文化園區","五條港文化園區",
                     "陳永華","朱一貴","鄭芝龍","鄭成功",
                     "孔廟文化園區","赤崁文化園區","五條港文化園區","民生綠園文化園區",
                     "大鵬灣文化園區","五條港文化園區","台江生態文化園區","安平港國家歷史風景區",
                     "倒風內海","台江","四草湖","鯤鯓胡",
                     "二仁溪","四重溪","曾文溪","陳友蘭溪",
                     "孔廟","開元寺","大天后宮","四草砲台",
                     "乃木希典","兒玉源太郎","後藤新平","佐久間佐馬太",
                     "陳永華","鄭經","劉銘傳","劉永福",
                     "孔子廟","五妃廟","竹溪寺","開元寺"];
var question[12];
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
