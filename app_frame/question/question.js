var answer[] = [[],[],[],[]];
answer[0] = ["安平古堡","祀典武廟","英商德記洋行","赤崁樓"];
answer[1] = [ "二鯤鯓砲台","四草砲台","巽方砲台","安平小砲台"];
answer[2] = ["四草砲台","孔廟文化園區","赤崁文化園區","五條港文化園區"];
answer[3] = ["陳永華","朱一貴","鄭芝龍","鄭成功"];
answer[4] = ["孔廟文化園區","赤崁文化園區","五條港文化園區","民生綠園文化園區"];
answer[5] = ["大鵬灣文化園區","五條港文化園區","台江生態文化園區","安平港國家歷史風景區"];
answer[6] = ["倒風內海","台江","四草湖","鯤鯓湖"];
answer[7] = ["二仁溪","四重溪","曾文溪","陳友蘭溪"];
answer[8] = ["孔廟","開元寺","大天后宮","四草砲台"];
answer[9] = ["乃木希典","兒玉源太郎","後藤新平","佐久間佐馬太"]
answer[10] = ["陳永華","鄭經","劉銘傳","劉永福"];
answer[11] = ["孔子廟","五妃廟","竹溪寺","開元寺"];
answer[12] = ["馬偕","巴克禮","馬雅各","甘為霖"];
var question[13] = ["在荷據時期，荷蘭人築城防禦，用來做為商業及行政中心，當時稱為「普羅民遮城」，漢人稱之為「紅毛樓」或「番仔樓」的是下列哪一個古蹟?",
                    "位在昔熱蘭遮城，不僅配有英國的阿姆斯壯巨砲，而且也是全台第一座西式砲台的是下列哪一個古蹟?",
                    "臺南市鎮海國小位於下列哪一個古蹟區內?",
                    "位於開山路聞名全國的延平郡王祠是為紀念哪一位人物而建立的?",
                    "下列哪一個文化園區是早期臺南舊城發展的中心，區內古蹟眾多，是台灣少數擁有荷據、明鄭建築的文化園區。而且在這區塊內擁有三個國家一級古蹟?",
                    "下列哪一個文化園區，同時擁有大片的魚塭、鹽田、紅樹林、鳥類等生態資源，是臺南最具自然之美的遼闊土地?",
                    "古時候，臺南市在今天的西門路以西到安平、鹿耳門一帶是一片內海，稱為?",
                    "臺南市位在嘉南平原上，南邊與高雄市的茄定區、湖內區相望，中間相隔的是下列哪一條溪流?",
                    "哪一個古蹟與鄭氏時期無關?",
                    "民生綠園(現稱湯德章紀念公園)，老一輩的人稱呼為「石像圓環」，是因為圓環內立了哪一座銅像?",
                    "臺南孔子廟是由誰所倡議建造?",
                    "府城「廟墓合一」的古蹟是?",
                    "哪一位傳教士在臺南看西街設立醫館，開始醫療傳教的服務?"
                    ];
var check_answer[] = [[], [], [],[]];
check_answer[0] = [ 0 , 0 , 0 , 1 ];
check_answer[1] = [ 1 , 0 , 0 , 0 ];
check_answer[2] = [ 1 , 0 , 0 , 0 ];
check_answer[3] = [ 0 , 0 , 0 , 1 ];
check_answer[4] = [ 0 , 1 , 0 , 0 ];
check_answer[5] = [ 0 , 0 , 1 , 0 ];
check_answer[6] = [ 0 , 1 , 0 , 0 ];
check_answer[7] = [ 1 , 0 , 0 , 0 ];
check_answer[8] = [ 0 , 0 , 0 , 1 ];
check_answer[9] = [ 0 , 1 , 0 , 0 ];
check_answer[10] = [ 1 , 0 , 0 , 0 ];
check_answer[11] = [ 0 , 1 , 0 , 0 ];
check_answer[12] = [ 0 , 0 , 1 , 0 ];
/*function getRandomArray(1, 13, 13) {  
    var rdmArray = [13];   
        for( var i=0 ; i < 13; i++) 
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
      rdmArray = Math.floor( Math.random()*13+1);
    return rdmArray;
}*/
function setQuestion_and_Answer(){
  var q[] = document.getElementById("question");
  random[] = random4Q();
  q[0] = question[random[0]];
  q[1] = question[random[1]];
  q[2] = question[random[2]];
  q[3] = question[random[3]];
  var check_onclicked = false ;
    for(var i = 0 ; i < 4 ; ++i)
  {
      q[i] = question[random[i]];
      q[i].answer1 = answer[ random[i] ][0];
      q[i].answer2 = answer[ random[i] ][1];
      q[i].answer3 = answer[ random[i] ][2];
      q[i].answer4 = answer[ random[i] ][3];
  }   
    for(var i = 0 ; i < 4 ; ++i)
  {
      while(q[i].answer1.onclick())
    {
        if(answer1[random[i]][0])//change color to red
      {
      
      }
        else 
      {
        //change color to green
      }
    }
      while(q[i].answer2.onclick())
    {
        if(answer2[random[i]][0])//change color to red
      {
      
      }
        else 
      {
        //change color to green
      }
    }
      while(q[i].answer3.onclick())
    {
        if(answer3[random[i]][0])//change color to red
      {
      
      }
        else 
      {
        //change color to green
      }
    }
      while(q[i].answer4.onclick())
    {
        if(answer4[random[i]][0])//change color to red
      {
      
      }
        else 
      {
        //change color to green
      }
    }
  }  
}


function random4Q()
{
  var choose = {};
  while(Object.keys(choose).length != 4)
  {
    let ran = Math.floor(Math.random()*13+1);
    choose[ran] = 1;
  }
  let res = [];
  for(i in choose)
    res.push(i);
  return res;
}






}
