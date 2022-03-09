$("#base64Encode").on("click", function(){

    var inputStr = $("#inputStr").val();
    var asciiArr = new Array();
    for(var i=0;i<inputStr.length;i++){
        asciiArr.push(inputStr.charCodeAt(i));
    }

    var binaryStr = "";
    for(var j=0;j<asciiArr.length;j++){
        var bin =  asciiArr[j].toString(2);
        var zeros = 8-bin.length;
        for(var k=0;k<zeros;k++){
            bin = "0" + bin;
        }
        binaryStr += bin;
    }
    
    var binaryLength = binaryStr.length;
    if(binaryLength%24!=0){
        for(var l=0;l<(24-binaryLength%24);l++){
            binaryStr += "0";
        }
    }

    var binaryBlock = binaryStr.length/6;
    var binaryArr = new Array();
    for(var i=0;i<binaryBlock;i++){
        binaryArr.push(binaryStr.substr(i*6,6));
    }
    console.log(binaryArr)
    

})


// base64 인덱스를 ascii 로 변환
function Base64Index(integer){
    
    if(integer<26){
        // 'A~Z'
        integer += 65;
    }else if(integer<52){
        // 'a~z'
        integer += 71;
    }else if(integer<62){
        // '0~9'
        integer -= 4;
    }else if(integer==62){
        // '+'
        integer = 43;
    }else if(integer==63){
        // '/'
        integer = 47;
    }

    return String.fromCharCode(integer);
}

function BinToDec(binary){
    for(var i=0;i<binary.length;i++){
        var bin = binary%10;
    }
}