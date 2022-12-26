const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://Ronie:caiojulia123@moveisrealcluster.5r7eufy.mongodb.net?retryWrites=true&w=majority"
const client = new MongoClient(uri)

const  conn = async ()  => {
        const clientConnected = await client.connect();
        if(!clientConnected){
            console.error('Banco não conectado')
            process.exit()
        }

        const database = client.db('moveis');
        return database
    }


//module.exports = client
module.exports = conn























/*async function conn() {
    try {
        await client.connect()
            console.info("Conctado ao MongoDB!!!!!")
        
    } catch (error) {
            console.info(err)
        
    }
}*/
