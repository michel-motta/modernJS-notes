// FUNCTION VS ARROW FUNCTION

// funções com construtor viram basicamente uma classe
function myFunction() {
  // este
  this.name = 'Michel'
}

// o tipo da função se dá de acordo com o que ela retorna
// usando a palavra chave "new", damos um construtor para uma função e a transformamos em um objeto
console.log(new myFunction())

// toda classe, no fim, é convertida para um função com construtor
class MyClass {}

// arrow function não tem contrutores
// o this na arrow function se refere ao escopo anterior(o this do contexto em que ela foi criada)
const myArrowFunction = () => {
  this.name = 'Michel'
};

console.log(myArrowFunction());

console.log(this); // { name: 'Michel' }

// captura todos os parâmetros de uma função sem saber quantos serão
function numbers() {
  // arguments é uma variável nativa do JS
  console.log(arguments);
}

console.log(numbers(1, 2, 3, 4, 5, 6, 7, 'Michel'));


// const sum2 = () => {
//   // o arguments na arrow function tem o mesmo comportamento do this
//   console.log(arguments);
// }

//console.log(sum2(1, 2, 3, 4, 5, 6, 7, 'Michel'));


// short arrow function
const hello = () => console.log('Hello World');

hello();

// ternary condition
const someNumber = 10;

const compare = () => (
  someNumber >= 10 
    ? 'Greater or equal to 10'
    : 'Less than 10'
);

console.log(compare());

const getUser = () => ({
  id: '1',
  name: 'Michel',
});

console.log(getUser());