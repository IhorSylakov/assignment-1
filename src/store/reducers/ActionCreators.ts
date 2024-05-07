import { AppDispatch } from '../store';
import {postSlice} from './PostSlice';
import { IPost } from '../../models/IPost';
import { IUser } from '../../models/IUser';

export const registerUser = (credentials: IUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const res = await response.json();
    const token = res.token;
    dispatch(postSlice.actions.setToken(token))
  } catch (error) {
    console.log(error)
  }
}

export const fetchPosts = (token: string) => async (dispatch: AppDispatch) => {
  const url = 'http://localhost:3001/posts';
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }
  try {
    dispatch(postSlice.actions.postsFetching());
    const response = await fetch(url, options);
    const res = await response.json();
    const posts = res.posts;

    const filteredByUser = posts
      .map((item: IPost) => item.from_name)
      .filter((item: string, index: number, array: string[]) => array.indexOf(item) === index)
      .sort((a: string, b: string) => (a > b) ? 1 : -1);

    const usersPosts = filteredByUser.map((item: string) => {
      const count = posts.filter((post: {from_name: string}) => post.from_name === item).length;
      const {from_name, from_id} = posts.find((post: {from_name: string}) => post.from_name === item);
      const user = {
        from_name,
        from_id,
        posts_count: count,
      }
      return user
    })
    dispatch(postSlice.actions.postsFetchingSuccess(posts))
    dispatch(postSlice.actions.usersFetchingSuccess(usersPosts))
  } catch (error) {
    dispatch(postSlice.actions.postsFetchingError('something went wrong'))
  }
}
