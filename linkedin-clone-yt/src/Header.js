import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="http://flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>
                <div className="header__search">
                    {/*  SearchIcon */}
                    <SearchIcon></SearchIcon>
                    <input type="text"/>
                </div>

            </div>

            <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My NetWork"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notification"/>
            <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5103AQHigS3LdKGiiw/profile-displayphoto-shrink_100_100/0/1571575742887?e=1617840000&v=beta&t=1KIDMdh-qj39-5l6iRqtswOU1oVkvGDKb37AcGcKnfU" title="Me"/>
            </div> 
        </div>
    )
}

export default Header
