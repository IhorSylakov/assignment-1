import { useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import SearchBox from '../SearchBox/SearchBox';
import './UserPosts.css';

export default function UserPosts() {
  const [searchField, setSearchField] = useState<string>('');
  const {userPosts} = useAppSelector(state => state.postReducer);
  const [sortDirection, setSortDirection] = useState<number>(1);

  const created = (created:number) => {
    const date = new Date(created).toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    const time = new Date(created).toLocaleTimeString('en-us', { hour12: false });
    return `${date} ${time}`
  }

  const sortedPosts = [...userPosts].sort((a,b) => 
    (a.created_time < b.created_time) ? sortDirection : (-1 * sortDirection)
  );

  const filteredPosts = sortedPosts.filter(post => (
    post.message.toLowerCase().includes(searchField.toLocaleLowerCase())
  ));

  const handleSortPosts = (direction: string) => {
    setSortDirection(direction === '<' ? 1 : -1)
  }

  return(
    <div className="content">
      <div className="search-posts">
        <SearchBox
          placeholder="search post"
          handleChange={(e) => setSearchField(e.target.value)}
        />

        <div className="search-posts__buttons">
          <button
            title="from newest to oldest"
            onClick={() => handleSortPosts('<')}
            className="search-posts__button"
          >
            <span>
              {'<'}
            </span>
          </button>
          <button
            title="from oldest to newest"
            onClick={() => handleSortPosts('>')}
            className="search-posts__button"
          >
            <span>
              {'>'}
            </span>
          </button>
        </div>
      </div>

      <ul className="post-list">
        {filteredPosts.map(post => (
          <li
            key={post.id}
            className="post-list__item"
          >
            <div className="time">{created(post.created_time)}</div>
            <div>{post.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
