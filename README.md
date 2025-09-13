# Prontuário Enfermagem - Backend

## 🚀 Deploy no Render

1. Crie um repositório no GitHub e suba este projeto.
2. No painel do Render:
   - New → Web Service → conectar ao GitHub.
   - Escolha a branch `main`.
   - Build Command: `npm install`
   - Start Command: `node src/app.js`
3. Crie também um banco de dados PostgreSQL no Render.
4. Configure as variáveis de ambiente:
   - `DATABASE_URL` (Render fornece)
   - `JWT_SECRET` (defina algo seguro)
5. Após o deploy, rode o seed para criar o admin:
   ```bash
   npm run seed
   ```

### 🔑 Credenciais de teste
- Email: `admin@hospital.local`
- Senha: `admin123`
