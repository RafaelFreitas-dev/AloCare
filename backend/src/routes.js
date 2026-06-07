
import express from 'express'; // Formato novo de importação
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// --- GAMBIARRA OFICIAL DO ES MODULES PARA RECONSTRUIR O __DIRNAME ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

router.get('/trabalhar', (req, res) => {
  res.sendFile(path.join(__dirname, '..','public', 'quero-trabalhar.html'));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

router.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'cadastro.html'));
});

// ROTA PARA PEGAR OS DADOS DO FORMULÁRIO (POST)
router.post('/enviar-dados', (req, res) => {
  const {email, senha } = req.body; // O Express joga todos os dados do formulário dentro de 'req.body'

  // Aqui você faz o que quiser com os dados (salva no banco, exibe no terminal, etc.)
  console.log(`Email recebido: ${email}`);
  console.log(`Senha: ${senha}`);

  // Responde para o usuário (pode redirecionar ele para outra página se quiser)
  res.send('Seus dados foram recebidos com sucesso.');

  // Se quisesse redirecionar para a pagina 2 após o envio, faria:
  // res.redirect('/pagina2');
});

  // Formato novo de exportação (Exportação padrão)
  export default router;