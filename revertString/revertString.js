function revertString(input) {
  var reversed = "";
  var array = input.split("").reverse();
  for(var i = 0; i < input.length; i++){
    if(input[i] === input[i].toUpperCase()){ 
      reversed += array[i].toUpperCase();
    }
    else { reversed += array[i].toLowerCase(); }
  }
  return reversed;
}