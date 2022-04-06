const { models: { User, Note } } = require('../../data')
const { validators: { validateId } } = require('../../commons')

function retrievePublicNotes(id) {
    validateId(id, 'user id')

    return User.findById(id)
        .then(user => {
            if (!user) throw new Error(`user with id ${id} not found`)
            return Note.find({ public: true }).lean().sort('-date')
        })
        .then(notes => {
            notes.forEach(note => {
                note.id = note._id.toString()

                delete note._id
                delete note.__v

                const { comments } = note

                if (comments) {

                    comments.forEach(comment => {
                        comment.id = comment._id.toString()

                        delete comment._id
                        delete comment.__v
                    })
                }

            })
            return notes
        })
}

module.exports = retrievePublicNotes