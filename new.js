// task 1
var a=[1,2,3,4,5,{id:1,age:25},[1,2,3]]
for(i=a.length-1;i>=0;i--){
    console.log(a[i]);
 }
//task2
 var a="vamsi"
for(i=a.length-1;i>=0;i--){
    console.log(a[i]);

}
// task3
var a=[1,2,3,4,5,{id:1,age:25},[1,2,3]]
for(i=0;i<=a.length-1;i++){

    if(typeof a[i]==="object" && !Array.isArray(a[i]) && a[i].age){
console.log(a[i].age);
    }

}


