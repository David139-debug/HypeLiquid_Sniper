import { useState } from "react"
import AccountsWrapper from "./components/AccountsManagment/AccountsWrapper"
import Graph from "./components/Graph/Graph"
import Navbar from "./components/Navbar/Navbar"
import Tabs from "./components/Tabs/Tabs"
import TradingControls, { type Buttons } from "./components/TradingControls/TradingControls"

function App() {

  const [type, setType] = useState<Buttons>("Limit");
  const [accNum, setAccNum] = useState<number>(10);

  return (  
    <section className="w-full min-h-screen">
      <Navbar accNum={accNum} />
      <div className="flex w-full">
        <div className="w-[350px] lg:w-[420px] shrink-0">
          <AccountsWrapper setAccNum={setAccNum} />
        </div>

        <div className="flex flex-col flex-grow min-w-0 bg-[#0a0e13] mx-4">
          <Graph />
          <Tabs />
        </div>

        <div className="w-[350px] lg:w-[420px] shrink-0">
          <TradingControls type={type} setType={setType} />
        </div>
      </div>
    </section>
    
  )
}

export default App
