const Navbar =({clickHander,menuList})=>{
    return(
        <>
         <nav className='navbar'>
        <div className='btn-group'>
            {menuList.map((val)=>{
                return(
                   <button
                     className='btn-group__item'
                     onClick={()=>clickHander(val)}>
                     {val}
                     </button>
                );
            })}
        </div>
     </nav>
        </>
    )
}


export default Navbar;