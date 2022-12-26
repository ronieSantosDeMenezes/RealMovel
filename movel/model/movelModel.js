const conn = require('../../db/conn')

const collectionName = 'movel'
class Movel {

    constructor(name, descriptProdut, color, price) {
        this.name = name
        this.descriptProdut = descriptProdut
        this.color = color
        this.price = price
    }
    async insert() {
        const db = await conn()
        const movel = await db.collection(collectionName).insertOne(this)
        return movel
    }
    async find() {
        const db = await conn()
        const movel = await db.collection(collectionName).find(this)
        return movel
    }
    async updateOne() {
        const db = await conn()
        const movel = await db.collection(collectionName).updateOne(this)
        return movel
    }

}
module.exports  = Movel