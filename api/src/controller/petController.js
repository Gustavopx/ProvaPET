import { Router } from 'express'
import { inserirPet, listarPets } from '../repository/petRepository.js';


const server = Router();

server.post('/pet', async (req, resp) => {

    const x = req.body;
    
    const chamarf = inserirPet(x);

    resp.send(x);


})

server.get('/pet', async (req,resp) => {

    try {

        const x = await listarPets()
        resp.send(x);

    }   catch(err) {
        resp.status(400).send({
            erro: err.mesage
        })
    }
  

})

export default server