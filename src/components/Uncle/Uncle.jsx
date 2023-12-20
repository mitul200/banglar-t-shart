import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyBank } from "../Grandpa/Grandpa";

const Uncle = () => {
    
    const [money , setMoney] = useContext(MoneyBank)
    return (
        <div>
            <h4>uncle</h4>
            <p>uncle money :{money}</p>
            <button onClick={()=>setMoney(money + 1000)}>Send 1000tk</button>
            <section>
                <Cousin>nabil</Cousin>
                <Cousin>sabil</Cousin>
            </section>
        </div>
    );
};

export default Uncle;