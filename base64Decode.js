$("#base64Decode").on("click", function(){

  var inputStr = $("#inputStr").val();
  var binaryStr = "";
  for(var j=0;j<asciiArr.length;j++){
      var bin =  inputStr.charCodeAt(i).toString(2)
      var zeros = 8-bin.length;
      for(var k=0;k<zeros;k++){
          bin = "0" + bin
      }
      binaryStr += bin
  }
  
  var binaryLength = binaryStr.length;
  if(binaryLength%24!=0){
      for(var l=0;l<(24-binaryLength%24);l++){
          binaryStr += "0"
      }
  }

  var binaryBlock = binaryStr.length/6;
  var encodedString = ""
  for(var m=0;m<binaryBlock;m++){
      encodedString += Base64Index(BinToDec(binaryStr.substr(m*6,6)))
  }

  console.log(encodedString)
})


// ascii 인덱스를 base64 인덱스로 변환
function AsciiIndex(integer){
  
  if(integer<26){
      // 'A~Z'
      integer += 65
  }else if(integer<52){
      // 'a~z'
      integer += 71
  }else if(integer<62){
      // '0~9'
      integer -= 4
  }else if(integer==43){
      // '+'
      integer = 62
  }else if(integer==47){
      // '/'
      integer = 63
  }

  return String.fromCharCode(integer)
}

function BinToDec(binary){
  var idx = 1
  var decimal = 0

  while(idx<=32){

      var val = binary%10
      decimal += val * idx
      
      binary = parseInt(binary/10)
      idx *= 2
  }
  return decimal
}