import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div>
            <h3>aunty</h3>
            <section className="flex">
                <Cousin>Mitul</Cousin>
                <Cousin>sakib</Cousin>
            </section>
        </div>
    );
};

export default Aunty;