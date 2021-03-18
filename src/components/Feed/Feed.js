import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import StoryReel from './StoryReel/StoryReel';
import db from './../../firebase'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    })
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    
    <Post profilePic={''} username="devesh" image="https://cdn.gamer-network.net/2019/articles/2019-11-09-13-03/rdr2-pc-1573304582849.jpg/EG11/thumbnail/1920x1075/format/jpg/quality/80" profilePic="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"/>

    </div>
  );
}

export default Feed;
