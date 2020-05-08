import React from 'react';
import { Logo } from '../../svg';
import TotalAmount from './components/TotalAmount';
import NavMenu from './components/NavMenu';
import AccountInfo from './components/AccountInfo';

const SideMenu = () => {
    return (
        <div className="bg-gray-100 w-78 h-mcontent min-w-78 pt-6 rounded-lg overflow-hidden">
            <div className="flex justify-between px-8">
                <h2 className="text-2xl font-medium leading-7">Все деньги</h2>
                <Logo/>
            </div>
            <div className="px-8 mt-4">
                <TotalAmount />
            </div>
            <div className="px-8">
                <NavMenu />
            </div>
            <div >
                <AccountInfo />
            </div>
        </div>
    );
};

export default SideMenu;
