import { useEffect, useState } from "react";
import Account from "./Account"
import { AnimatePresence } from "framer-motion";

interface Props {
  setAccNum: React.Dispatch<React.SetStateAction<number>>;
}

const AccountsWrapper = ({ setAccNum }: Props) => {

  const [accounts, setAccounts] = useState([
    {
      title: "Account",
      num: 1,
      status: "ACTIVE",
      pair: "BTC/USDT",
      leverage: "20x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
    {
      title: "Account",
      num: 2,
      status: "INACTIVE",
      pair: "ETH/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
    {
      title: "Account",
      num: 3,
      status: "ACTIVE",
      pair: "SOL/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
    {
      title: "Account",
      num: 4,
      status: "ACTIVE",
      pair: "SOL/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
    {
      title: "Account",
      num: 5,
      status: "ACTIVE",
      pair: "SOL/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
    {
      title: "Account",
      num: 6,
      status: "ACTIVE",
      pair: "SOL/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
    {
      title: "Account",
      num: 7,
      status: "ACTIVE",
      pair: "SOL/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
    {
      title: "Account",
      num: 8,
      status: "ACTIVE",
      pair: "SOL/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
    {
      title: "Account",
      num: 9,
      status: "ACTIVE",
      pair: "SOL/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
    {
      title: "Account",
      num: 10,
      status: "ACTIVE",
      pair: "SOL/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+$147,83"
    },
  ])

  const handleAdd = () => {
    if (accounts.length === 10) {
      return alert("You can't add more then 10 Accounts");
    }

    const lastNum = Math.max(...accounts.map(acc => acc.num), 0);
    const newNum = lastNum + 1;

    const newAccount = {
      title: "Account",
      num: newNum,
      status: "ACTIVE",
      pair: "SQL/USDT",
      leverage: "15x Leverage",
      balance: "$5,247.83",
      pnl: "+147.3"
    };
  
    setAccounts(prev => [...prev, newAccount]);
  };

  useEffect(() => {
    setAccNum(accounts.length);
  }, [accounts])
  

  const handleRemoveCard = (num: number) => {
    const updated = accounts.filter((acc) => acc.num !== num);

    setAccounts(updated);
  };

  return (
    <section className="bg-[#181C29] min-h-screen h-fit ml-4 roboto py-5 px-1">
        <div className="flex flex-col gap-7">
            <div className="flex justify-between">
              <h1 className="text-[#F0B90B] text-xl font-bold font-sans-Roboto">ACCOUNTS MANAGMENT</h1>
              <button onClick={handleAdd} className="py-[5px] w-[96px] px-2.5 bg-[rgba(0,255,76,0.80)] text-white cursor-pointer text-xs font-bold rounded-[4px]">
                Add Account
              </button>
            </div>
        <AnimatePresence>
          {accounts.map((acc) => (
            <Account
              handleRemoveCard={handleRemoveCard}
              key={acc.num}
              acc={acc}
              id={acc.num}
            />
          ))}
        </AnimatePresence>
        </div>
    </section>
  )
}

export default AccountsWrapper