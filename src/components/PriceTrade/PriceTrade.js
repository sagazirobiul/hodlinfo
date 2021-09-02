import React from 'react';
import './PriceTrade.css'

const PriceTrade = () => {
    return (
        <div className="trade d-flex justify-content-around align-items-center">
            <div className="text-center">
                <div className="common-header">0.24 %</div>
                <span className="sub-text">5 Mins</span>
            </div>
            <div className="text-center">
                <div className="common-header">0.62 %</div>
                <span className="sub-text">1 Hour</span>
            </div>
            <di className="text-center"v>
                <span className="sub-text mid-top">Best Price to Trade</span>
                <h4 className="midHeading">₹ 36,60,827</h4>
                <span className="sub-text mid-bottom">Average BTC/INR net price including commission</span>
            </di>
            <div className="text-center">
                <div className="common-header">3 %</div>
                <span className="sub-text">1 Day</span>
            </div>
            <div className="text-center">
                <div className="common-header">5.29 %</div>
                <span className="sub-text">7 Days</span>
            </div>
        </div>
    );
};

export default PriceTrade;