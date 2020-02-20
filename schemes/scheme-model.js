const db = require('../data/db-config')

module.exports = {
  add, 
  update,
  remove,
  findById,
  findSteps,
  find
}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes')
        .where({ id })
        .first()
}

function findSteps(schemeId){
    return db('steps')
        .where('scheme_id', schemeId)
}

function update(id, changes){
    return db('schemes')
        .where({ id })
        .update(changes)
}

function add(user){
    return db('schemes')
        .insert(user, 'id')
}

function remove(id){
    return db('schemes')
        .where({ id })
        .del()
}