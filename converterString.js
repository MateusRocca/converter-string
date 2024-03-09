//SEQUENCIA FIBONACCI
function fibonacci(num) {
    let a = 0;
    let b = 1;
    let fib = b;
    
    while (fib < num) {
      fib = a + b;
      a = b;
      b = fib;
    }
    
    return fib === num;
    }

let numero = 21;
if(fibonacci(numero)){
    console.log(`${numero} pertence a sequência Fibonacci!`);
} else {
    console.log(`${numero} não pertence a sequência Fibonacci!`);
}


//CONVERTER STRING
function inverterString(string){
    let novaString = '';
    for(let i = string.length - 1; i >= 0; i--){
        novaString += string[i];
    }
    return novaString;
}

console.log(inverterString('Estágio Target Sistemas'));


