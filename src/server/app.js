import express from 'express';
import path from 'path';

const app = express();
const publicPath = path.resolve(__dirname, '..', '..', 'public');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
   res.send('Hello from Express!');
});

app.listen(3000, () => {
   console.log('👂 MERN Boilerplate listening on port 3000');
   console.log(`👀 MERN Boilerplate looking inside ${publicPath}`);
});