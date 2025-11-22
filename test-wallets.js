/**
 * @fileoverview Configuration for local test accounts (e.g., used in Hardhat/Truffle).
 * CRITICAL SECURITY NOTE: Private keys must NEVER be hardcoded into source control.
 * These settings are typically overridden by Hardhat's default behavior 
 * or loaded securely via environment variables (e.g., process.env).
 */
const { toWad } = require("./helpers/misc-utils"); // Destructuring for cleaner access

/**
 * Default number of accounts Hardhat/Ganache provides.
 * If you need specific accounts beyond the default 10, define them securely.
 */
const DEFAULT_TEST_ACCOUNT_COUNT = 10; 
const INITIAL_BALANCE_WAD = toWad("1000000"); // 1,000,000 tokens in WAD format

// --- OPTIMIZED CONFIGURATION ---
module.exports = {
  // We recommend relying on Hardhat's default accounts/mnemonic for local testing 
  // to avoid hardcoding any sensitive data.
  // Example if specific custom accounts ARE required and must be injected:
  
  // accounts: [
  //   // WARNING: Load these securely from environment variables (e.g., .env file)!
  //   {
  //     secretKey: process.env.TEST_ACCOUNT_1_KEY, 
  //     balance: INITIAL_BALANCE_WAD,
  //   },
  //   {
  //     secretKey: process.env.TEST_ACCOUNT_2_KEY, 
  //     balance: INITIAL_BALANCE_WAD,
  //   },
  //   // ... more accounts loaded securely ...
  // ],
  
  // Since the original intent was simply to provide 8 generic test accounts 
  // with a large starting balance (1M tokens), we typically omit this block 
  // and rely on Hardhat's defaults (10 accounts, 10,000 ETH balance). 
  // If the 1,000,000 WAD balance is critical, Hardhat's config should be set:
  
  // NOTE: If this file is defining custom accounts, use the secure method above.
  // Otherwise, return an empty object to use Hardhat defaults if the file 
  // is included in the main Hardhat config.
};
