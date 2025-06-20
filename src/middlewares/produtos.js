function validateCreateProduto(req, res, next){    
    const { nome, categoria, preco, image_url } = req.body
        if (!nome || !categoria || !preco || !image_url){
            return res.status(400).send("Todos os campos são obrigatórios")
        }
        if(nome.length > 100){
            return res.status(400).send('O nome do produto não pode ter mais do que 100 caracteres.')
        }
        if(categoria.length > 50){
            return res.status(400).send('Categoria não pode ter mais do que 50 caracteres.')
        }

        next();

}

function validateGetProduto(req, res, next) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send('Id do produto é obrigatório');
  }
  next();
}

function validateDeleteProduto(req, res, next){
    const {id} = req.params
    if(!id){
        return res.status(400).send('Id do produto é obrigatório')
    }
    next();
}

function validateUpdateProduto(req, res, next) {
  const { id } = req.params;
  const { nome, categoria, preco, image_url } = req.body;

  if (!id) {
    return res.status(400).send('Id do produto é obrigatório');
  }

  if (!nome || !categoria || !preco || !image_url) {
    return res.status(400).send("Todos os campos são obrigatórios para atualização");
  }

  if (nome.length > 100) {
    return res.status(400).send('O nome do produto não pode ter mais do que 100 caracteres.');
  }

  if (categoria.length > 50) {
    return res.status(400).send('Categoria não pode ter mais do que 50 caracteres.');
  }

  next();
}

module.exports = {
    validateCreateProduto, 
    validateDeleteProduto,
    validateGetProduto,
    validateUpdateProduto
}

