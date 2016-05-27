function oracle(arr) {
   var prediction = ["", "", "", "", "", ""];

 	for (var i = 0; i < arr.length; i++) {
     var heads = 0;
     var tails = 0;

     for (var j = 0; j < arr[i].length; j++) {
       if (arr[i][j] == "h") {
         heads++;
       }

       if (arr[i][j] == "t") {
         tails++;
       }
     }

     var indexWord = arr[i][0];
     var indexNumber;

     switch (indexWord) {
       case "one":
         indexNumber = 5;
         break;
       case "two":
         indexNumber = 4;
         break;
       case "three":
         indexNumber = 3;
         break;
       case "four":
         indexNumber = 2;
         break;
       case "five":
         indexNumber = 1;
         break;
       case "six":
         indexNumber = 0;
         break;
     }

     var line;

     if (tails == 3) {
       line = "----x----";
     }

     if (tails == 2 && heads == 1) {
       line = "---------";
     }

     if (tails == 1 && heads == 2) {
       line = "---- ----";
     }

     if (heads === 3) {
       line = "----o----";
     }

     prediction[indexNumber] = line;
 	}

 	return prediction.join("\n");
 }
