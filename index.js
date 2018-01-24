"use strict";
// 类型
var str = 'str';
var num = 1;
var bool = true;
// 数组&元组
var arr = [1];
arr.push('2');
var tuple = [1]; //error
var tuple2 = ['1']; //error
var tuple3 = [1, '1']; //error
var tuple4 = ['1', 1]; //success
var tuple5 = ['1', 1, 1]; //success
var tuple6 = ['1', 1, true]; //error
// 从以上代码得出，元组显式声明了什么类型和长度
// 那么你元组相应的也必须是这个类型和大于等于该长度 
