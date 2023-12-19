import { useLoaderData } from "react-router-dom";

const Home = () => {
    const tSharts = useLoaderData()
    console.log(tSharts)
    return (
        <div>
            <h3>This is home folder</h3>
        </div>
    );
};

export default Home;