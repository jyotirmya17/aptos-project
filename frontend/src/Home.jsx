import React from 'react';
import './Home.css';

function Home({ wallet, balance, xp, onGetTestAPT, onCompleteQuest }) {
  return (
    <div className="container">
      <div className="welcome-box">
        <h1>Welcome to Blockchain Simulation Lab</h1>
        <p>
          Explore how XP, APT, and Quests interact in a blockchain-based ecosystem.
          Use the guide below to understand everything before diving in.
        </p>
      </div>

      <div className="section">
        <h2>User Dashboard</h2>
        <div className="card">
          <p><strong>🪪 Wallet:</strong> {wallet || "Not connected"}</p>
          <p><strong>💰 Balance:</strong> {balance.toFixed(6)} APT</p>
          <p><strong>🏆 XP:</strong> {xp}</p>
          
          <div className="button-group">
            <button className="btn green" onClick={onGetTestAPT}>
              � Get Test APT (+100 XP)
            </button>
            <button className="btn pink" onClick={onCompleteQuest}>
              🚀 Complete Quest (+200 XP)
            </button>
          </div>
          
          <p className="note">* APT is testnet only. No real funds involved.</p>
        </div>
      </div>

      <div className="section">
        <h2>Quick Start Guide</h2>
        <div className="card">
          <p><strong>XP</strong> (Experience Points): Earned by completing quests.</p>
          <p><strong>APT</strong> (Aptos Token): Test tokens to simulate transactions.</p>
          <p><strong>Balance:</strong> Shows your current test APT balance.</p>
          <p><strong>Quests:</strong> Actions that reward XP/APT when completed.</p>
        </div>
      </div>

      <div className="section">
        <h2>Why Simulation Lab?</h2>
        <div className="card">
          <p>✅ Beginner-friendly layout and guide</p>
          <p>✅ Track progress with XP & APT</p>
          <p>✅ Understand real-time blockchain dynamics visually</p>
          <p>✅ Practice Web3 interactions risk-free</p>
        </div>
      </div>

      <div className="section glossary">
        <h2>Glossary</h2>
        <table>
          <thead>
            <tr>
              <th>Term</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>APT</strong></td>
              <td>Aptos Test Token. Simulation currency for transactions. Not real money.</td>
            </tr>
            <tr>
              <td><strong>XP</strong></td>
              <td>Experience Points earned through interactions and quest completion</td>
            </tr>
            <tr>
              <td><strong>Balance</strong></td>
              <td>Current amount of test APT in your simulated wallet</td>
            </tr>
            <tr>
              <td><strong>Quest</strong></td>
              <td>Action that simulates blockchain operations and rewards XP/APT</td>
            </tr>
            <tr>
              <td><strong>Wallet</strong></td>
              <td>Simulated blockchain wallet address for tracking transactions</td>
            </tr>
            <tr>
              <td><strong>useState</strong></td>
              <td>React hook managing dynamic values like XP and balance</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;