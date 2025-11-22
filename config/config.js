// config.js

// Versi AI yang tersedia
const AI_VERSIONS = {
  demo: {
    name: "Demo",
    description: "Quick preview AI, safe & lightweight.",
    endpoint: "https://your-demo-worker.example.workers.dev/ai"
  },
  companion: {
    name: "Pacar Virtual",
    description: "Interactive, emotional companion AI.",
    endpoint: "https://your-scalable-api.vercel.app/ai?version=companion"
  },
  creator: {
    name: "Content Creator",
    description: "Assists in idea generation & content workflow.",
    endpoint: "https://your-scalable-api.vercel.app/ai?version=creator"
  },
  enterprise: {
    name: "Enterprise",
    description: "Formal, business-ready AI assistant.",
    endpoint: "https://your-scalable-api.vercel.app/ai?version=enterprise"
  }
};

// Default version
let currentVersion = "demo";

// Fungsi untuk ganti versi AI
function setVersion(versionKey) {
  if (AI_VERSIONS[versionKey]) {
    currentVersion = versionKey;
    console.log(`Version switched to ${versionKey}`);
  } else {
    console.warn(`Version ${versionKey} not found`);
  }
}

// Export modul jika menggunakan bundler / module system
// export { AI_VERSIONS, currentVersion, setVersion };
