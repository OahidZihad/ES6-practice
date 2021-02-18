function add(num1, num2){
    console.log([...arguments]);
    let output = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        output = output + element;
    }
    return output;
}
const result = add(2,3,5);
console.log(result);