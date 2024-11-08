import React from 'react';
import './Station.css'

const Station = ({name, check, changeCheck}) => {
    return (
        <tr>
            <th className={"station-name"}>
                {name}
            </th>
            <th className={"station-check"} onClick={changeCheck}>
                <input type="checkbox" checked={check}/>
            </th>
            <th className={"station-status"}>

            </th>
        </tr>
    );
};

export default Station;