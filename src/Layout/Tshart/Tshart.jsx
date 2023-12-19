import './Tshart.css'
// eslint-disable-next-line react/prop-types
const Tshart = ({tShart,handelToClick}) => {
    // console.log(tShart)
    // eslint-disable-next-line react/prop-types
    const {picture,name,price} = tShart
    return (
        <div className="t-shart">
           <img src={picture} alt="" />
           <h3>{name}</h3>
           <p>price : {price}</p>
           <button onClick={()=>handelToClick(tShart)}>ADD</button>
        </div>
    );
};

export default Tshart;