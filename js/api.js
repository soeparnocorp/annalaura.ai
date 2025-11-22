// api.js

async function queryAI(version, input) {
  const endpoint = version === 'demo'
    ? 'https://your-demo-worker.example.workers.dev/ai'
    : 'https://your-scalable-api.vercel.app/ai';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ version, input })
    });
    const data = await response.json();
    return data.output;
  } catch (error) {
    console.error('Error querying AI:', error);
    return "Maaf, ada masalah dengan AI.";
  }
}
