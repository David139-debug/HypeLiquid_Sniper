import graph from "./img/tradeview chart.png";
import lgGraph from "./img/tradeview chart sm.png"
import MidUp from "./MidUp";

interface Prop {
  sidebar: boolean;
}

const Graph = ({ sidebar }: Prop) => {
  return (
    <>
      <MidUp />
      <article className="p-3 flex items-center justify-center">
        {sidebar ? <img src={lgGraph} className="size w-full" alt="graph" /> : <img src={graph} className="size w-full" alt="lgGraph" />}
      </article>
    </>
  )
}

export default Graph