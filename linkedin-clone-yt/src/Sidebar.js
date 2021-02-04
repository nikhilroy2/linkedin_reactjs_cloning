import React from 'react'
import { Avatar } from '@material-ui/core';
import './Sidebar.css'
function Sidebar() {
    const recentItem = () => {
        const topic = ['reactjs', 'programming', 'software engineering', 'design', 'developer', 'ui/ux']
        return (
            <>
                {topic && topic.map((v) => <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>{v}</p>
                </div>)}
            </>
        )
    };
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1598349326101-fc9e68975a52?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJhY2tncm91bmQlMjBsaW5lYXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Nikhil Roy</h2>
                <h4>nikhil...@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem()}
            </div>
        </div>
    )
}

export default Sidebar
