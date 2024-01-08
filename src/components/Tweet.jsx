import '../CSS/Tweet.css';
import {useState} from "react";

function Tweet({tweetId, content, likeCount, createdAt, onEdit}){
    const [isEditing, setIsEditing]= useState(false)
    return (
        <div className="tweet-wrapper">
            <div className="tweet-edit-wrapper">
                <div className="tweet-content">
                    { (isEditing) ? (<input value={content} onChange={(e)=>{
                        onEdit({
                            id:tweetId,
                            content:e.target.value,
                            likeCount: likeCount,
                            createdAt: createdAt
                        })
                    }}
                    />
                    ): content }

                </div>
                <div className="edit-tweet">
                    <button onClick={()=>setIsEditing(!isEditing)}>
                        {(isEditing) ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>
            <div className={"like-createdAt-wrapper"}>
            <div className="like">
                {likeCount} Likes
            </div>
                <div className="created-at">
                    <b>Tweet at</b> {createdAt}
                </div>
            </div>
        </div>
    )
}

export default Tweet;