const { createSlice } = require("@reduxjs/toolkit");

const sideBarSlice = createSlice({
  name: "sideBarSlice",
  initialState: {
    sideBarRight: {
        menu: [
            {
                key: 'home',
                icon: 'Home.svg'
            },
            {
                key: 'services',
                icon: 'Services.svg',
            },
            {
                key: 'cv',
                icon: 'cv.svg',
            },
            {
                key: 'portfolio',
                icon: 'Portfolio.svg',
            },
            {
                key: 'blog',
                icon: 'Blog.svg',
            },
            {
                key: 'contact',
                icon: 'Contact.svg',
            }
        ],
        pointer: 'home',
    }
  },
  reducers: {
    setSideBarRightPointer(state, {payload}) {
        state.sideBarRight.pointer = payload;
    }
  },
});

export const { setSideBarRightPointer } = sideBarSlice.actions;
export default sideBarSlice.reducer;
