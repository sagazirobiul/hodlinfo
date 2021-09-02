import React from 'react';
import './Table.css';
import banner1 from '../../images/b1.png';
import banner2 from '../../images/b2.png';
import { tableData } from '../../data/tableData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Table = () => {
    return (
        <section className="tableArea">
            <img className="banner"  src={`${banner1}`} alt="" />
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Platform</th>
                        <th>Last Traded Price</th>
                        <th>Buy / Sell Price</th>
                        <th>Difference</th>
                        <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(({id, img, platform, trade, buy1, buy2, diff, savings}) => {
                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td> <img className="tablePic" src={img} alt="" /> {platform}</td>
                                    <td>₹ {trade}</td>
                                    <td>{`₹ ${buy1} / ₹ ${buy2}`}</td>
                                    <td style={diff < 0 ? {color: '#da5757'}: {color:'#5dc7c2'}}>{diff} %</td>
                                    <td style={diff < 0 ? {color: '#da5757'}: {color:'#5dc7c2'}}> 
                                        {diff < 0 ? <FontAwesomeIcon icon={faCaretDown}/>: <FontAwesomeIcon icon={faCaretUp}/>} ₹ {savings}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <img className="banner" src={`${banner2}`} alt="" />
        </section>
    );
};

export default Table;