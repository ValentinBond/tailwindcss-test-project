import React from 'react';
import { SettingsIcon, HelpIcon } from '../../../svg'

const AccountInfo = () => {
    return (
        <div className="bg-gray-300 flex justify-between items-center px-6 py-5">
            <div className="flex items-center text-base">
                <img className="h-10 w-10 rounded-full mr-4" src="https://download.seaicons.com/download/i84592/custom-icon-design/flatastic-4/custom-icon-design-flatastic-4-user-green.ico" alt="account"/>
                <div>
                    <p>Сергей Василенко</p>
                    <p>Newage Systems</p>
                </div>
            </div>
            <div className='flex flex-col justify-between h-12'>
                <SettingsIcon />
                <HelpIcon />
            </div>
        </div>
    )
};

export default AccountInfo;