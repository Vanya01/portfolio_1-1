import './App.css';
import React from 'react';
import TopHeader from './Header/Header_top';
import Header_bottom from './Header/Header_bottom';
import Hero from './Hero/Hero';


function App() {

    return (
        <div className={'Main_wrap'}>
            <TopHeader/>
            <Header_bottom/>
            <Hero/>
        </div>
    );
}

export default App;
