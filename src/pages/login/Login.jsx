import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, editUser } from "../../redux/slices/user-slice";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as uuid from "uuid";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allUsers = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramsId = new URLSearchParams(useLocation().search).get("q");

  const [fname, setFname] = useState("");
  const [lname, setlname] = useState("");
  const [gender, setGender] = useState("");
  const email = useRef(null);
  const age = useRef(null);
  const password = useRef(null);

  const updateUserData = () => {
    const updatedUser = allUsers.find((item) => item.id === paramsId);
    if (updatedUser) {
      setFname(updatedUser.fname);
      setlname(updatedUser.lname);
      setGender(updatedUser.gender);
      email.current.value = updatedUser.email;
      age.current.value = updatedUser.age;
      password.current.value = updatedUser.password;
    }
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    const updatedUser = allUsers.find((item) => item.id === paramsId);

    if (updatedUser) {
      const updatedUserData = {
        id: updatedUser.id,
        fname: fname,
        lname: lname,
        gender: gender,
        email: email.current.value,
        age: age.current.value,
        password: password.current.value,
      };
      console.log("Updated User Data:", updatedUserData); 
      dispatch(editUser(updatedUserData));
    } else {
      const newUsers = {
        id: uuid.v4(),
        fname: fname,
        lname: lname,
        gender: gender,
        email: email.current.value,
        age: age.current.value,
        password: password.current.value,
      };
      console.log("New User Data:", newUsers);
      dispatch(createUser(newUsers));
    }

   
    setFname("");
    setlname("");
    setGender("");
    email.current.value = "";
    age.current.value = "";
    password.current.value = "";
    navigate("/users");
  };

  useEffect(() => {
    if (paramsId) {
      updateUserData();
    }
  }, [paramsId, allUsers]);

  return (
    <section className="bg-gradient-to-b from-[#1D2D43] to-[#0C131D] h-screen w-full flex justify-center items-center">
      <div className="w-[500px] bg-[#0C131D] rounded-2xl p-10 shadow-2xl backdrop-blur-md">
        <h2 className="text-white text-4xl text-center font-bold mb-10">
          {paramsId ? "Edit User" : "Create User"}
        </h2>
        <form onSubmit={handleSumbit} className="flex flex-col gap-6">
          <div>
            <label htmlFor="fname" className="text-[#00BFFF] block mb-2">
              First Name
            </label>
            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
              type="text"
              id="fname"
              className="bg-transparent w-full border-b-2 border-[#707070] focus:outline-none focus:border-[#00BFFF] text-white py-2 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="lname" className="text-[#00BFFF] block mb-2">
              Last Name
            </label>
            <input
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              type="text"
              required
              id="lname"
              className="bg-transparent w-full border-b-2 border-[#707070] focus:outline-none focus:border-[#00BFFF] text-white py-2 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-[#00BFFF] block mb-2">
              Email
            </label>
            <input
              ref={email}
              required
              type="email"
              id="email"
              className="bg-transparent w-full border-b-2 border-[#707070] focus:outline-none focus:border-[#00BFFF] text-white py-2 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="age" className="text-[#00BFFF] block mb-2">
              Age
            </label>
            <input
              ref={age}
              type="number"
              required
              id="age"
              className="bg-transparent w-full border-b-2 border-[#707070] focus:outline-none focus:border-[#00BFFF] text-white py-2 transition duration-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-[#00BFFF] block mb-2">
              Password
            </label>
            <input
              ref={password}
              type="password"
              required
              id="password"
              className="bg-transparent w-full border-b-2 border-[#707070] focus:outline-none focus:border-[#00BFFF] text-white py-2 transition duration-300"
            />
          </div>
          <div className="flex items-center gap-6 mb-4">
            <span className="text-[#00BFFF]">Gender:</span>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center text-white">
                <input
                  type="radio"
                  required
                  name="gender"
                  value="male"
                  checked={gender === "male"} 
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio h-5 w-5 text-[#00BFFF] mr-2"
                />
                Male
              </label>
              <label className="inline-flex items-center text-white">
                <input
                  type="radio"
                  name="gender"
                  required
                  value="female"
                  checked={gender === "female"} 
                  onChange={(e) => setGender(e.target.value)}
                  className="form-radio h-5 w-5 text-[#00BFFF] mr-2"
                />
                Female
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#00BFFF] text-[#0C131D] uppercase font-semibold py-3 rounded-lg hover:bg-[#008CBA] transition duration-300"
          >
            {paramsId ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
