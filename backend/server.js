import express from 'express'; // Importe o Express para criar o servidor
import path from 'path';
import { fileURLToPath } from 'url';
import minhasRotas from './src/routes.js'; // Importe as rotas do arquivo routes.js

// Crie uma instância do Express para configurar o servidor
const app = express();

// Configuração necessária para usar caminhos de arquivos com "import"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Essencial: Faz o Express entender dados vindos de formulários HTML (POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 2. Essencial: Libera a pasta "public" para que o HTML ache o CSS e o JS interno
app.use(express.static(path.join(__dirname, 'public')));


// Usar as rotas definidas no arquivo routes.js
app.use(minhasRotas);

// Aplicativo ouvindo na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta http://localhost:3000');
})