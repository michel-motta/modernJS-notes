// DESTRUCTURING

const user = {
  firstName: 'Michel',
  lastName: 'Motta',
  full_name: 'Michel dos Santos Vaz da Motta',
  age: 24,
  instagram: '@msvmotta',
  skills: ['HTML', 'CSS', 'JavaScript', 'NodeJS'],
};

// desestruturação básica: transforma as propriedades do objeto user em constantes que podem ser acessadas individualmente
const { firstName, age, skills } = user;

// renomeando uma proriedade na desestruturação
const { full_name: fullName } = user;

// desestruturando o objeto skills
const [ primary, secondary, tertiary, quarternary ] = skills;

console.log(firstName, age); // Michel 24

console.log(fullName); // Michel dos Santos Vaz da Motta

console.log(tertiary); // JavaScript