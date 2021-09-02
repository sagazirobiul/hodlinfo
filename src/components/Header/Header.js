import React,{ useState } from 'react';
import { Row, Col, Dropdown, Button} from 'react-bootstrap';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../images/logo.png'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import Switch from "react-switch";


const Header = () => {
    const [checked, setChecked] = useState(false);

    return (
        <section className="header"> 
            <Row className="align-items-center">
                <Col md={4} className="logo-area">
                    <a href="#">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </a>
                    <p className="header-text">Powered By <span style={{color: '#3DC6C1'}}>Finstreet</span></p>
                </Col>
                <Col md={4}>
                    <div className="d-flex justify-content-center">
                        <Dropdown className="dropdown-btn">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">INR</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">INR</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="dropdown-btn">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">BTC</Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#">BTC</Dropdown.Item>
                                <Dropdown.Item href="#">ETH</Dropdown.Item>
                                <Dropdown.Item href="#">USDT</Dropdown.Item>
                                <Dropdown.Item href="#">XRP</Dropdown.Item>
                                <Dropdown.Item href="#">TRX</Dropdown.Item>
                                <Dropdown.Item href="#">DASH</Dropdown.Item>
                                <Dropdown.Item href="#">ZEC</Dropdown.Item>
                                <Dropdown.Item href="#">XEM</Dropdown.Item>
                                <Dropdown.Item href="#">LOST</Dropdown.Item>
                                <Dropdown.Item href="#">WIN</Dropdown.Item>
                                <Dropdown.Item href="#">BTT</Dropdown.Item>
                                <Dropdown.Item href="#">WRX</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="dropdown-btn">
                            <Button variant="secondary">BUY BTC</Button>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="d-flex justify-content-end align-items-center">
                        <div className="time-counter">60</div>
                        <button className="telegramBtn"><FontAwesomeIcon icon={faTelegramPlane}/> Connect Telegram</button>
                        <label>
                            <Switch 
                                onChange={() => setChecked(!checked)}
                                checked={checked}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                onColor="#2E3241"
                                offColor="#eee"
                                onHandleColor="#3DC6C1"
                                offHandleColor="#3DC6C1"
                                />
                        </label>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default Header;