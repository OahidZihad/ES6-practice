var name = 'Kuddus';
function add(num1, num2){
    var result = num1 + num2;
    console.log('Name inside: ', name);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}
console.log('Name outside: ', name);
var sum = add(13,21);
console.log(sum);