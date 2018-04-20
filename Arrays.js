//Nessery functions for array and memory managment:
//push :      myArray[myArray.length] = XX ;
//pop  :      var last=myArray[myArray.length--] ;
//unshift :
var unshiftArray = function (arr, item) {
	 var len = arr.length;
	 while (len) { arr[len] = arr[len-1]; len--}
	 arr[0] = item; 
};
         // this unshift is around 4 to 10 times faster 
         // than the original
         // (http://jsperf.com/array-unshift-vs-prepend/8)
//Splice :
// if you plan on just removing one item, this one 
//    will be way faster :
var spliceOne = function(arr, index) {
	var len=arr.length;
	if (!len) { return }
	while (index<len) { 
	   arr[index] = arr[index+1]; index++ }
	arr.length--;
};
var spliceMany = function(arr,indexs) {
	var len = arr.length;
	var ilen = indexs.length;
	if (!len) {return}
	i = indexs[0];
	//Limit the search
	indexs[ilen] = len + 1;
	j = 0;
	inx = 0;
	while (indexs[j] < len) {
		arr[i] = arr[i + 1 + j];
		i++;	
		if (i + j == indexs[inx+1]) {
			i--;
			j++;
			inx++;
		}	
	}
	arr.length -= j;
	//TODO: Arrange Asc the indexs
	
}
indexOf :
var indexOf = function(arr, item) {
                  for (var i=0, len=arr.length; i!=len ; i++) {
                       if (arr[i] === item) { return i }
                   }
                   return -1;
              };
lastIndexOf :
var lastIndexOf = function(arr, item) {
                     var i=arr.length;
                     while (i--) { 
                           if (arr[i] === item) { break } }
                           return i;
                   }; // ... or the paragraph 3 version...