import  express  from 'express';
import {conn} from './db.js';

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const result = await conn.query('SELECT * FROM service')
    res.send(result);
});

app.get('/api/v1/services', (req, res) => {
    res.send(beauServices);
});

app.get('/api/v1/services/:id', async (req, res) => {
    const service = 
     beauServices.find(c => c.id === parseInt(req.params.id));
    if (!service) return res.status(404).send('The service was not found');
    else res.send(service);
});

app.post('/api/v1/services', (req, res)=>{
    const service = {
        id: beauServices.length + 1, 
        name: req.body.name,
        gentle: req.body.gentle
    }
    beauServices.push(service);
    res.send(service);
});

app.delete('/api/v1/services/:id', (req, res) => {
    const service = beauServices.find(c => c.id === parseInt(req.params.id));
    if (!service) return res.status(404).send('The service you are trying to delete was not found'); 

    const index = beauServices.indexOf(service)
    beauServices.splice(index, 1)
    res.send(service)
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Listening in the port ${port}...`))