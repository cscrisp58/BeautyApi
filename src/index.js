import  express  from 'express';
import routerServ from './routes/services-routes.js';

const app = express();

app.use(express.json());

app.use(routerServ)

const port = process.env.port || 80;
app.listen(port, () => console.log(`Listening in the port ${port}...`))