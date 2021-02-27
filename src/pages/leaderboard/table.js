import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import englishToPersianNum from '../../helpers/englishToPersianNum'
import Hexagon from "../../components/hexagon";
import leaderBoardIcon from '../../static/images/leader-board-icon.svg'
import {getLeaderBoardList} from '../../api/list'

function Table() {

    const [rows, setRows] = React.useState([]);
    const columns = [
        {
        dataField: 'status',
        text: '',
        style: {
            width: '20px'
        },
    }, {
        dataField: 'rank',
        text: 'رتبه',
        style: {
            width: '20px'
        },
    },{
        dataField: 'title',
        text: 'شکارچی'
    },{
        dataField: 'score',
        text: 'امتیاز'
    }, {
        dataField: 'reportNum',
        text: 'شمار گزارش‌ها'
    }
    ];

    React.useEffect(() => {

        getLeaderBoardList()
            .then(() => {
                // TODO: fillTableRow should call here and get res as params
            })

        let mockData = [{
            active: true,
            rank: 1,
            userImg: 'http://placekitten.com/240/240',
            score: 1246,
            reportNum: 20,
            name: 'alimadadi'
        },{
            active: false,
            rank: 2,
            userImg: 'http://placekitten.com/240/240',
            score: 1246,
            reportNum: 20,
            name: 'raminfp'
        }];

        fillTableRow(mockData);

    }, []);

    let fillTableRow = (data) => {
        let tableRows = [];
        let style = {};
        data.map((e, index) => {

            if(!e.active) {style = {filter: 'invert(.6)'}}

            tableRows.push({
                id: index,
                status: <img style={style} src={leaderBoardIcon} key={index} />,
                rank: englishToPersianNum(e.rank),
                title: <div className='name-in-table'>
                    <div className='octagon-table-container'><Hexagon Background='http://csshexagon.com/img/meow.jpg' /></div>
                    <span className='text-black'>{e.name}</span>
                </div>,
                score: englishToPersianNum(e.score),
                reportNum: englishToPersianNum(e.reportNum)
            })

        });

        setRows(tableRows)
    }

    return(
        <BootstrapTable keyField='id' data={ rows } columns={ columns } />
    )
}

export default Table