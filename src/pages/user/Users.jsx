import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UsersCart from "./Users-cart";

const Users = () => {
  const [users, setUsers] = useState([]);
  const reduxUsers = useSelector((state) => state.users.value);

  useEffect(() => {
    setUsers(reduxUsers);
  }, [reduxUsers]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[60vh]">
      <div className="container">
        {!users.length ? (
          <div className="text-4xl text-green-400 font-semibold text-center py-10">
            Not found
          </div>
        ) : (
          <UsersCart data={users} />
        )}
      </div>
    </div>
  );
};

export default Users;
