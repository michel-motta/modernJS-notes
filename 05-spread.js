// SPREAD OPERATOR

const user = {
  firstName: 'Michel',
  lastName: 'Motta',
  age: 24,
  instagram: '@msvmotta',
  skills: ['HTML', 'CSS', 'JavaScript', 'NodeJS'],
  active: false,
};

// a sintaxe é igual o rest operator, porém é usado somente dentro de um objeto
const updatedUser = {
  ...user,
  skills: ['TypeScript', ...user.skills],
  active: true,
};


console.log(user.skills);

console.log(updatedUser);
