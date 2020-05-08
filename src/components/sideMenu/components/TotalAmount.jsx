import React from 'react';
import { totalAmount } from '../__mock__';

const PART_HEIGHT = 21;
const currencyCode = {
    'UAH': '0x000020B4',
    'USD': '0x00000024'
}

const TotalAmount = () => {
    return (
        <div className='divide-y divide-gray flex-col py-3 bg-gray-300 rounded-lg flex'>
           <div className='px-4 relative'>
               <div className="absolute bg-black opacity-50" 
                style={{
                    height: 13 + PART_HEIGHT * (totalAmount.totalParts.length - 1),
                    width: 1,
                    left: 13,
                    top: 30,
                }}
               ></div>
            <p className="text-3xl font-medium leading-8">{totalAmount.total.amount + ' ' + String.fromCharCode(currencyCode[totalAmount.total.currency])}</p>
            {
                totalAmount.totalParts.map((part, index) => {
                    return(
                        <div key={index}>
                            <div className="absolute bg-black opacity-50" style={{
                                width: 10,
                                height: 1,
                                left: 14,
                                top: 42 + PART_HEIGHT * index
                            }}></div>
                            <p  className="ml-3">{part.amount + ' ' + String.fromCharCode(currencyCode[part.currency])}</p>
                        </div>
                    )
                })
            }
           </div>
           <div className='px-4 flex-col flex'>
                {
                   totalAmount.banks.map((bank, index) => {
                        return (
                            <div key={index} className="flex justify-between">
                                <p className="text-xs">{bank.name}</p>
                                <p className="text-xs">{bank.amount + ' ' + String.fromCharCode(currencyCode[bank.currency])}</p>
                            </div>
                        )
                   }) 
                }
           </div>
        </div>
    )
};

export default TotalAmount;