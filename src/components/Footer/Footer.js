import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex justify-content-between footer-info">
                <div className="d-flex">
                    <div className="footer-text">Copyright &copy; 2021</div>
                    <div className="footer-text">HodlInfo.com</div>
                    <div className="footer-text">Developed By <span style={{color: '#3DC6C1'}}>QuadBTech</span></div>
                </div>
                <div className="footer-text">Support</div>
            </div>
            <div className="download-btn-box">
                <button onClick={() => alert('Download our app!')}>Add HodlInfo to home screen</button>
            </div>
        </div>
    );
};

export default Footer;