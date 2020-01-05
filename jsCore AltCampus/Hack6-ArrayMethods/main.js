/**
 * 
 * @param {myMap} array 
 * @param {myMap} callback 
 */
function myMap1(array, callback){
  var arr = [];
  for(i=0; i < array.length; i++){
   console.log(array[i]);
 arr.push(callback(array[i])); 
 }
 return arr;
 }
 myMap1([1,2,3,4,5], n => n * 6)
 //[6, 12, 18, 24, 30]

 /**
  * filter()
  */
 function myFilter(array, callback){
 var arr = [] ;
 for(i=0; i < array.length; i++){
   if(callback(array[i])){
    arr.push(callback(array[i])); 
   } 
}
return arr;
}
myFilter([1,2,3,4,5], n => n % 6==0)


// mySort
function mySort(array){
  var n,length,j,temp ;
  length = array.length;
  for(i=0; i<length; i++){
    for(j=i+1; j<length; j++){
      if(array[j] <array[i])
      {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    }
  } return array;
}
mySort([12,34,54,87]);
//(4) [12, 34, 54, 87]
mySort([12,3,5,2, 0, -1]);
//(6) [-1, 0, 2, 3, 5, 12]
mySort(['a','ab' ,'de','ce','ac']);
//["a", "ab", "ac", "ce", "de"]
//forEach
function forEach(array, callback) {
	for( var i = 0; i < array.length; i++ ) {
		callback(array[i]);
	}
}
​
var arr1 = ['cat', 'dog', 'fish'];
​
function callback(str) {
	console.log(str)
 }
/*********************************** */
// union
function union(arra1, arra2) {
  if ((arra1 == null) || (arra2==null)){
    return void 0;
  }
  var obj = {};
 
  for (var i = arra1.length-1; i >= 0; -- i)
     obj[arra1[i]] = arra1[i];
  for (var i = arra2.length-1; i >= 0; -- i)
     obj[arra2[i]] = arra2[i];
  var result = [];
 
  for (var n in obj)
  {
    if (obj.hasOwnProperty(n)) 
      result.push(obj[n]);
  }
  return result;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));

//intersection




















