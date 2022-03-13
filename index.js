const express       = require('express');
const cors          = require('cors');
const compression   = require('compression');
const PORT          = process.env.PORT || 3001;

const app           = express();

require('dotenv').config();

app.use(compression());
app.use(cors());
app.use('/public', express.static('public'));
app.use(express.json());

const brands = require('./routes/getbrands');
app.use('/', brands);
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })
  

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})

