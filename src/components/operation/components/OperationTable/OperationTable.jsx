import React, { useState } from 'react';
import FilterBlock from './FilterBlock';
import TopPanel from './TopPanel';
import { CopyIcon, VectorIcon, VectorDownIcon } from '../../../../svg';
import { operationsList } from '../../__mock__';

const OperationTable = () => {
    const [openedOperation, setOperation] = useState(1);
    const [input, setInput] = useState('');

    const handleChangeOperation = (id, payment) => {
      setOperation(id);
      setInput(payment)
    };

    return (
     <>
      <FilterBlock />
      {
        operationsList.map((operation, index) => {
          const {date, operations} = operation;

          return (
              <div key={index} className="pb-4 relative">
                <TopPanel date={date} />
                <table className="table-fixed w-full mb-2">
                {
                  operations.map(opt => {
                  const { id, name, account, source, paymentType, paid, payment, amount, negative } = opt;
                  const isOpen = openedOperation === id;
                  return (
                    <tbody onClick={() => handleChangeOperation(id, payment)} className={`${isOpen ? 'shadow-xl z-10 bg-white-300' : '' } cursor-pointer `} key={id}>
                      <tr >
                        <td className="border border-none w-10 py-7 pl-2">
                          {
                            negative ? <div className="w-7 h-7 flex justify-center items-center transform rotate-180 bg-red-200 rounded-lg m-auto"><VectorDownIcon className="transform rotate-180"/></div>
                              : <div className="w-7 h-7 flex justify-center items-center bg-green-200 rounded-lg m-auto"><VectorIcon  /></div>
                          }
                        </td>
                        <td className="border border-none w-64 pl-2">
                          <p>{name}</p>
                          <span className="opacity-50">Со счета: </span><span>{account}</span>
                        </td>
                        <td className="border border-none  pl-2">
                          <p>{source}</p>
                          <p className="opacity-50">{paymentType}</p>
                        </td>
                        <td className="border border-none w-64 pl-2">
                          {isOpen ?   <div className="flex items-center border-b border-b-2 border-teal-500 py-1"><input 
                          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                          type="text" placeholder="Jane Doe" aria-label="Full name"
                          value={input} 
                          onChange={(e) => setInput(e.target.value)}
                        /> </div>: <p>{payment}</p>}
                        </td>
                        <td>
                          {
                            paid
                            ? <div onClick={() => console.log()} className="h-7 w-24 px-2 flex items-center text-green-700 text-xs font-medium justify-center rounded-lg bg-green-200">Оплачено</div>
                            : <div className="h-7 bg-red-200">Не оплачено</div> 
                          }
                          
                        </td>
                        <td>
                          <span className={`${negative ? 'text-red-500': 'text-green-600'} font-medium text-base`}>{amount}</span>
                        </td>
                      </tr>
                    </tbody>
                   )
                  })
                }
                </table>
                <div className="h-1/2 w-full bg-gray-400 mt-6">
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 'calc(50% - 119px)'
                    }}
                  className="mb-2 bg-white px-2 flex items-center">
                    <span className="mr-2">Копировать операцию</span>
                    <button className="border-white bg-gray-400 pointer w-7 h-7 flex items-center justify-center focus:outline-none rounded-full">
                      <CopyIcon />
                    </button>
                  </div>
                </div>
              </div>
          );
        })
      }
     </>
    );
};

export default OperationTable;