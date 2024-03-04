console.log("working");

//var let and const
//re declaration and re initialization
var a = 15;
var a = 25;
console.log(a);

//let
let b = 13;
//let b = 15; // not possible for re declatration
b = 15; // re initialization is possible
console.log(b);

//const
const c = 30;
//const c = 25; // not possible re declaration
//c = 35;  // re initialize is not poosible
console.log(c);


//block scope (let and const)
if (true) {
    var x =  "peter";
    console.log("inblock", x);

}
console.log("outblock", x);
//let,const -cannot access outsid block
//var can be accessed outside the block

if (true) {
    let xyz = 30;
    //console.log(zyx); //not inner to outer
    if (true) {
        let zyx = 15;
        console.log("inner block", xyz); //ouetr to inner possible
    }
}

function scopeFunc() {
    let func_var = 36;
    //console.log(func_var); // inner to outer(error)
    if (true) {
        //   let func_var = 36;
        console.log(func_var);  //outer to inner possible
    }
}
scopeFunc();
//shadowing property
if (true) {
    const shadow_var = "peter";
    if (true) {
        const shadow_var = "hari";
        console.log("har block", shadow_var);
    }
    console.log("pete block", shadow_var);
}


//spread and rest operator
//spread operator
const col_arr = ["mango", 5, "chocolate", "milk"];
console.log(col_arr);
console.log(...col_arr);


const batch1 = ["peter", "hari"];
const batch2 = ["prakash", "jani"];
const batch3 = ["sarath", "muthu"];
const allstudents = [...batch1, ...batch2, ...batch3];
console.log(allstudents);

//rest operator
function getalldata(data1, data2, ...all){
    console.log(data1);
    console.log(data2);
    console.log("remaining all", all);
}
getalldata("san", "sam", "pras", "raj", "sub");