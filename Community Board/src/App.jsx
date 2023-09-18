import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Restaurant from "./components/Restaurant";

function App() {
    return (
        <div>
            <h1 className='title'>Salem's Favorite Dallas Restaurants</h1>
            <Container fluid>
                <Row sm={1} md={2} xl={4}>
                    <Col>
                        <Restaurant
                            image='src/images/HokiPoki.jpeg'
                            name='Hoki Poki'
                            cuisine='Hawaiian'
                            link='https://www.orderhokipoki.com/'
                        />
                    </Col>
                    <Col>
                        <Restaurant
                            image='src/images/WuWeiDin.jpeg'
                            name='Wu Wei Din'
                            cuisine='Chinese'
                            link='http://www.wuweidinchinesecuisine.com/'
                        />
                    </Col>
                    <Col>
                        <Restaurant
                            image='src/images/ZaapKitchen.jpeg'
                            name='Zaap Kitchen'
                            cuisine='Thai'
                            link='https://www.zaapkitchen.com/'
                        />
                    </Col>
                    <Col>
                        <Restaurant
                            image='src/images/HalalShack.jpeg'
                            name='Halal Shack'
                            cuisine='Middle Eastern'
                            link='https://www.thehalalshack.com/'
                        />
                    </Col>
                </Row>
                <Row sm={1} md={2} xl={4}>
                    <Col>
                        <Restaurant
                            image='https://www.fbgcdn.com/pictures/3fa18f3e-0eea-4f16-8352-1cf92ddca41b.jpg'
                            name='Hoki Poki'
                            cuisine='Hawaiian'
                            link='https://www.orderhokipoki.com/'
                        />
                    </Col>
                    <Col>
                        <Restaurant
                            image='https://www.fbgcdn.com/pictures/3fa18f3e-0eea-4f16-8352-1cf92ddca41b.jpg'
                            name='Hoki Poki'
                            cuisine='Hawaiian'
                            link='https://www.orderhokipoki.com/'
                        />
                    </Col>
                    <Col>
                        <Restaurant
                            image='https://www.fbgcdn.com/pictures/3fa18f3e-0eea-4f16-8352-1cf92ddca41b.jpg'
                            name='Hoki Poki'
                            cuisine='Hawaiian'
                            link='https://www.orderhokipoki.com/'
                        />
                    </Col>
                    <Col>
                        <Restaurant
                            image='https://www.fbgcdn.com/pictures/3fa18f3e-0eea-4f16-8352-1cf92ddca41b.jpg'
                            name='Hoki Poki'
                            cuisine='Hawaiian'
                            link='https://www.orderhokipoki.com/'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
