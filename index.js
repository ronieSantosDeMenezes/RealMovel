const express = require('express')
const routes = require('./routes')
const conn = require('./db/conn')

const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json()) 
app.use(routes)



const port = 3000

conn()
    .then(() =>{ 
        app.listen(port, () => {
                    console.info('app running on:', `http://localhost:${port}`)
        })
    }
    )
    .catch(() => process.exit())