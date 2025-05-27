import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  firstname: string;
  lastname: string;
  age: number;
}

const initialState: UserState = {
  firstname: "Firstname",
  lastname: "Lastname",
  age: 20,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementAge: (state) => {
      state.age += 1;
    },
    setFirstname: (state, action: PayloadAction<string>) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action: PayloadAction<string>) => {
      state.lastname = action.payload;
    },
  },
});

export const { incrementAge, setFirstname, setLastname } = userSlice.actions;
export default userSlice.reducer;
