import React from "react";
import Hexagon from "../../components/hexagon";
import img from "../../static/images/cat.jpeg";
import Table from './table'
import './index.scss'
import leaderBoardIcon from '../../static/images/leader-board-icon.svg'

function LeaderBoard() {
    return (
        <div className='leaderboard-container'>
            {/* ---------- header --------------*/}
            <div>
                <h1 className='title'>برترین‌ها</h1>
            </div>
            <div className='sub-header'>
                <div className='pull'>
                    <p>با شکارچیان برتر در بازه‌ی زمانی دلخواهتون آشنا بشید.</p>
                </div>
                <div>
                    <ul>
                        <li>مهر-آبان ۱۳۹۹</li>
                        <li className='active'>آذر-دی ۱۳۹۹</li>
                        <li>بهمن-اسفند ۱۳۹۹</li>
                        <li>همیشه</li>
                    </ul>
                </div>
            </div>

            {/* ----------- image container ---------- */}
            <div className='img-container'>
                <div className={'pre-firstHex'}>
                    <img src={leaderBoardIcon} />
                    <p className='text-black'>raminfp</p>
                </div>
               <div className={'firstHex'}>
                   <Hexagon Background={img} />
               </div>
                <div className={'secondHex'}>
                    <img src={leaderBoardIcon} />
                    <p className='text-black mt-0'>alimadadi</p>
                    <Hexagon Background={img} className={'test'}/>
                </div>
                <div className={'thirdHex'}>
                    <Hexagon Background={img} />
                </div>
                <div className={'post-thirdHex'}>
                    <img src={leaderBoardIcon} />
                    <p className='text-black'>Ar.T</p>
                </div>
            </div>

            {/* ----------- table ---------- */}
            <Table />
        </div>
    );
}

export default LeaderBoard