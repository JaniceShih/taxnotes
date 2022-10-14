import React from 'react'

const NavBar = () => {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
  <>
    <div className='top-nav_topNav'> 
      <a className="header_HeaderMenu" href="https://github.com/JaniceShih/taxnotes.git" target="_target">GitHub</a>
    </div>
    <div className='main-nav_mainNav'> 
      <a href='/'>
        <span className='main-nav_logtax'>tax</span><span className='main-nav_lognotes'>notes</span>
      </a>
    </div>
    <nav className='user-nav_userNav'> 
      <div className="user-nav_date">Today is {date} </div>
    </nav>
  </>    
  )
}

export default NavBar;
