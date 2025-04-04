require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { AptosClient, AptosAccount, FaucetClient } = require('@aptos-labs/ts-sdk');

const app = express();
app.use(cors());
app.use(express.json());

const NODE_URL = 'https://fullnode.devnet.aptoslabs.com';
const FAUCET_URL = 'https://faucet.devnet.aptoslabs.com';

// Initialize clients
const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

// Updated Faucet endpoint
app.post('/api/faucet', async (req, res) => {
  const { address } = req.body;
  try {
    await faucetClient.fundAccount({ accountAddress: address, amount: 100_000_000 });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Updated Balance check endpoint
app.get('/api/balance/:address', async (req, res) => {
  try {
    const resources = await client.getAccountResources({
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