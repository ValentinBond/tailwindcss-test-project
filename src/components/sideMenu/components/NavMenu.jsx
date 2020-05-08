import React from 'react';
import { 
    OperationIcon,
    ReportsIcon,
    ContragentsIcon,
    WorkIcon,
    AccountIcon,
    PersonIcon
} from '../../../svg'
import { NavLink } from "react-router-dom";

const NavMenu = () => {
    const links = [
        {
            name: 'Операции',
            icon: OperationIcon,
            link: '/operation'
        },
        {
            name: 'Отчеты',
            icon: ReportsIcon,
            link: '/reports'
        },
        {
            name: 'Контрагенты',
            icon: ContragentsIcon,
            link: '/contragents'
        },
        {
            name: 'Проекты',
            icon: WorkIcon,
            link: '/works'
        },
        {
            name: 'Статьи расходов',
            icon: AccountIcon,
            link: '/account'
        },
        {
            name: 'Сотрудники',
            icon: PersonIcon,
            link: '/person'
        }
    ]

    return (
        <>
            <ul className='mt-6 mb-4'>
                {
                    links.map(link => {
                        const { icon: IconConponent, name, link: to }  = link;
                        return (
                            <li key={name} >
                               <NavLink 
                                className="flex items-center p-3 cursor-pointer hover:bg-gray-300 rounded-lg text-lg" to={to}
                                activeStyle={{ background: '#EEEEEE', fontWeight: 500 }}>
                                {<IconConponent className='mr-2'/>}
                                <span>{name}</span>
                               </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </>
    );
};

export default NavMenu;