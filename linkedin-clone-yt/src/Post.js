import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
function Post({name, description, message, photoUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={photoUrl}/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption color="gray" Icon={ThumbUpAltIcon} title="Like"/>
                <InputOption color="gray" Icon={ChatIcon} title="Comment"/>
                <InputOption color="gray" Icon={ShareIcon} title="Share"/>
                <InputOption color="gray" Icon={SendIcon} title="Send"/>
            </div>
        </div>
    )
}

export default Post
