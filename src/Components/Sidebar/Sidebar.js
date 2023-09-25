import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
// import Global from '../../Config/Global';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarBanner'>
            <img 
                className='sideBannerImg'
                // src={Global.SIDEBAR_LOGO}
                    src="https://hindubabynames.info/wp-content/themes/hbn_download/download/sports-ipl/ipl-logo.png"
                alt='sidebar-logo'
            />
        </div>
      <div className='sidebarButtons'>
        <Link to="/teams" className='TeamsButton'> Teams </Link>
        <Link to="/players" className='TeamButton'>Players</Link>
      </div>
    </div>
  )
}
