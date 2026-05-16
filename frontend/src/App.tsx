import { useState } from 'react';
import './App.css';

function App() {
  const [logs, setLogs] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDiagnose = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/copilot/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ logs })
      });
      const data = await res.json();
      setAiResponse(data.suggestion);
    } catch (error) {
      setAiResponse('Failed to connect to backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="glass-header">
        <h1>StellarOS AI Copilot</h1>
        <p className="subtitle">Your smart assistant for Soroban and Stellar workflows</p>
      </header>

      <main className="dashboard">
        <section className="card log-input">
          <h2>Diagnostic Logs</h2>
          <textarea
            placeholder="Paste your CLI errors or environment setup logs here..."
            value={logs}
            onChange={(e) => setLogs(e.target.value)}
          ></textarea>
          <button className="primary-btn" onClick={handleDiagnose} disabled={loading || !logs}>
            {loading ? 'Analyzing...' : 'Diagnose with AI'}
          </button>
        </section>

        <section className="card ai-output">
          <h2>Copilot Suggestion</h2>
          <div className={`response-box ${aiResponse ? 'active' : ''}`}>
            {aiResponse ? (
              <p>{aiResponse}</p>
            ) : (
              <p className="placeholder">Awaiting input for analysis...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
