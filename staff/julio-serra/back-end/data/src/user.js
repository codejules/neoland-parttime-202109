const { loadDocsFromJson, saveDocsFromJson } = require('./helpers')
 
class User {
    constructor(doc) {
        this._doc = doc // _doc para decir que es un documento interno de la instancia
    }

    // recibir un usuario y guardarlo en users.json
    // convertimos el user de objeto a JSON con stringfly
    save() {
        // al ser una cadena de promesas devolvemos un return
        return loadDocsFromJson('users.json')
            .then(docs => {
                const index = docs.findIndex(doc => doc.id === this._doc.id) //encuentra el id del documento si es igual el id de este documento
                docs.push(this._doc) // añadimos el usuario en la bbdd (que es el documento)

                return saveDocsFromJson(docs, 'users.json')
            })
    }

    // encontrar usuario por email
    static findByEmail(email) {
        return loadDocsFromJson('users.json') // Promesa de lectura, leeme todos los usuarios
            .then(docs => docs.find(doc => doc.email === email)) // busca los usuarios que tenga el mismo email que este ultimo
            .then(doc => doc ? new User(doc) : null)
    }
}

module.exports = User