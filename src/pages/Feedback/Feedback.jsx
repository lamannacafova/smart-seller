import React from "react";
import FeedbackCard from "./FeedbackCard";
import image from "../../assets/img/image.png";
const Feedback = () => {
  return (
    <>
      <section className="feedback">
        <div className="feedback_page">
          <div className="row">
            <div className="col-4">
              <div className="buttons">
                <button className="yes">Oxunan</button>
                <button className="no">Oxunmayan</button>
              </div>
              <div className="card_scroll">
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
                <FeedbackCard />
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="chat">
                  <div className="image">
                    <img src={image} alt="" />
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
                <div className="name">
                  <p>
                    Ad: <span>John Deep</span>
                  </p>
                </div>
                <div className="email">
                  <p>
                    Email: <span>John.Deep@gmail.com</span>
                  </p>
                </div>
                <div className="content">
                  <p>
                    Qısa məzmun: <span>Sayta daxil ola bilmirəm</span>
                  </p>
                </div>
                <div className="messages">
                  <p>
                    Mesaj:{" "}
                    <span>
                      {" "}
                      Sayta daxil ola bilmirəm, Nə etməliyəmki sayta daxil ola
                      bilim mənə bu barədə kömək edin SmartSale şirkəti
                    </span>{" "}
                  </p>
                </div>
              </div>
              <div></div>
              <div className="message_part">
                <input type="text" className="message_input" />
                <div className="between">
                  <div className="write">
                    <div className="smile">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <rect
                          x="1.66675"
                          y="1.6665"
                          width="16.6667"
                          height="16.6667"
                          rx="8.33333"
                          fill="#60697A"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.13992 12.1287C4.88463 11.7457 4.98811 11.2283 5.37105 10.9731C5.75399 10.7178 6.27138 10.8212 6.52668 11.2042C7.49087 12.6505 8.62858 13.3331 9.99997 13.3331C11.3714 13.3331 12.5091 12.6505 13.4733 11.2042C13.7286 10.8212 14.2459 10.7178 14.6289 10.9731C15.0118 11.2283 15.1153 11.7457 14.86 12.1287C13.602 14.0157 11.9619 14.9998 9.99997 14.9998C8.03802 14.9998 6.39795 14.0157 5.13992 12.1287Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="file">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.23788 13.3631L8.05937 12.1846L10.1218 10.1222C10.6099 9.63408 10.6099 8.84262 10.1218 8.35447C9.63361 7.86631 8.84215 7.86631 8.354 8.35447L5.40772 11.3007C4.26869 12.4398 4.26869 14.2865 5.40772 15.4255C6.54675 16.5646 8.39348 16.5646 9.53251 15.4255L15.4251 9.53298C16.5641 8.39395 16.5641 6.54722 15.4251 5.40819L15.1304 5.11356C14.1541 4.13725 12.5712 4.13725 11.5949 5.11356L10.4164 3.93505C12.0436 2.30786 14.6818 2.30786 16.3089 3.93505L16.6036 4.22968C18.3935 6.01958 18.3935 8.92158 16.6036 10.7115L10.711 16.604C8.92112 18.3939 6.01911 18.3939 4.22921 16.604C2.43931 14.8141 2.43931 11.9121 4.22921 10.1222L7.17549 7.17595C8.31452 6.03692 10.1612 6.03692 11.3003 7.17595C12.4393 8.31498 12.4393 10.1617 11.3003 11.3007L9.23788 13.3631Z"
                          fill="#60697A"
                        />
                      </svg>
                    </div>
                    <div className="message">
                      <p>Type message...</p>
                    </div>
                  </div>
                  <div className="voice">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.20831 5.83317C5.20831 3.18681 7.35362 1.0415 9.99998 1.0415C12.6463 1.0415 14.7916 3.18681 14.7916 5.83317V9.1665C14.7916 11.8129 12.6463 13.9582 9.99998 13.9582C7.35362 13.9582 5.20831 11.8129 5.20831 9.1665V5.83317ZM3.95831 9.1665C3.95831 8.82133 3.67849 8.5415 3.33331 8.5415C2.98814 8.5415 2.70831 8.82133 2.70831 9.1665C2.70831 11.4562 3.75944 13.2865 5.18365 14.5327C6.41409 15.6093 7.94641 16.2716 9.37498 16.4242V18.3332C9.37498 18.6783 9.6548 18.9582 9.99998 18.9582C10.3452 18.9582 10.625 18.6783 10.625 18.3332V16.4242C12.0536 16.2716 13.5859 15.6093 14.8163 14.5327C16.2405 13.2865 17.2916 11.4562 17.2916 9.1665C17.2916 8.82133 17.0118 8.5415 16.6666 8.5415C16.3215 8.5415 16.0416 8.82133 16.0416 9.1665C16.0416 11.0435 15.188 12.5465 13.9932 13.592C12.7863 14.648 11.2629 15.2082 9.99998 15.2082C8.73711 15.2082 7.21362 14.648 6.00678 13.592C4.81194 12.5465 3.95831 11.0435 3.95831 9.1665Z"
                        fill="#60697A"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
