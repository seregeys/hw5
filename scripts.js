/*
getname
*/

/*1. Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром.*/

function func1 (a, b, c) {
    return (a-b)/c
}
let x = func1 (1, 5, 10);
console.log (x);

/*
2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
передается параметром.
*/

function func (a) {
    return 'квадрат числа ' + Math.pow(a, 3) + ' куб числа ' + Math.pow(a, 2);
}
let z = func (5);
console.log (z);

/*
3. Напишите функции min и max, которые возвращают меньшее и большее из
чисел a и b.
*/

function typeMin (a, b) {
    if (a<b) {
        return a
    } else {return b} 
}
console.log (typeMin(9,4));

function typeMax (a, b) {
    if (a>b) {
        return a
    } else {return b} 
}
console.log (typeMax(9,4));

/*
4. Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.
*/
let arr = [];
let arr1 = function() {
    let arrStart = Number(prompt('Первое число'));
    let arrFinish = Number(prompt('Последнее число'));
    for (arrStart; arrStart <= arrFinish; arrStart++) {
            arr.push(arrStart);
    }
        return(arr);
    }
let arr2 = function() {
        return(document.write(arr));
    }
    console.log(arr1()); 
    arr2();
/*
5. Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.
*/

function isEven(a) {
    if (a/2 == 0) {
        return true
    } else {
        return false
    }
}

console.log (isEven (5));

/*
6. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.
*/
let arr3 = [1,2,3,4,5,6,7,8,9,10]
let task6 = function(arr6) {
   let arr3New = [];
   for(let i = 0; i <= arr3.length; i++) {
    if (arr3[i] % 2 == 0) {
        arr3New.push(arr3[i]);
    }
   }
   return arr3New;
}

console.log(task6(arr3));

/*
7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

function piramide (){
    for (var i = 1; i <= 9; i++) {
	for (var j = 1; j <= i; j++) {
		document.write(i);
	}
	document.write('<br>');
}
}
piramide ()

/*

*/