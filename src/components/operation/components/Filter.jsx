import React from 'react';
import { FilterIcon, ArrowIcon, StarIcon, PlusIcon } from '../../../svg';

const filtredContact = [
    {
        img: 'https://download.seaicons.com/download/i84592/custom-icon-design/flatastic-4/custom-icon-design-flatastic-4-user-green.ico'
    },
    {
        img: 'https://download.seaicons.com/download/i84592/custom-icon-design/flatastic-4/custom-icon-design-flatastic-4-user-green.ico'
    }
];


const Filter = () => {
    return (
        <div className="h-11 w-96 p-px bg-gray-200 rounded-lg flex items-center">
            <button className="flex pointer justify-between items-center bg-white w-30 h-full hover:bg-gray-100 focus:outline-none mr-2 text-black font-semibold px-3 border border-gray-400 rounded-lg">
               <FilterIcon />
               <span>Фильтр</span>
               <ArrowIcon className="transform -rotate-90"/>
            </button>
            {
                filtredContact.map((contact, index) => {
                    return (
                        <div key={index} className="mx-1 pointer">
                            <div className="flex absolute justify-center items-center bg-white h-3 w-3 rounded-full">
                                <StarIcon />
                            </div>
                            <img className="h-7 w-7 rounded-full bg-black" src={contact.img} alt="contact"/>
                        </div>
                    )
                })
            }
            <button className="h-8 w-8 ml-1 bg-white-200 flex justify-center items-center rounded-full focus:outline-none"><PlusIcon/></button>
        </div>
    );
}

export default Filter;