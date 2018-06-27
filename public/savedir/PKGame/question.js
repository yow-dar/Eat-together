var option = new Array(0);
option.push( ["安平古堡","祀典武廟","英商德記洋行","赤崁樓"] );
option.push( [ "二鯤鯓砲台","四草砲台","巽方砲台","安平小砲台"] );
option.push( ["四草砲台","孔廟文化園區","赤崁文化園區","五條港文化園區"] );
option.push( ["陳永華","朱一貴","鄭芝龍","鄭成功"] );
option.push( ["孔廟文化園區","赤崁文化園區","五條港文化園區","民生綠園文化園區"] );
option.push( ["大鵬灣文化園區","五條港文化園區","台江生態文化園區","安平港國家歷史風景區"] );
option.push( ["倒風內海","台江","四草湖","鯤鯓湖"] );
option.push( ["二仁溪","四重溪","曾文溪","陳友蘭溪"] );
option.push( ["孔廟","開元寺","大天后宮","四草砲台"] );
option.push( ["乃木希典","兒玉源太郎","後藤新平","佐久間佐馬太"] );
option.push( ["陳永華","鄭經","劉銘傳","劉永福"] );
option.push( ["孔子廟","五妃廟","竹溪寺","開元寺"] );
option.push( ["馬偕","巴克禮","馬雅各","甘為霖"] );

var question = new Array(0);
question.push( "在荷據時期，荷蘭人築城防禦，用來做為商業及行政中心，當時稱為「普羅民遮城」，漢人稱之為「紅毛樓」或「番仔樓」的是下列哪一個古蹟?" );
question.push( "位在昔熱蘭遮城，不僅配有英國的阿姆斯壯巨砲，而且也是全台第一座西式砲台的是下列哪一個古蹟?" );
question.push( "臺南市鎮海國小位於下列哪一個古蹟區內?" );
question.push( "位於開山路聞名全國的延平郡王祠是為紀念哪一位人物而建立的?" );
question.push( "下列哪一個文化園區是早期臺南舊城發展的中心，區內古蹟眾多，是台灣少數擁有荷據、明鄭建築的文化園區。而且在這區塊內擁有三個國家一級古蹟?" );
question.push( "下列哪一個文化園區，同時擁有大片的魚塭、鹽田、紅樹林、鳥類等生態資源，是臺南最具自然之美的遼闊土地?" );
question.push( "古時候，臺南市在今天的西門路以西到安平、鹿耳門一帶是一片內海，稱為?" );
question.push( "臺南市位在嘉南平原上，南邊與高雄市的茄定區、湖內區相望，中間相隔的是下列哪一條溪流?" );
question.push( "哪一個古蹟與鄭氏時期無關?" );
question.push( "民生綠園(現稱湯德章紀念公園)，老一輩的人稱呼為「石像圓環」，是因為圓環內立了哪一座銅像?" );
question.push( "臺南孔子廟是由誰所倡議建造?" );
question.push( "府城「廟墓合一」的古蹟是?" );
question.push( "哪一位傳教士在臺南看西街設立醫館，開始醫療傳教的服務?" );

var answer = [
    4, 1, 1, 4, 2,
    3, 2, 1, 4, 2,
    1, 2, 3
];

function randomQ(num)
{
    var choose = {};
    while(Object.keys(choose).length != num)
    {
        let ran = Math.floor(Math.random()*13);
        choose[ran] = 1;
    }
    let res = [];
    for(i in choose)
        res.push(i);
    return res;
}