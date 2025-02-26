//1
let str = "onibus legal";
let invertida = str.split ("").reverse().join("");
console.log(invertida);
console.log(str);

//2
let numeros = [15,5,30,6,25];
let maior = Math.max(...numeros);
console.log(maior);

//3
function ehPrimo(num){
  if (num < 2)return false;
  for (let i = 2; i < num; i++){
    if (num % i == 0) return false;
  }
  return true;
}
console.log (ehPrimo(7));

//4
function fibonacci(n){
    let seq = [0,1];
    while (seq[seq.length - 1] + seq[seq.length - 2]< n){
        seq.push(seq[seq.length -1] + seq[seq.length - 2]); 
    }
    console.log(seq);
}
fibonacci(7);

//5
function contarcaracteres(str){
    let contagem = {};
    for(let char of str){
        contagem[char] = (contagem[char]|| 0) + 1;
    }
    console.log (contagem);
}
contarcaracteres ("frango fristo bão");