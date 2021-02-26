function doSomething(){
    console.log((3333));
}
console.log(2222);
setTimeout(doSomething, 3000);
setTimeout(function(){
    console.log('see you later');
},4000);
setTimeout(() => {
    console.log('lazy people');
},6000);
console.log(4444);
console.log(5555);
setInterval(() => {
    console.log('doing it');
}, 100);
console.log(6666);