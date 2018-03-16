/**
 * Created by qile on 2017/8/14.
 */
//Part 1
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean({}));

if(new Boolean(false)){
    console.log("执行");
}           //true      //对象转化为布尔类型都是true

//Part 2
console.log(Number(undefined));
console.log(Number(null));
console.log(Number(true));
console.log(Number(false));
console.log(Number(""));
console.log(Number("abc"));
console.log(Number("123.345xx"));//
console.log(Number("32343,345xx"));
console.log(Number({x:1,y:2}));

console.log(parseFloat("123.345xx"));
console.log(parseFloat("32343,345xx"));
console.log(parseInt("123.345xx"));
console.log(parseInt("32343,345xx"));
//console.log(Number.parseInt("123.345xx"));//所有东西都封装到number下   建议这样写
//Part 3
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));
console.log(String(0));
console.log(String(234));
console.log(String({x:1,y:2}));


var temp ="23" -1;
typeof temp;    //"number"
 


var temp ="23" +1;
typeof temp;     //"string"
