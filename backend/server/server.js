// server.js
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('../dbconfig/dbconnection.js'); 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes for authentication
app.post('/api/login', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    if (email === 'usuario@example.com' && senha === 'senha') {
        res.json({ message: 'Login bem sucedido' });
      } else {
        res.status(401).json({ message: 'Credenciais invalidas' });
      }

    // const query = 'SELECT * FROM users WHERE email = ? AND senha = ?';
    // db.query(query, [email, senha], (err, results) => {
    //   if (err) {
    //     console.error('Erro ao acessar a base de dados:', err);
    //     res.status(500).json({ message: 'Erro de servidor interno' });
    //     return;
    //   }
  
    //   if (results.length === 0) {
    //     res.status(401).json({ message: 'Credenciais invalidas' });
    //   } else {
    //     res.json({ message: 'Login bem sucedido' });
    //   }
    // });  
});

app.post('/api/signup', (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;


});

app.listen(3001, () => {
  console.log('Servidor a correr na porta 3001');
});
