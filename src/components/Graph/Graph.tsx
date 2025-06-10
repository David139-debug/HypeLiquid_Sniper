import graph from "./img/tradeview chart.png";
import MidUp, { type Prop } from "./MidUp";

const Graph = ({ type }: Prop) => {
  return (
    <>
      <MidUp type={type} />
      <article className="p-3 flex items-center justify-center">
        <img src={graph} className="size w-full" alt="graph" />
      </article>
    </>
  )
}

export default Graph