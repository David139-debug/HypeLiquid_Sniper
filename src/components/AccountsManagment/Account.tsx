import { useEffect, useRef, useState } from "react";
import AnimateHeight from "react-animate-height";
import { motion } from "framer-motion";

export interface AccountInfo {
    title: string;
    num: number;
    status: string;
    pair: string;
    leverage: string;
    balance: string;
    pnl: string;
}

interface AccountProps {
    acc: AccountInfo;
    id: number;
    getId: (id: number) => void;
    getName: (name: string) => void;
}

const Account = ({ acc, id, getId, getName }: AccountProps) => {

    const [clicked, setClicked] = useState<boolean>(false);
    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleOpenCard = () => {
        setClicked(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setClicked(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <motion.article
            ref={cardRef}
            onClick={() => {
                handleOpenCard();
                getId(id);
                getName(`${acc.title} ${acc.num}`);
              }}
            className={`self-start flex flex-col w-[460px] max-w-full bg-[#23272E] p-5 transition-all duration-300 relative rounded-xl ${clicked ? "border border-[#F0B90B]" : ""}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            
            >
            <div className="mgTop flex justify-between items-center space-y-6">
                <h1 className="title">{acc.title} {acc.num}</h1>
                <div className="flex gap-3 items-center justify-end">
                    <label className="relative cursor-pointer flex">
                        <input
                            type="checkbox"
                            className="cursor-pointer peer appearance-none h-[22px] w-[22px] shrink-0 rounded-xs border-2 border-[#787b7f] bg-transparent checked:bg-blue-500 checked:border-blue-500"
                        />
                        <svg
                            className="absolute left-1 top-1 h-4 w-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </label>
                    <div
                        className={`button ${acc.status === "INACTIVE"
                                ? "text-[#FF3838] !bg-[rgba(255,0,0,0.10)]"
                                : "text-[#00FF4B]"
                            }`}
                    >
                        {acc.status}
                    </div>
                </div>
            </div>

            <div className="flex justify-between space-y-6 text-[rgba(255,255,255,0.70)] text-sm">
                <p>{acc.pair}</p>
                <p>{acc.leverage}</p>
            </div>

            <div className="flex justify-between">
                <p className="text-[rgba(255,255,255,0.70)] text-sm">
                    Balance:{" "}
                    <span className="text-white font-bold text-sm">{acc.balance}</span>
                </p>
                <p className="text-[rgba(255,255,255,0.70)] text-sm">
                    PnL:{" "}
                    <span className="text-white font-bold text-sm">{acc.pnl}</span>
                </p>
            </div>
            <AnimateHeight duration={400} height={clicked ? "auto" : 0}>
                <div className="mt-4 flex flex-col gap-4">
                    <p className="text-[rgba(255,255,255,0.70)] text-sm mt-2">API Keys</p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="number"
                            className="bg-[#0F1419] text-white py-2 px-4 placeholder:text-[rgba(255,255,255,0.40)] text-sm rounded-[4px]"
                            placeholder="Public key"
                        />
                        <input
                            type="number"
                            className="bg-[#0F1419] text-white py-2 px-4 placeholder:text-[rgba(255,255,255,0.40)] text-sm rounded-[4px]"
                            placeholder="Private key"
                        />
                        <div className="flex justify-end">
                            <button className="bg-[rgba(0,255,76,0.80)] text-white cursor-pointer text-xs font-bold py-[5px] px-2.5 rounded-[4px] w-20 h-[26px]">
                                Connect
                            </button>
                        </div>
                    </div>

                    <div className="mt-1.5">
                        <div className="flex gap-[19px] justify-between">
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3 items-center">
                                    <label className="relative cursor-pointer flex">
                                        <input
                                            type="checkbox"
                                            className="cursor-pointer peer appearance-none h-[22px] w-[22px] shrink-0 rounded-xs border-2 border-[#787b7f] bg-transparent checked:bg-blue-500 checked:border-blue-500"
                                        />
                                        <svg
                                            className="absolute left-1 top-1 h-4 w-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </label>
                                    <p className="text-sm font-bold text-white">MASTER PAIR</p>
                                </div>
                                <select className="select">
                                    <option>BTC/USDT</option>
                                    <option>ETH/USDT</option>
                                    <option>SOL/USDT</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex gap-3 items-center">
                                    <label className="relative cursor-pointer flex">
                                        <input
                                            type="checkbox"
                                            className="cursor-pointer peer appearance-none h-[22px] w-[22px] shrink-0 rounded-xs border-2 border-[#787b7f] bg-transparent checked:bg-blue-500 checked:border-blue-500"
                                        />
                                        <svg
                                            className="absolute left-1 top-1 h-4 w-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </label>
                                    <p className="text-sm font-bold text-white">SUBSCRIBER PAIR</p>
                                </div>
                                <select className="select">
                                    <option>BTC/USDT</option>
                                    <option>ETH/USDT</option>
                                    <option>SOL/USDT</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimateHeight>
        </motion.article>
    );
};

export default Account;
