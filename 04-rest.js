// REST OPERATOR

const user = {
  firstName: 'Michel',
  lastName: 'Motta',
  full_name: 'Michel dos Santos Vaz da Motta',
  age: 24,
  instagram: '@msvmotta',
  skills: ['HTML', 'CSS', 'JavaScript', 'NodeJS'],
};

// pega todos as propriedades restantes de user e coloca na constante rest
// precisa ser a última variável declarada na desestruturação
const { skills, ...userRest } = user;
const [ primary ] = skills;

console.log(primary);
console.log(userRest);