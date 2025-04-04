import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import { wallets } from './walletConfig'; // Import from file
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <App />
    </AptosWalletAdapterProvider>
  </StrictMode>
);