
function char_count(str,char){
  count = 0;
  for(var i=0;i<str.length;i++){
    if(str.charAt(i)==char){
      count++;
    }
  }
  
  return count;
}


function countChars(arrayOfStrings, char) {

  occurences = [];
for(var i=0;i<arrayOfStrings.length;i++){  
var obj = { elementIndex: i,   
            counter: char_count(arrayOfStrings[i],char),   
           };
           occurences.push(obj);
}


}