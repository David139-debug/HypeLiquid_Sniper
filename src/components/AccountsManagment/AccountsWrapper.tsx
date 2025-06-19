import { useEffect, useState } from "react";
import Account from "./Account"
import { AnimatePresence } from "framer-motion";
import DeleteModal from "./DeleteModal/DeleteModal";

interface Props {
  setAccNum: React.Dispatch<React.SetStateAction<number>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AccountsWrapper = ({ setAccNum, setModal }: Props) => {

  const [deleted, setDeleted] = useState<number>(0);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
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
  }, [accounts]);

  const handleOpenModal = () => {
    if (deleted === 0) {
      return;
    }

    if (show) {
      handleRemoveCard();
      return;
    }

    setDeleteModal(true);
  };

  const handleRemoveCard = () => {
      const updated = accounts.filter((acc) => acc.num !== deleted);

      setAccounts(updated);
  };

  return (
    <section className="relative w-[90vw] max-w-[1000px] h-[90vh] bg-[#12131a] rounded-xl p-6 overflow-y-auto inter shadow-2xl">
      {deleteModal && (
        <div className="fixed w-full inset-0 flex items-center justify-center z-50 backdrop-blur-[1.8px] shadow-lg">
          <DeleteModal setShow={setShow} show={show} name={name} handleRemoveCard={handleRemoveCard} setDeleteModal={setDeleteModal} />
        </div>
      )}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-white text-xl mb-8">Account Managment</h1>
          <svg onClick={() => setModal(prev => !prev)} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer transform -translate-y-5" width={12} fill="#9ca3af" viewBox="0 0 384 512">
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </div>
        <div className="flex justify-between gap-3 mb-5">
          <label className="relative w-full">
            <svg
              width={13}
              height={13}
              fill="#9ca3af"
              className="absolute left-3 top-5 -translate-y-1/2 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
            </svg>

            <input
              type="number"
              placeholder="Value"
              className="h-10 w-full bg-[#1a1b24] text-white border border-gray-800 rounded-md py-2 pl-10 pr-10 placeholder:text-white"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              fill="white"
              viewBox="0 0 576 512"
              className="absolute right-3 top-5 -translate-y-1/2 pointer-events-none"
            >
              <path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z" />
            </svg>
          </label>
          <label className="relative w-full">
            <select
              className="h-10 w-full bg-[#1a1b24] text-white border border-gray-800 rounded-md py-2 pl-4 pr-10 placeholder:text-white"
            >
              <option>Exchange List</option>
              <option>HyperLiquid</option>
              <option>ByBit</option>
              <option>Binance</option>
            </select>
          </label>

            <button onClick={handleAdd} className="min-w-[170px] inter px-2.5 bg-[#16a34a] text-white cursor-pointer  rounded-[4px]">
              Create Account
            </button>
            <button onClick={handleOpenModal} className=" min-w-[91px] inter px-2.5 bg-[#dc2626] text-white cursor-pointer rounded-[4px]">
              DELETE
            </button>
        </div>
        <hr className="border border-gray-800" />
      </div>

      <div className="flex justify-end py-3">
        <select
          defaultValue=""
          className="h-10 bg-[#1a1b24] text-white border border-gray-800 rounded-md py-2 pl-8 pr-10 placeholder:text-white"
        >
          <option value="">Account List</option>
          <option value="long">Long</option>
          <option value="short">Short</option>
        </select>
      </div>

      <div className="grid grid-cols-2 items-center gap-7">
        <AnimatePresence>
          {accounts.map((acc) => (
            <Account
              getId={(clickedId) => setDeleted(clickedId)}
              getName={(name) => setName(name)}
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