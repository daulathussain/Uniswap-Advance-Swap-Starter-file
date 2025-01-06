const ERC20_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
];

const COMMISSION_ADDRESS_ADMIN = process.env.NEXT_PUBLIC_COMMISSION_ADDRESS;
const COMMISSION_RATE_PRICE = process.env.NEXT_PUBLIC_COMMISSION_RATE;
