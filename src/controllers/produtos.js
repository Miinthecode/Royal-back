const { Produtos } = require('../models')

async function getProdutos(req, res) {
  try {
    const produtos = await Produtos.findAll();
    return res.send(produtos);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Erro ao buscar os produtos');
  }
}

async function getProduto(req, res) {
  const { id } = req.params;
  try {
    const produto = await Produtos.findByPk(id);
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    return res.json(produto);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Erro ao buscar o produto');
  }
}


async function createProduto (req, res){
    try {             
        const produto = await Produtos.create(req.body)
        return res.status(201).send('Produto cadastrado com sucesso!')
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao criar o produto!')
    }
}

async function deleteProduto (req, res) {
    const {id} = req.params;
    try {
        await Produtos.destroy({                      
            where: {
                id: id
            }
        })
        return res.status(202).send('Produto deletado com sucesso!')
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao deletar o produto!')
    }
}

async function updateProduto (req, res) {
    const {id} = req.params;
    try {
        const [updated] = await Produtos.update(req.body, { 
            where: {
                id: id
            }
        })
        if(updated){
            const updatedProduto = await Produtos.findOne({where: {id: id}})
            return res.status(200).send({
                message: 'Produto atualizado com sucesso!',
                produto: updatedProduto
            })
        }
        throw new Error('Produto não encontrado!')
    } catch (error) {
        console.error(error)
        return res.status(500).send('Erro ao atualizar o produto!')
    }
}

module.exports = {
    getProduto, 
    getProdutos,
    createProduto, 
    deleteProduto,
    updateProduto
}