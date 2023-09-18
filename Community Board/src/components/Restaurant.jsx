import "../App.css";
const Restaurant = (props) => {
    return (
        <div className='restaurantCard'>
            <div className='cardImage'>
                <img src={props.image} alt='oops no image' />
            </div>
            <h2>{props.name}</h2>
            <h4>{props.cuisine}</h4>
            <a href={props.link} target='_blank'>
                <button className='viewMenu'>View Menu</button>
            </a>
        </div>
    );
};

export default Restaurant;
