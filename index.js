const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'harrypotter',
  password: 'Junior07',
  port: 5432, 
});

app.use(express.json());

app.post('/bruxos', async (req, res) => {
  const { nome, idade, casa, habilidade, status_sangue, patrono } = req.body;
  const query = 'INSERT INTO bruxos (nome, idade, casa, habilidade, status_sangue, patrono) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
  const values = [nome, idade, casa, habilidade, status_sangue, patrono];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao criar bruxo:', err);
    res.status(500).send('Erro ao criar bruxo');
  }
});


app.get('/bruxos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bruxos');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao obter bruxos:', err);
    res.status(500).send('Erro ao obter bruxos');
  }
});


app.put('/bruxos/:id', async (req, res) => {
  const id = req.params.id;
  const { nome, idade, casa, habilidade, status_sangue, patrono } = req.body;
  const query = 'UPDATE bruxos SET nome=$1, idade=$2, casa=$3, habilidade=$4, status_sangue=$5, patrono=$6 WHERE id=$7';
  const values = [nome, idade, casa, habilidade, status_sangue, patrono, id];

  try {
    await pool.query(query, values);
    res.send('Bruxo atualizado com sucesso');
  } catch (err) {
    console.error('Erro ao atualizar bruxo:', err);
    res.status(500).send('Erro ao atualizar bruxo');
  }
});

app.delete('/bruxos/:id', async (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM bruxos WHERE id=$1';

  try {
    await pool.query(query, [id]);
    res.send('Bruxo deletado com sucesso');
  } catch (err) {
    console.error('Erro ao deletar bruxo:', err);
    res.status(500).send('Erro ao deletar bruxo');
  }
});


app.post('/varinhas', async (req, res) => {
  const { material, comprimento, nucleo, data_fabricacao } = req.body;
  const query = 'INSERT INTO varinhas (material, comprimento, nucleo, data_fabricacao) VALUES ($1, $2, $3, $4) RETURNING *';
  const values = [material, comprimento, nucleo, data_fabricacao];

  try {
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao criar varinha:', err);
    res.status(500).send('Erro ao criar varinha');
  }
});

app.get('/varinhas', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM varinhas');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao obter varinhas:', err);
    res.status(500).send('Erro ao obter varinhas');
  }
});


app.put('/varinhas/:id', async (req, res) => {
  const id = req.params.id;
  const { material, comprimento, nucleo, data_fabricacao } = req.body;
  const query = 'UPDATE varinhas SET material=$1, comprimento=$2, nucleo=$3, data_fabricacao=$4 WHERE id=$5';
  const values = [material, comprimento, nucleo, data_fabricacao, id];

  try {
    await pool.query(query, values);
    res.send('Varinha atualizada com sucesso');
  } catch (err) {
    console.error('Erro ao atualizar varinha:', err);
    res.status(500).send('Erro ao atualizar varinha');
  }
});

app.delete('/varinhas/:id', async (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM varinhas WHERE id=$1';

  try {
    await pool.query(query, [id]);
    res.send('Varinha deletada com sucesso');
  } catch (err) {
    console.error('Erro ao deletar varinha:', err);
    res.status(500).send('Erro ao deletar varinha');
  }
});

app.get('/', async (req, res) => {
  const frases = [
    "Diga alguma coisa que eu não saiba",
    "Recalque de mandada eu tiro debochando",
    "Eu sou uma bruxa, não uma babá",
    "Beijinho no ombro que o recalque passa longe",
    "Eu não sou obrigada a nada",
    "Eu sou a rainha da porra toda",
    "Eu não sou capaz de lidar com isso",
    "Pegue amasse e jogue fora",
    "Mata ele, frita ele, faz pure",
    "Macumba sarava, me erra e vá se lascar",
    "E ai bichan",
    "Eu sou a própria bruxa do 71",
    "Quem com lacre lacra, com o lacre será lacrado",
    "Transborde mona, quem não souber nada que se afogue na sua marra"
  ];

  const randomIndex = Math.floor(Math.random() * frases.length);
  const randomPhrase = frases[randomIndex];
  res.send("Fábio está mandando o feitiço: " + randomPhrase);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}✨`);
});