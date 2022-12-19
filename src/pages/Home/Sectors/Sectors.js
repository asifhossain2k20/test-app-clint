import { Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Sectors = ({values,setValues}) => {
    
  const [sectors, setSectors] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('https://test-app-server.vercel.app/all-select-option')
    .then(res=>res.json())
    .then(data=>{
        setSectors(data)
    })
  }, [])

  const selectProps = {
    mode: 'multiple',
    style: { width: '100%', minWidth: '200px' },
    values,
    options: sectors,
    onChange: (newValue) => {
      setValues(newValue);
    },
    placeholder: 'Select Items that you are involved in...',
    maxTagCount: 'responsive',
  };
    return <Select required labelInValue loading={loading} showArrow {...selectProps} />
};

export default Sectors;