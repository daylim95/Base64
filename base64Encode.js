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
    
    console.log(binaryStr)
    if(binaryStr.length()%6==2){

    }else if(binaryStr.length()%6==4){

    }else{

    }

})