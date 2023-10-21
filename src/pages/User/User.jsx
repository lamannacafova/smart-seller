import React from "react";
import UserCard from "./UserCard";

const User = () => {
  return (
    <>
      <section className="user">
        <div className="title">
          <h2>Users</h2>
        </div>
        <div className="user_page">
          <div className="buttons">
            <button className="yes">Vip olan</button>
            <button className="no">Vip olmayan</button>
          </div>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
          <UserCard/>
        </div>
      </section>
    </>
  );
};

export default User;
