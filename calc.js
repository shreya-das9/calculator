const display=document.querySelector('.display');
display.value='';
function append(value){
    display.value +=value;
}
function clearDisplay(){
    display.value='';
}
function deletelast(value){
    display.value= display.value.slice(0, -1);
}
function calculate() {
    try {
        let expr = display.value;

        // Replace ^ with ** for exponentiation
        expr = expr.replace(/\^/g, '**');

        // Replace log(x) with Math.log10(x)
        expr = expr.replace(/log\(([^)]+)\)/g, 'Math.log10($1)');

        // Optional: prevent invalid characters
        expr = expr.replace(/[^-()\d/*+.%^Mathlog]/g, '');

        // Evaluate expression
        display.value = eval(expr);
    } catch (error) {
        display.value = 'Error';
    }
}
