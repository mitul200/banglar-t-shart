import { createContext, useState } from "react";
import Aunty from "../Auntiy/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const GoldRingContext = createContext("Gold");
export const MoneyBank = createContext(0);

const Grandpa = () => {
  const ring = "daimond";

  const [money,setMoney] = useState(0)
  return (
    <div className="grandpa">
        <p>Has money :{money}</p>
      <h4> welcome to Grandpa house</h4>
      <MoneyBank.Provider value={[money, setMoney]} >
        <GoldRingContext.Provider value="Gold ring">
          <section className="flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </GoldRingContext.Provider>
      </MoneyBank.Provider>
    </div>
  );
};

export default Grandpa;
