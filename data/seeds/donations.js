
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('donations').insert([
        {name: 'sarah', organization: 'red cross', amount: 50},
        {name: 'rich', organization: 'SPCA', amount: 5000},
        {name: 'brian', organization: 'Doctors without borders', amount: 100},
        {name: 'jane', organization: 'World wildlife fund', amount: 25},
        {name: 'ryan', organization: 'Save the children', amount: 1000},
        {name: 'joan', organization: 'UNICEF', amount: 10},
      ]);
    });
};
