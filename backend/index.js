require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Aptos, Network } = require('@aptos-labs/ts-sdk');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Aptos client with network configuration
const aptos = new Aptos({
  network: Network.DEVNET // Automatically uses Devnet endpoints
});

// Faucet endpoint (using built-in faucet method)
app.post('/api/faucet', async (req, res) => {
  try {
    const tx = await aptos.fundAccount({
      accountAddress: req.body.address,
      amount: 100_000_000 // 1 APT (in octas)
    });
    res.json({ success: true, txHash: tx });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get account balance endpoint
app.get('/api/balance/:address', async (req, res) => {
  try {
    const resources = await aptos.getAccountResources({
      accountAddress: req.params.address
    });
    const coin = resources.find(r => r.type === '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>');
    res.json({ balance: coin.data.coin.value });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));