import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Restaurant from "./components/Restaurant";

function App() {
    return (
        <div>
            <h1 className='title'>Place actual name later</h1>
            <Restaurant
                image='https://www.fbgcdn.com/pictures/3fa18f3e-0eea-4f16-8352-1cf92ddca41b.jpg'
                name='Hoki Poki'
                cuisine='Hawaiian'
                link='https://www.orderhokipoki.com/'
            />
        </div>
    );
}

export default App;
