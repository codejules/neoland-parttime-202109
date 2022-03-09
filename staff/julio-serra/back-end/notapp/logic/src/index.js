const registerUser = require('./register-user')
const updateUser = require('./update-user')
const deleteUser = require('./delete-user')
const retrieveUser = require('./register-user')
const createNote = require('./create-note')
const updateNote = require('./update-note')
const deleteNote = require('./delete-note')
const retrieveNote = require('./retrieve-note')
const authenticateUser = require ('./authenticate-user')


module.exports = {
    registerUser,
    updateUser,
    deleteUser,
    retrieveUser,
    createNote,
    updateNote,
    deleteNote,
    retrieveNote,
    authenticateUser
}