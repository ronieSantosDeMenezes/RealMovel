
const conn = require('../../db/conn')

const collectionName = 'clients'
class Client {

    constructor(name, email ) {
        this.name = name
        this.email = email
    }
    async insert() {
        const db = await conn()
        const client = await db.collection(collectionName).insertOne(this)
        return client
    }
    async find() {
        const db = await conn()
        const client = await db.collection(collectionName).find(this)
        return client
    }
}
module.exports = Client
module.exports = find()