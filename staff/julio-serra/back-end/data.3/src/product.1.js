const Model = require('./model')

class Product extends Model {
    constructor(doc) {
        //   this._doc = doc
        //   this._jsonFile = 'products.json'
        super(doc, 'products.json')
    }
}


module.exports = Product 