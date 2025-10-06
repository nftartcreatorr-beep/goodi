
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Health check
app.get('/health', (req,res)=> res.json({ok:true}));

// Placeholder API routes (you can remove later)
app.post('/api/metrics', (req,res)=>{ console.log('metrics', req.body); res.json({ok:true}); });

// Fallback to index.html
app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, ()=> console.log(`Goodi starter running on http://localhost:${PORT}`));
