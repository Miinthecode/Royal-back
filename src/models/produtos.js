// criando uma tabela de produtos com os campos e regras

const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Produtos = sequelize.define('Produtos', {     
    id: {
        type: DataTypes.INTEGER,      // campo inteiro
        primaryKey: true,             // valor único e individual
        autoIncrement: true           // atribui um numero automático
    },
    nome:{
        type: DataTypes.STRING(100),      // campo variável
        allowNull: false                  // não pode ficar vazio
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(30),       // STRING limite de caracteres
        allowNull: false
    },
    image_url: {
        type: DataTypes.TEXT,
    }
})

module.exports = Produtos