function maskify(text){
    
var ar = text.split('');
var num = ar.length-4

for(var i=0;i<num;i++){
    if(ar[i]==" "){
        ar[i] = " ";
        /*try to find 
      missing part of code*/

}
var string = ar.join('');

return string
}
//Sample test case:
maskify("John Johnson");//Output '#### ###nson'
