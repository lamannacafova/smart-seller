import React from 'react'
import image from "../../assets/img/image.png"
const FeedbackCard = () => {
  return (
    <>
       
       <div className="card">
            <div className="chat">
            <div className="image">
             <img src={image} alt=""/>
             </div>
             <div className="about">
                 <div className="data">
                 <h5>John Deep</h5>
                 <p className="date">05:11 PM</p>
                 </div>
                 <p>How do I change my account...</p>
             </div>
            </div>
        </div>
    </>
  )
}

export default FeedbackCard
