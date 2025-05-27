import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store/store";
import { incrementAge, setFirstname, setLastname } from "./UserSlice";

interface UserState {
  firstname: string;
  lastname: string;
  age: number;
}

const User: React.FC = () => {
  const { firstname, lastname, age } = useSelector<RootState, UserState>((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>User Info</h2>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Age: {age}</p>
      <button onClick={() => dispatch(incrementAge())}>Increment Age</button>
      <div>
        <input
          type="text"
          value={firstname}
          onChange={(e) => dispatch(setFirstname(e.target.value))}
          placeholder="Firstname"
        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => dispatch(setLastname(e.target.value))}
          placeholder="Lastname"
        />
      </div>
    </div>
  );
};

export default User;
