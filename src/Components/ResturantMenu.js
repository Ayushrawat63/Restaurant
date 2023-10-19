import React, { useState } from 'react';
import MenuData from './MenuAPI';
import '../Components/Main.css'
import MenuCard from '../Components/MenuCard';
import Navbar from './Navbar';

const uniqueList=[
    ...new Set(
        MenuData.map((curElem)=>{
            return curElem.category;
        })
    ),
    "All",
];
console.log(uniqueList);

const RestruantMenu = () => {
    const [menu ,setMenu]=useState(MenuData);
    
    const clickHander =(cat)=>{
        if(cat==="All")
        {
            setMenu(MenuData);
            return;
        }
        const updatedlist = MenuData.filter((curElem)=>{
            return curElem.category===cat;
        });
        setMenu(updatedlist);
    };
   
    return (<>
    <Navbar clickHander={clickHander} menuList={uniqueList}/>
    
      <MenuCard data={menu}/>
    </>
    );
}

export default RestruantMenu;