import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, IUserPost, IUser } from '../../models/IPost';

interface PostState {
  token: string;
  posts: IPost[];
  users: IUser[];
  userPosts: IUserPost[];
  isLoading: boolean;
  error: string;
  activeUserId: string;
}

const initialState: PostState = {
  token: localStorage.getItem('token') as string,
  posts: [],
  users: [],
  userPosts: [],
  isLoading: false,
  error: '',
  activeUserId: '',
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postsFetching(state) {
      state.isLoading = true;
    },
    postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload;
    },
    usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
      state.isLoading = false;
      state.error = '';
      state.users = action.payload;
    },
    postsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setActiveUser(state, action: PayloadAction<string>) {
      state.activeUserId = action.payload;
      const filteredPosts: IUserPost[] = [];
      state.posts.find((user: IPost) => {
        if (user.from_id === action.payload) {
          filteredPosts.push({
            'id': user.id,
            'message': user.message,
            'created_time': user.created_time,
          })
        }
        return false
      })
      state.userPosts = filteredPosts;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    }
  }
})

export default postSlice.reducer;
