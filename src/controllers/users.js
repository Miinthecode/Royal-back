const {Users} = require('../models')

async function createUsers(req, res) {
    try {
        await Users.create(req.body)
        return res.status(201).send('Usuário cadastrado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })     
        
    }
}


async function deleteUsers(req, res) {
  try {
    const deleted = await Users.destroy({ where: { id: req.params.id } });

    if (deleted === 0) {
      return res.status(404).send({ error: 'Usuário não encontrado' });
    }

    return res.status(200).send('Usuário deletado com sucesso');
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}

async function updateUsers(req, res) {
    try {
        await Users.update(req.body, { where: { id: req.params.id } })
        return res.status(201).send('Usuário atualizado com sucesso')
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })     
        
    }
}



async function getUsers(req, res) {
    try {
        const users = await Users.findAll()
        return res.status(200).json(users)
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })     
    }
}

async function getUsersById(req, res) {
    const { id } = req.params
    try {
        const user = await Users.findOne({ where: { id } })
        if (!user) {
            return res.status(404).send({ error: 'Usuário não encontrado' })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error.message
        })     
    }
}
module.exports = {
    createUsers,
    updateUsers,
    deleteUsers,
    getUsers,
    getUsersById  
}