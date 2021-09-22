const person = {
  firstName: 'Tony',
  lastName: 'Hawk',
  hobby: 'Skateboarding'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Skater';
console.log("The person's current job is:", person.job);

person.previousJob = 'OG Skater';
console.log("The person's previous job is:", person.previousJob);

console.log('The complete person object:', person);
