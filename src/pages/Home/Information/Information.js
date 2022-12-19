import React, { useEffect, useState } from 'react';
import UserInformation from './UserInformation';

const Information = () => {
    const [infos,setInfos]=useState([]);
    useEffect(()=>{
        fetch('https://test-app-server.vercel.app/selectedItems')
        .then(res=>res.json())
        .then(data=>{
            setInfos(data);
        })
    },[infos])
    return (
        <div className="overflow-x-auto w-full px-5">
            <table className="table w-full">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Items Selected</th>
                    <th>Terms and Condition</th>
                    <th>Update Information</th>
                </tr>
                </thead>
                <tbody>
                {
                    infos.map(info=><UserInformation
                        key={info._id}
                        info={info}
                    ></UserInformation>)
                }
                </tbody>
            </table>
            </div>
    );
};

export default Information;