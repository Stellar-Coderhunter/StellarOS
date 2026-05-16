import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Workflow API Endpoints
app.get('/api/status', (req, res) => {
  res.json({ status: 'StellarOS Backend is running', timestamp: new Date() });
});

// Mock endpoint for AI Copilot diagnostics
app.post('/api/copilot/diagnose', (req, res) => {
  const { logs } = req.body;
  res.json({
    suggestion: "Based on the logs, your Soroban CLI might be outdated. Please try running `cargo install --locked soroban-cli`.",
    confidence: 0.85
  });
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
