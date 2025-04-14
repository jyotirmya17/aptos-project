
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { Button } from '@mui/material';

export default function WalletButton() {
  const { connect, disconnect, account, connected } = useWallet();

  return (
    <Button
      variant="contained"
      color={connected ? "success" : "primary"}
      onClick={connected ? disconnect : connect}
    >
      {connected ? `Connected: ${account.address.slice(0, 6)}...` : 'Connect Wallet'}
    </Button>
  );
}