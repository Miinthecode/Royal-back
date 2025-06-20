require('dotenv').config()
const express = require('express')
const port = process.env.PORT || 5000; 
const app = express()
require ('./src/models') // Importa os modelos para que sejam sincronizados com o banco de dados
const produtosRoutes = require('./src/routes/produtos')
const usersRoutes = require('./src/routes/users')
const authRoutes = require('./src/routes/auth')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(produtosRoutes)
app.use(usersRoutes)
app.use(authRoutes)




const sequelize = require('./src/config/database')

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})