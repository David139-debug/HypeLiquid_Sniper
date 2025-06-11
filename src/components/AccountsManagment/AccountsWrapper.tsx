import { useEffect, useState, type SetStateAction } from "react";
import Account from "./Account"
import { AnimatePresence } from "framer-motion";

interface Props {
  setAccNum: React.Dispatch<React.SetStateAction<number>>;
  setSidebar: React.Dispatch<SetStateAction<boolean>>;
}

const AccountsWrapper = ({ setAccNum, setSidebar }: Props) => {

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
    <section className="relative bg-[#181C29] min-h-screen h-fit ml-4 roboto py-5 px-1 pr-4">
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
      <button className="cursor-pointer rounded-tl-[8px] rounded-tr-none rounded-br-none rounded-bl-[8px] absolute right-1 top-119
                         transform translate-x-5 flex justify-center shrink-0 items-center bg-[#374151] py-[49px] px-2 h-[111px]" 
                         onClick={() => setSidebar(prev => !prev)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
          <path d="M7.5 12.5L0 12.5L0 0.5L7.5 0.5L7.5 12.5Z" />
          <path d="M0.220703 5.97032C-0.0722656 6.26328 -0.0722656 6.73907 0.220703 7.03203L4.7207 11.532C5.01367 11.825 5.48945 11.825 5.78242 11.532C6.07539 11.2391 6.07539 10.7633 5.78242 10.4703L1.81211 6.5L5.78008 2.52969C6.07305 2.23672 6.07305 1.76094 5.78008 1.46797C5.48711 1.175 5.01133 1.175 4.71836 1.46797L0.218359 5.96797L0.220703 5.97032Z" fill="#D1D5DB" />
        </svg>
      </button>
    </section>
  )
}

export default AccountsWrapper