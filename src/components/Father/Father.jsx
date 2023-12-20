import Brother from "../Brother/Brother";
import Myself from "../MySelf/Myself";
import Sister from "../Sister/Sister";

const Father = ({ring}) => {
    return (
        <div className="">
            <h4>father</h4>
            <section className="flex">
            <Myself ring={ring}></Myself>
            <Brother></Brother>
            <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;