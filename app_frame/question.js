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
var question[12] = ["在荷據時期，荷蘭人築城防禦，用來做為商業及行政中心，當時稱為「普羅民遮城」，漢人稱之為「紅毛樓」或「番仔樓」的是下列哪一個古蹟?",
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
                    ];
var check_answer = [false,false,false,true,
                    true,false,false,false,
                    true,false,false,false,
                    false,false,false,true,
                    false,true,false,false,
                    false,false,true,false,
                    false,true,false,false,
                    true,false,false,false,
                    false,false,false,true,
                    false,true,false,false,
                    true,false,false,false,
                    false,true,false,false];
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
function CheckAnswer(question_number_random,answer1_bool,answer2_bool){
  var question_number = question_number_random;
  








}