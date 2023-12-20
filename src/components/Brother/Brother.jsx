import { useContext } from "react";
import { GoldRingContext } from "../Grandpa/Grandpa";

const Brother = () => {
    const ring = useContext(GoldRingContext)
    return (
        <div>
            <h4>brother :{ring}</h4>
        </div>
    );
};

export default Brother;