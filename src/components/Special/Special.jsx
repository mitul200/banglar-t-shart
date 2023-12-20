import {  useContext } from "react";
import { GoldRingContext } from "../Grandpa/Grandpa";

const Special = ({ring}) => {
    const aungti = useContext(GoldRingContext)
    return (
        <div>
            <h4>Noor </h4>
            <h5>ring:{aungti}</h5>
        </div>
    );
};

export default Special;