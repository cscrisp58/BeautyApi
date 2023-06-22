import { conn } from '../db.js';

export const deleteService = async (req, res) => {
        const result = await conn.query('SELECT id FROM services')
    res.json(result[0]);

    const service = result.find(c => c.id === parseInt(req.params.id));
    if (!service) return res.status(404).send('The service you are trying to delete was not found');
    else {
    const index = service.indexOf(service)
    service.splice(index, 1)
    res.send(service)
    }
}

export const postService = (req, res) => {
    const service = {
        id: beauServices.length + 1,
        name: req.body.name,
        gentle: req.body.gentle
    }
    beauServices.push(service);
    res.send(service);
}

export const getServices = async (req, res) => {
    const result = await conn.query('SELECT * FROM services')
    res.json(result[0]);
}

export const getServiceById = async (req, res) => { 
    const idServ = parseInt(req.params.id)
    const result = await conn.query(`SELECT id, name, gentle FROM services WHERE id = ${idServ}`)
    if (!result) return res.status(404).send('The service was not found');
    else res.send(result[0]);
}

export const updateServiceById = async (req, res) => {
    const idServ = parseInt(req.params.id)
    const reqBody = req.body
    const [result] = await conn.query(`UPDATE services SET name = '${reqBody.name}', gentle = '${reqBody.gentle}' WHERE id = ${idServ}`)
    if (result.affectedRows === 0) {
        return res.status(404).send('The service was not found')
    } if(result.affectedRows >= 1){
        const showResult = await conn.query(`SELECT id, name, gentle FROM services WHERE id = ${idServ}`)
        res.send(showResult[0])
    } 
    }
   