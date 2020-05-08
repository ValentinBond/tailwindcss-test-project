import React from 'react';
import DatePicker from './components/DatePicker';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';
import OperationTable from './components/OperationTable/OperationTable'
import { Graphic, PlusIcon, TrashIcon } from '../../svg';

const Operation = () => {
    return (
        <div className="w-full relative">
            <div className="flex flex-wrap">
                <DatePicker />
                <SearchInput />
                <Filter />
            </div>
            <Graphic className="mt-6 mb-7"/>
            <OperationTable />
            <div 
                style={{
                    bottom: 30,
                    left: 30
                }}
            className="h-16 w-16 flex items-center justify-center cursor-pointer absolute b-0 rounded-full mr-4 bg-black">
                <PlusIcon />
            </div>
            <div 
                style={{
                    bottom: 30,
                    right: 260
                }}
            className="h-16 w-16 absolute flex items-center cursor-pointer justify-center b-0 opacity-75 bg-white border border-gray-400 rounded-full mr-4 bg-black">
                <TrashIcon />
            </div>
        </div>
    )
};

export default Operation;