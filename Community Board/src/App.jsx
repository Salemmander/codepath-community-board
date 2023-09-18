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
                    image='src/images/BullDaddy.jpeg'
                    name='Bull Daddy'
                    cuisine='Chinese'
                    link='https://www.bulldaddynoodle.com/'
                />
                <Restaurant
                    image='src/images/WokStar.jpeg'
                    name='Wok Star'
                    cuisine='Chinese'
                    link='https://wokstarchinese.com/'
                />
                <Restaurant
                    image='src/images/Cris&John.jpeg'
                    name='Cris & John'
                    cuisine='Vietnamese'
                    link='https://www.crisandjohn.com/'
                />
                <Restaurant
                    image='src/images/WabiHouse.jpeg'
                    name='Wabi House'
                    cuisine='Japanese'
                    link='https://www.wabihousetx.com/'
                />
            </div>
        </div>
    );
}

export default App;
