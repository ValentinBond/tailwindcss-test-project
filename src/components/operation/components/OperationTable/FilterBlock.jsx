import React, { useState } from 'react';
import { CalendarIcon, ListIcon } from '../../../../svg';

const FilterBlock = () => {
    const [views, setView] = useState([
        {
            type: 'list',
            icon: ListIcon,
            active: true
        },
         {
            type: 'calendar',
            icon: CalendarIcon,
            active: false
        },
    ]);

    const [operations, setOperations] = useState([
        {
            type: 'Все операции',
            active: true
        },
        {
            type: 'Будущие',
            active: false
        },
        {
            type: 'Прошедшие',
            active: false
        },
    ]);

    const handleChangeView = (e, type) => {
        e.preventDefault();
      
        setView(views.map(view => {
            view.active = view.type !== type
            return view;
        }))
    }

    const handleChangeOption = (e, type) => {
        e.preventDefault();

        setOperations(operations.map(operation => {
            operation.active = operation.type === type
            return operation;
        }))
    }

    return (
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
                <span className="mr-2 font-medium opacity-50">Групировать:</span>
                <select className="block w-45 mr-6 font-medium appearance-none focus:outline-none bg-white border border-gray-400 px-4 py-2 pr-8 rounded-lg shadow leading-tight">
                    <option>По дате</option>
                    <option>По проекту</option>
                    <option>По счету</option>
                </select>
                <span className="mr-2 font-medium opacity-50">Вид:</span>
                {
                    views.map((view, index) => {
                        const { icon: Icon, type, active } = view;
                        
                        return (
                            <button
                                key={index}
                                className={`${active ? 'bg-white border border-gray-400' : 'bg-gray'} w-7 h-7 flex mx-1 items-center justify-center rounded-lg focus:outline-none cursor-pointer`}
                                onClick={(e) => handleChangeView(e, type)}>
                                <Icon className={`fill-current ${active ?'text-gray' : 'text-red'}`}/>
                            </button>
                        )
                    })
                }
            </div>
            <div className="mr-4">
                {
                    operations.map((operation, index) => <button
                                key={index}
                                className={`${operation.active ? 'bg-gray': 'border-white border border-gray-400'} font-medium pointer h-8 px-3 mx-1 focus:outline-none rounded-lg`}
                                onClick={(e) => handleChangeOption(e, operation.type)}
                            ><span className={`${operation.active ? '': 'opacity-50'} `}>{operation.type}</span></button>)
                }
            </div>
        </div>
    );
};

export default FilterBlock;