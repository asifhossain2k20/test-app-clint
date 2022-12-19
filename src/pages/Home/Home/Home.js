import React from 'react';
import Form from '../Form/Form';
import Header from '../Header/Header';
import Information from '../Information/Information';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Form></Form>
            <Information></Information>
        </div>
    );
};

export default Home;