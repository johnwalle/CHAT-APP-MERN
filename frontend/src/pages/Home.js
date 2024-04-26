import React from 'react';
import SideBar from '../components.js/SideBarComp.js/SideBar';
import MessagesContainer from '../components.js/MessageComponents/MessagesContainer';

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3">
                <SideBar />
            </div>
            <div className="w-full md:w-3/4">
                <MessagesContainer />
            </div>
        </div>
    );
};

export default Home;