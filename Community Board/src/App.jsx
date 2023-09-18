import "./App.css";
import Restaurant from "./components/Restaurant";

function App() {
    return (
        <div>
            <h1 className='title'>Dallas Restaurants</h1>
            <div className='container'>
                <Restaurant
                    image='src/images/HokiPoki.jpeg'
                    name='Hoki Poki'
                    cuisine='Hawaiian'
                    link='https://www.orderhokipoki.com/'
                />
                <Restaurant
                    image='src/images/WuWeiDin.jpeg'
                    name='Wu Wei Din'
                    cuisine='Chinese'
                    link='http://www.wuweidinchinesecuisine.com/'
                />
                <Restaurant
                    image='src/images/ZaapKitchen.jpeg'
                    name='Zaap Kitchen'
                    cuisine='Thai'
                    link='https://www.zaapkitchen.com/'
                />
                <Restaurant
                    image='src/images/HalalShack.jpeg'
                    name='Halal Shack'
                    cuisine='Middle Eastern'
                    link='https://www.thehalalshack.com/'
                />
                <Restaurant
                    image='src/images/BigDash.jpeg'
                    name='Big Dash'
                    cuisine='Dessert'
                    link='https://bigdash.com/'
                />
                <Restaurant
                    image='src/images/TerryBlacks.jpeg'
                    name='Terry Blacks'
                    cuisine='BBQ'
                    link='https://terryblacksbbq.com/'
                />
                <Restaurant
                    image='https://www.fbgcdn.com/pictures/3fa18f3e-0eea-4f16-8352-1cf92ddca41b.jpg'
                    name='Hoki Poki'
                    cuisine='Hawaiian'
                    link='https://www.orderhokipoki.com/'
                />
                <Restaurant
                    image='https://www.fbgcdn.com/pictures/3fa18f3e-0eea-4f16-8352-1cf92ddca41b.jpg'
                    name='Hoki Poki'
                    cuisine='Hawaiian'
                    link='https://www.orderhokipoki.com/'
                />
                <Restaurant
                    image='https://www.fbgcdn.com/pictures/3fa18f3e-0eea-4f16-8352-1cf92ddca41b.jpg'
                    name='Hoki Poki'
                    cuisine='Hawaiian'
                    link='https://www.orderhokipoki.com/'
                />
                <Restaurant
                    image='https://www.fbgcdn.com/pictures/3fa18f3e-0eea-4f16-8352-1cf92ddca41b.jpg'
                    name='Hoki Poki'
                    cuisine='Hawaiian'
                    link='https://www.orderhokipoki.com/'
                />
            </div>
        </div>
    );
}

export default App;
