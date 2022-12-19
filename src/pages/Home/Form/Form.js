import React, { useEffect, useState } from 'react';
import Sectors from '../Sectors/Sectors';

const Form = () => {
    const [checked,setChecked]=useState(false)  
    const [loading,setLoading]=useState(false)  
    
    const handleCheck=()=>{
        !checked ? setChecked(true) : setChecked(false)
    }

    const [values,setValues]=useState([])
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const selectedItem=values;
        const checkMark=checked;
        const info={
            name:name,
            selectedItem:selectedItem,
            checkMark:checkMark
        }
        console.log(info);
        fetch('https://test-app-server.vercel.app/selectedItems',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                setLoading(true)
                alert('Data Added Successfully')
                event.target.reset();
            }
        })
    }

    return (
        <div>
            <div className="hero">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required name='name' type="text" placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="from-control">
                            <Sectors values={values} setValues={setValues}></Sectors>
                        </div>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text">Remember me</span>
                                <input name='checkBox' onClick={handleCheck} type="checkbox"  className="checkbox checkbox-info" />
                            </label>
                        </div>
                        <div className="form-control mt-6">
                             <button required={loading} className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Form;