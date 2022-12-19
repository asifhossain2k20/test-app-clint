import React from 'react';
import { Link } from 'react-router-dom';

const UserInformation = ({info}) => {

    const handleUpdateSubmit=()=>{

    }
    return (
            <tr>
                    <td>
                    <div className="flex items-center space-x-3">
                        <div>
                        <div className="font-bold">{info.name}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                        {
                            info.selectedItem.map(item=><li>{item.label}</li>)
                        }
                    </td>
                    <td>
                        {
                            info.checkMark ? <h1 className='text-green-600 font-semibold'>Agree</h1> : <h1 className='text-red-600 font-semibold'>Disagree</h1>
                        }
                    </td>
                    <th>
                    <Link to={`/selectedItems/${info._id}`}>
                        <button className="btn btn-ghost btn-xs">Update</button>
                    </Link>
                    </th>
                </tr>
    );
};

export default UserInformation;