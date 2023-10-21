import React from 'react'
import image from "../../assets/img/image.png"
import RequestCard from './RequestCard'
const Request = () => {
  return (
    <>
    <section className="request">
     <div className="request_page">
       <div className="row">
         <div className="col-4">
       <div className="card_scroll">
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
           <RequestCard/>
       </div>
         </div>
         <div className="col-8">
         <div className="card">
            <div className="chat">
            <div className="image">
             <img src={image} alt=""/>
             </div>
             <div className="about">
                   <h5>John Deep</h5>
                   <p>Welcome to SmartSale e-commerce platform</p>
             </div>
            </div>
        </div>
         <div className="read">
           <div className="days">
             <p>Today, Jan 30</p>
           </div>
         </div>
         <div className="message_read">
           <div className="ipad">
             <p>iPad Pro 12.9-inch (6th Generation)</p>
           </div>
         </div>
         </div>
       </div>
     </div>
    </section>
    </>
  )
}

export default Request
