import React from 'react';
import { ArrowIcon, CalendarIcon } from '../../../svg';

const DatePicker = () => {
    return (
        <div className="flex mr-4 mb-4">
            <button className="w-11 h-11 bg-transparent hover:bg-gray text-black font-semibold hover:text-white py-2 px-4 border border-gray hover:border-transparent focus:outline-none rounded-lg">
                <ArrowIcon/>
            </button>
            <div className="flex justify-around items-center w-22 h-11 rounded-lg border border-gray mx-2 text-base font-medium">
                <CalendarIcon />
                <span>Июль</span>
            </div>
            <button className="w-11 h-11 bg-transparent hover:bg-gray text-black font-semibold hover:text-white py-2 px-4 border border-gray hover:border-transparent focus:outline-none rounded-lg">
                <ArrowIcon className="transform rotate-180"/>
            </button>
        </div>
    )
};

export default DatePicker;