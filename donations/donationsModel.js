const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(donations) {
  return db('donations')
    .insert(donations, 'id')
    .then(ids => {
      return db('donations')
        .where({id: ids[0]})
        .first();
  });
}

function update(id, changes) {
  return db('donations')
    .where({id})
    .update(changes, '*')
}

function remove(id) {
  return db('donations')
    .where({id})
    .del();
}

function getAll() {
  return db('donations');
}

function findById(id) {
  return db('donations')
    .where({id})
    .first()
}
