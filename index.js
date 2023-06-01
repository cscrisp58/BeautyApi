const express = require('express');
const app = express();

app.use(express.json());

const beauServices = [
     { id: 1, name: 'Hair style', gentle: 'woman'},
     { id: 2, name: 'Barber shop', gentle: 'man'},
     { id: 3, name: 'Massasge', gentle: 'n/a' },
     { id: 4, name: 'Cosmetic service', gentle: 'n/a'},
     { id: 5, name: 'Tattoo', gentle: 'n/a'}   
]

app.get('/', (req, res) => {
    res.send('Hello "Beauty Api"');
});

app.get('/api/v1/services', (req, res) => {
    res.send(beauServices);
});

app.get('/api/v1/services/:id', (req, res) => {
    const service = beauServices.find(c => c.id === parseInt(req.params.id));
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
