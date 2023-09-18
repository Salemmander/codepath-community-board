import "../App.css";
const Restaurant = (props) => {
    return (
        <div className='restaurantCard'>
            <img src={props.image} alt='oops no image' />
            <h4>{props.name}</h4>
            <h6>{props.cuisine}</h6>
            <a href={props.link} target='_blank'>
                <button className='viewMenu'>View Menu</button>
            </a>
        </div>
    );
};

export default Restaurant;
