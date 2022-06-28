import { useEffect } from 'react';
import { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import {postSlice} from '../../../../store/reducers/PostSlice';
import { fetchPosts } from '../../../../store/reducers/ActionCreators';
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux';
import './Users.css';

export default function Users() {
  const [searchField, setSearchField] = useState<string>('');
  const dispatch = useAppDispatch();
  const {setActiveUser} = postSlice.actions;
  const {token, users, isLoading, error, activeUserId} = useAppSelector(state => state.postReducer);

  useEffect(() => {
    dispatch(fetchPosts(token))
  }, [])

  const filteredUsers = users.filter(user => (
    user.from_name.toLowerCase().includes(searchField.toLocaleLowerCase())
  ));

  return(
    <div className="sidebar">
      <SearchBox
        placeholder="search user"
        handleChange={(e) => setSearchField(e.target.value)}
      />
      {isLoading && <div>loading...</div>}
      {error && <div>{error}</div>}
      {filteredUsers &&
        <ul className="user-list">
          {filteredUsers.map(user =>
            <li
              key={user.from_id}
              className="user-list__item"
            >
              <button
                className={`user-list__user ${activeUserId === user.from_id ? 'active' : ''}`}
                onClick={() => dispatch(setActiveUser(user.from_id))}
              >
                <span>{user.from_name}</span>
                <span>({user.posts_count})</span>
              </button>
            </li>
          )}
        </ul>
      }
    </div>
  );
}
