import React, {useState, useEffect} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import {db} from './firebase';
import './Feed.css';
import firebase from 'firebase';
//console.log(firebase.firestore.fieldValue.serverTimestamp())
console.log(firebase.firestore.FieldValue.serverTimestamp())
function Feed() {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot=> (
            setPosts(snapshot.docs.map(doc=> (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])
    
    const sendPost =e=> {
        e.preventDefault();
        db.collection('posts').add({
            name: "Nikhil Roy",
            description: "this is test",
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
        
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon></CreateIcon>
                    <form>
                        <input value={input} onChange={e=> setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9"></InputOption>
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E"></InputOption>
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD"></InputOption>
                    <InputOption title="Write article" Icon={CalendarViewDayIcon} color="#7FC15E"></InputOption>
                </div>
            </div>
            {posts.length > 0 ? posts.map(({id, data: {name, description, message, photoUrl}})=> (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}/>
            )) : <h2>Loading...</h2>}
        </div>
    )
}

export default Feed
