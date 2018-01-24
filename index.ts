// 类型
let str: string = 'str';
let num: number = 1;
let bool: boolean = true;

// 数组&元组
let arr : (number | string) [] = [1];
arr.push('2')

let tuple: [string, number] = [1] //error

let tuple2: [string, number] = ['1'] //error

let tuple3: [string, number] = [1, '1'] //error

let tuple4: [string, number] = ['1', 1] //success

let tuple5: [string, number] = ['1', 1, 1] //success

let tuple6: [string, number] = ['1', 1, true] //error
// 从以上代码得出，元组显式声明了什么类型和长度

// 那么你元组相应的也必须是这个类型和大于等于该长度