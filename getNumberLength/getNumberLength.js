 function getNumberLength(n){

if( isNaN(n)){ console.log("wrong input"); return "wrong input"} 

else if (n.toString().length < 22) {console.log("wrong input"); return "wrong input"} 

else { 

	rawStr = n.toString();
	splitted = rawStr.split("");
	//console.log(splitted);
	mark = 0;
	base = "";

	multiplier = "";
	 
	//aquire index of exponential values
	for(i = 0; i< splitted.length; i++) { if(splitted[i] == "+"){mark = i }
	}

	//acquire number of zeroes
	for (i = mark; i<mark+(splitted.length-mark-1); i++){multiplier += splitted[i+1]};
	//console.log("multiplier = " + multiplier)
    
    result = parseInt(multiplier)+1;

	console.log("Number length is " + result);

    return result;
  
}
}
getNumberLength(123456789012345678901230)



