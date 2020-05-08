import React from 'react';
import { PlusIcon, ArrowIcon } from '../../../../svg';

const TopPanel = ({ date }) => <div className="border-b-2 pb-4 mb-4 flex items-center justify-between">
<div className="flex items-center">
  <h2 className="text-xl font-medium">{date}</h2>
  <ArrowIcon className="ml-2 transform -rotate-90"/>
</div>
<div className="flex items-center mr-2 ">
  <span className="mr-2 opacity-75">Добавить</span>
  <button className="border-white bg-gray-400 cursor-pointer w-7 h-7 flex items-center justify-center focus:outline-none rounded-full">
    <PlusIcon />
  </button>
</div>
</div>

export default TopPanel;