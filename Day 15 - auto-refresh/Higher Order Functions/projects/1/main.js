// Challenge 1

// function addTwo(num) {
// 	return num + 2;
// }

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
// function addS(word) {
// 	return word + "s";
// }

// // uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
// function map(array, callback) {
// 	let newArr = [];
// 	for (let i = 0; i < array.length; i++) {
// 		let indexed = array[i]
// 		newArr.push(callback(indexed));
// 	} return newArr;
// }

// function addTwo(i) {
// 	return i + 2;
// }

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
// function forEach(array, callback) {
// 	for( i=0; i< array.length; i++ ) {
// 		callback(array[i]);
// 	}
// }

// function forEach(array, callback) {
// 	for(elm of array) {
// 		callback(elm);
// 	}
// }

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
// function mapWith(array, callback) {
// 	let newArr = [];
// 	array.forEach(element => {
// 		let newEle = callback(element);
// 		newArr.push(newEle);
// 	}); return newArr;
// }

// function addTwo(num) {
// 	return num + 2;
// }

// console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
// function reduce(array, callback, initialValue) {
// 	for(let elm of array) {
// 		var initialValue = callback(elm, initialValue);	
// 	} return initialValue;
// }

//Extension 3
function intersection(...arrays) {
	return arrays.reduce((acc, val) => {
	acc = acc.filter(v => val.includes(v));
    return acc;
	});
}

//console.logging the above function
// function intersection(...arrays) {
// 	return arrays.reduce((acc, val) => {
// 		acc = acc.filter(v => {
// 			if(val.includes(v)) {
// 				console.log(val, "<=this is val", v, "<=this is v");
// 			};
//     return acc;
// 		});
// 	});
// }


// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// // should log: [5, 15]

//Extension 4
function union(...arrays) {
	return arrays.reduce((acc, arr2) => acc.concat(arr2.filter(ele=> acc.indexOf(ele)===-1)));
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// val.forEach(element => {
// 	if (element !== acc[index]) {
// 		newArr.push(element);
// 	}
// });
// }); return acc;

//Extension 5
// function objOfMatches(arr1, arr2, cb) {
// 	return arr1.reduce((acc1, value1, index) => {
// 		if(cb(value1) === arr2[index]) {
// 			acc1[value1] = arr2[index];
// 		}
// 		return acc1;
// 	}, {});
// }

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6

var array1 = ['catfood', 'glue', 'beer'];

var array2 = [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]

function multiMap(array1, array2) {
	return array1.reduce((acc, v) => {
		acc[v] = array2.reduce((a, fn) => fn(a),v)
		return acc;
	},{})
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));


should log: { 
	catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], 
	glue: ['GLUE', 'Glue', 'glueglue'], 
	beer: ['BEER', 'Beer', 'beerbeer']
}

