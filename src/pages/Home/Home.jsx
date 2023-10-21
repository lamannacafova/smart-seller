import React from "react";
import Order from "./Order";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home_page">
          <div className="blue_card">
            <div className="box_one">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16.3999 16.2934C17.1114 15.6776 17.682 14.9159 18.0731 14.0601C18.4642 13.2043 18.6666 12.2744 18.6666 11.3334C18.6666 9.5653 17.9642 7.86961 16.714 6.61937C15.4637 5.36913 13.768 4.66675 11.9999 4.66675C10.2318 4.66675 8.53612 5.36913 7.28587 6.61937C6.03563 7.86961 5.33325 9.5653 5.33325 11.3334C5.33324 12.2744 5.53565 13.2043 5.92675 14.0601C6.31785 14.9159 6.88848 15.6776 7.59992 16.2934C5.73344 17.1386 4.14987 18.5035 3.03856 20.2248C1.92725 21.9462 1.33521 23.9512 1.33325 26.0001C1.33325 26.3537 1.47373 26.6928 1.72378 26.9429C1.97382 27.1929 2.31296 27.3334 2.66659 27.3334C3.02021 27.3334 3.35935 27.1929 3.60939 26.9429C3.85944 26.6928 3.99992 26.3537 3.99992 26.0001C3.99992 23.8783 4.84277 21.8435 6.34306 20.3432C7.84336 18.8429 9.87819 18.0001 11.9999 18.0001C14.1217 18.0001 16.1565 18.8429 17.6568 20.3432C19.1571 21.8435 19.9999 23.8783 19.9999 26.0001C19.9999 26.3537 20.1404 26.6928 20.3904 26.9429C20.6405 27.1929 20.9796 27.3334 21.3333 27.3334C21.6869 27.3334 22.026 27.1929 22.2761 26.9429C22.5261 26.6928 22.6666 26.3537 22.6666 26.0001C22.6646 23.9512 22.0726 21.9462 20.9613 20.2248C19.85 18.5035 18.2664 17.1386 16.3999 16.2934ZM11.9999 15.3334C11.2088 15.3334 10.4354 15.0988 9.77764 14.6593C9.11984 14.2198 8.60715 13.5951 8.3044 12.8641C8.00165 12.1332 7.92244 11.329 8.07678 10.5531C8.23112 9.77713 8.61208 9.0644 9.17149 8.50499C9.7309 7.94558 10.4436 7.56462 11.2196 7.41027C11.9955 7.25593 12.7997 7.33515 13.5307 7.6379C14.2616 7.94065 14.8863 8.45334 15.3258 9.11113C15.7653 9.76893 15.9999 10.5423 15.9999 11.3334C15.9999 12.3943 15.5785 13.4117 14.8283 14.1618C14.0782 14.912 13.0608 15.3334 11.9999 15.3334ZM24.9866 15.7601C25.8399 14.7992 26.3973 13.6122 26.5917 12.3419C26.786 11.0716 26.6092 9.77218 26.0823 8.60008C25.5554 7.42798 24.701 6.43314 23.6219 5.73531C22.5428 5.03748 21.285 4.6664 19.9999 4.66675C19.6463 4.66675 19.3072 4.80722 19.0571 5.05727C18.8071 5.30732 18.6666 5.64646 18.6666 6.00008C18.6666 6.3537 18.8071 6.69284 19.0571 6.94289C19.3072 7.19294 19.6463 7.33341 19.9999 7.33341C21.0608 7.33341 22.0782 7.75484 22.8283 8.50499C23.5785 9.25513 23.9999 10.2725 23.9999 11.3334C23.998 12.0337 23.8123 12.7213 23.4613 13.3273C23.1104 13.9333 22.6064 14.4366 21.9999 14.7867C21.8022 14.9008 21.6371 15.0636 21.5204 15.2597C21.4037 15.4558 21.3392 15.6786 21.3333 15.9067C21.3277 16.1331 21.3798 16.3571 21.4848 16.5578C21.5898 16.7584 21.7441 16.929 21.9333 17.0534L22.4533 17.4001L22.6266 17.4934C24.2338 18.2557 25.5897 19.4614 26.5346 20.9685C27.4794 22.4756 27.974 24.2213 27.9599 26.0001C27.9599 26.3537 28.1004 26.6928 28.3504 26.9429C28.6005 27.1929 28.9396 27.3334 29.2933 27.3334C29.6469 27.3334 29.986 27.1929 30.2361 26.9429C30.4861 26.6928 30.6266 26.3537 30.6266 26.0001C30.6375 23.954 30.125 21.9391 29.1379 20.1468C28.1507 18.3546 26.7217 16.8445 24.9866 15.7601Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="about">
              <h4>Vebsayta daxil olan istifadəçilərin sayı:</h4>
              <p>
                12,468 vip olan istifadəçilər - 72,000 adi istifadəçilər ---
                Ümumi 84,468{" "}
              </p>
            </div>
          </div>
          <div className="orange_card">
            <div className="box_one">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M24.4 11.4533L25.6133 10.2533C25.8644 10.0022 26.0054 9.66165 26.0054 9.30658C26.0054 8.95152 25.8644 8.61099 25.6133 8.35992C25.3622 8.10885 25.0217 7.9678 24.6666 7.9678C24.3116 7.9678 23.971 8.10885 23.72 8.35992L22.52 9.57325C20.6514 8.12772 18.3557 7.34343 15.9933 7.34343C13.6308 7.34343 11.3352 8.12772 9.46662 9.57325L8.25329 8.34659C8.00045 8.09551 7.65823 7.95517 7.30191 7.95642C6.94559 7.95767 6.60436 8.10041 6.35329 8.35325C6.10222 8.60609 5.96187 8.94831 5.96312 9.30463C5.96437 9.66095 6.10711 10.0022 6.35995 10.2533L7.58662 11.4666C6.12397 13.33 5.33034 15.631 5.33329 17.9999C5.32893 19.7005 5.73124 21.3774 6.50665 22.8909C7.28207 24.4044 8.40811 25.7106 9.79088 26.7005C11.1736 27.6904 12.773 28.3353 14.4557 28.5815C16.1384 28.8277 17.8555 28.668 19.4639 28.1158C21.0723 27.5635 22.5253 26.6347 23.7019 25.4068C24.8784 24.1789 25.7442 22.6875 26.2273 21.057C26.7103 19.4264 26.7965 17.704 26.4786 16.0334C26.1607 14.3628 25.448 12.7925 24.4 11.4533ZM16 25.9999C14.4177 25.9999 12.871 25.5307 11.5554 24.6517C10.2398 23.7726 9.21442 22.5232 8.60892 21.0614C8.00342 19.5996 7.84499 17.991 8.15367 16.4392C8.46235 14.8873 9.22428 13.4619 10.3431 12.3431C11.4619 11.2242 12.8874 10.4623 14.4392 10.1536C15.9911 9.84495 17.5996 10.0034 19.0614 10.6089C20.5232 11.2144 21.7727 12.2398 22.6517 13.5554C23.5308 14.8709 24 16.4177 24 17.9999C24 20.1216 23.1571 22.1565 21.6568 23.6568C20.1565 25.1571 18.1217 25.9999 16 25.9999ZM13.3333 5.99992H18.6666C19.0202 5.99992 19.3594 5.85944 19.6094 5.60939C19.8595 5.35935 20 5.02021 20 4.66659C20 4.31296 19.8595 3.97382 19.6094 3.72378C19.3594 3.47373 19.0202 3.33325 18.6666 3.33325H13.3333C12.9797 3.33325 12.6405 3.47373 12.3905 3.72378C12.1404 3.97382 12 4.31296 12 4.66659C12 5.02021 12.1404 5.35935 12.3905 5.60939C12.6405 5.85944 12.9797 5.99992 13.3333 5.99992ZM17.3333 13.9999C17.3333 13.6463 17.1928 13.3072 16.9428 13.0571C16.6927 12.8071 16.3536 12.6666 16 12.6666C15.6463 12.6666 15.3072 12.8071 15.0571 13.0571C14.8071 13.3072 14.6666 13.6463 14.6666 13.9999V16.5199C14.3647 16.79 14.1519 17.1453 14.0564 17.5389C13.9608 17.9325 13.9871 18.3459 14.1316 18.7243C14.2761 19.1027 14.5322 19.4282 14.8658 19.6579C15.1994 19.8876 15.5949 20.0106 16 20.0106C16.405 20.0106 16.8005 19.8876 17.1341 19.6579C17.4678 19.4282 17.7238 19.1027 17.8683 18.7243C18.0128 18.3459 18.0391 17.9325 17.9435 17.5389C17.848 17.1453 17.6352 16.79 17.3333 16.5199V13.9999Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="about">
              <h4>Vebsayta daxil olan istifadəçilərin sayı:</h4>
              <p>
                12,468 vip olan istifadəçilər - 72,000 adi istifadəçilər ---
                Ümumi 84,468{" "}
              </p>
            </div>
          </div>
          <div className="cards">
            <div className="violet_card">
              <div className="box_one">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M24.4 11.4533L25.6133 10.2533C25.8644 10.0022 26.0054 9.66165 26.0054 9.30658C26.0054 8.95152 25.8644 8.61099 25.6133 8.35992C25.3622 8.10885 25.0217 7.9678 24.6666 7.9678C24.3116 7.9678 23.971 8.10885 23.72 8.35992L22.52 9.57325C20.6514 8.12772 18.3557 7.34343 15.9933 7.34343C13.6308 7.34343 11.3352 8.12772 9.46662 9.57325L8.25329 8.34659C8.00045 8.09551 7.65823 7.95517 7.30191 7.95642C6.94559 7.95767 6.60436 8.10041 6.35329 8.35325C6.10222 8.60609 5.96187 8.94831 5.96312 9.30463C5.96437 9.66095 6.10711 10.0022 6.35995 10.2533L7.58662 11.4666C6.12397 13.33 5.33034 15.631 5.33329 17.9999C5.32893 19.7005 5.73124 21.3774 6.50665 22.8909C7.28207 24.4044 8.40811 25.7106 9.79088 26.7005C11.1736 27.6904 12.773 28.3353 14.4557 28.5815C16.1384 28.8277 17.8555 28.668 19.4639 28.1158C21.0723 27.5635 22.5253 26.6347 23.7019 25.4068C24.8784 24.1789 25.7442 22.6875 26.2273 21.057C26.7103 19.4264 26.7965 17.704 26.4786 16.0334C26.1607 14.3628 25.448 12.7925 24.4 11.4533ZM16 25.9999C14.4177 25.9999 12.871 25.5307 11.5554 24.6517C10.2398 23.7726 9.21442 22.5232 8.60892 21.0614C8.00342 19.5996 7.84499 17.991 8.15367 16.4392C8.46235 14.8873 9.22428 13.4619 10.3431 12.3431C11.4619 11.2242 12.8874 10.4623 14.4392 10.1536C15.9911 9.84495 17.5996 10.0034 19.0614 10.6089C20.5232 11.2144 21.7727 12.2398 22.6517 13.5554C23.5308 14.8709 24 16.4177 24 17.9999C24 20.1216 23.1571 22.1565 21.6568 23.6568C20.1565 25.1571 18.1217 25.9999 16 25.9999ZM13.3333 5.99992H18.6666C19.0202 5.99992 19.3594 5.85944 19.6094 5.60939C19.8595 5.35935 20 5.02021 20 4.66659C20 4.31296 19.8595 3.97382 19.6094 3.72378C19.3594 3.47373 19.0202 3.33325 18.6666 3.33325H13.3333C12.9797 3.33325 12.6405 3.47373 12.3905 3.72378C12.1404 3.97382 12 4.31296 12 4.66659C12 5.02021 12.1404 5.35935 12.3905 5.60939C12.6405 5.85944 12.9797 5.99992 13.3333 5.99992ZM17.3333 13.9999C17.3333 13.6463 17.1928 13.3072 16.9428 13.0571C16.6927 12.8071 16.3536 12.6666 16 12.6666C15.6463 12.6666 15.3072 12.8071 15.0571 13.0571C14.8071 13.3072 14.6666 13.6463 14.6666 13.9999V16.5199C14.3647 16.79 14.1519 17.1453 14.0564 17.5389C13.9608 17.9325 13.9871 18.3459 14.1316 18.7243C14.2761 19.1027 14.5322 19.4282 14.8658 19.6579C15.1994 19.8876 15.5949 20.0106 16 20.0106C16.405 20.0106 16.8005 19.8876 17.1341 19.6579C17.4678 19.4282 17.7238 19.1027 17.8683 18.7243C18.0128 18.3459 18.0391 17.9325 17.9435 17.5389C17.848 17.1453 17.6352 16.79 17.3333 16.5199V13.9999Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="about">
                <h4>Saytın görüntlənmə sayı:</h4>
                <p>148, 960. 249 </p>
              </div>
            </div>
            <div className="green_card">
              <div className="box_one">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M24.4 11.4533L25.6133 10.2533C25.8644 10.0022 26.0054 9.66165 26.0054 9.30658C26.0054 8.95152 25.8644 8.61099 25.6133 8.35992C25.3622 8.10885 25.0217 7.9678 24.6666 7.9678C24.3116 7.9678 23.971 8.10885 23.72 8.35992L22.52 9.57325C20.6514 8.12772 18.3557 7.34343 15.9933 7.34343C13.6308 7.34343 11.3352 8.12772 9.46662 9.57325L8.25329 8.34659C8.00045 8.09551 7.65823 7.95517 7.30191 7.95642C6.94559 7.95767 6.60436 8.10041 6.35329 8.35325C6.10222 8.60609 5.96187 8.94831 5.96312 9.30463C5.96437 9.66095 6.10711 10.0022 6.35995 10.2533L7.58662 11.4666C6.12397 13.33 5.33034 15.631 5.33329 17.9999C5.32893 19.7005 5.73124 21.3774 6.50665 22.8909C7.28207 24.4044 8.40811 25.7106 9.79088 26.7005C11.1736 27.6904 12.773 28.3353 14.4557 28.5815C16.1384 28.8277 17.8555 28.668 19.4639 28.1158C21.0723 27.5635 22.5253 26.6347 23.7019 25.4068C24.8784 24.1789 25.7442 22.6875 26.2273 21.057C26.7103 19.4264 26.7965 17.704 26.4786 16.0334C26.1607 14.3628 25.448 12.7925 24.4 11.4533ZM16 25.9999C14.4177 25.9999 12.871 25.5307 11.5554 24.6517C10.2398 23.7726 9.21442 22.5232 8.60892 21.0614C8.00342 19.5996 7.84499 17.991 8.15367 16.4392C8.46235 14.8873 9.22428 13.4619 10.3431 12.3431C11.4619 11.2242 12.8874 10.4623 14.4392 10.1536C15.9911 9.84495 17.5996 10.0034 19.0614 10.6089C20.5232 11.2144 21.7727 12.2398 22.6517 13.5554C23.5308 14.8709 24 16.4177 24 17.9999C24 20.1216 23.1571 22.1565 21.6568 23.6568C20.1565 25.1571 18.1217 25.9999 16 25.9999ZM13.3333 5.99992H18.6666C19.0202 5.99992 19.3594 5.85944 19.6094 5.60939C19.8595 5.35935 20 5.02021 20 4.66659C20 4.31296 19.8595 3.97382 19.6094 3.72378C19.3594 3.47373 19.0202 3.33325 18.6666 3.33325H13.3333C12.9797 3.33325 12.6405 3.47373 12.3905 3.72378C12.1404 3.97382 12 4.31296 12 4.66659C12 5.02021 12.1404 5.35935 12.3905 5.60939C12.6405 5.85944 12.9797 5.99992 13.3333 5.99992ZM17.3333 13.9999C17.3333 13.6463 17.1928 13.3072 16.9428 13.0571C16.6927 12.8071 16.3536 12.6666 16 12.6666C15.6463 12.6666 15.3072 12.8071 15.0571 13.0571C14.8071 13.3072 14.6666 13.6463 14.6666 13.9999V16.5199C14.3647 16.79 14.1519 17.1453 14.0564 17.5389C13.9608 17.9325 13.9871 18.3459 14.1316 18.7243C14.2761 19.1027 14.5322 19.4282 14.8658 19.6579C15.1994 19.8876 15.5949 20.0106 16 20.0106C16.405 20.0106 16.8005 19.8876 17.1341 19.6579C17.4678 19.4282 17.7238 19.1027 17.8683 18.7243C18.0128 18.3459 18.0391 17.9325 17.9435 17.5389C17.848 17.1453 17.6352 16.79 17.3333 16.5199V13.9999Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="about">
                <h4>Vip satış sayı və vip satışından gələn pul:</h4>
                <p>1440 satış - 24,000 AZN</p>
              </div>
            </div>
          </div>
          <Order />
        </div>
      </section>
    </>
  );
};

export default Home;
