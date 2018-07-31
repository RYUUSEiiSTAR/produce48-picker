import React from 'react';

import MainIcon from './../components/MainIcon';
import MiniIcon from './../components/MiniIcon';

export default function Result(props) {
    let posCount = 1;
    let girls = props.girls;
    let top3 = [];
    let top12 = [];
    let all = [];

    for (let i = 0; i < girls.length; i++) {
        let count = 0;
        for (let j = 0; j < girls[i].length; j++) {
            if (top3.length < 3) {
                // let width = 100;
                // if (i === 0) {
                //     width = width/girls[0].length;
                // } else {
                //     let widthCount = girls[0].length;
                //     while (widthCount < 3) {

                //     }
                // }

                top3.push(<MainIcon key={girls[i][j].name} girl={girls[i][j]} rank={posCount} />);
                count++;
            } else if (top3.length + top12.length < 12) {
                top12.push(<MainIcon key={girls[i][j].name} girl={girls[i][j]} rank={posCount} />);
                count++;
            } else {
                all.push(
                    <div className='flex all-girl' key={girls[i][j].name}>
                        <MiniIcon girl={girls[i][j]} rank={posCount} />
                        <div className='ranking'>{`${posCount}. `}</div>
                        <div className='desc'>
                            <p>{girls[i][j].name}</p>
                            <p>{girls[i][j].company}</p>
                        </div>
                    </div>
                );
                count++;
            }
        }
        posCount += count;
    }

    return(
        <div className='results'>
            <div className='flex top3'>{top3}</div>
            <br />
            <div className='flex top12'>{top12}</div>
            <br />
            <div className='flex all'>{all}</div>
        </div>
    );
}
