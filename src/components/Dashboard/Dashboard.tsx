import { useAppSelector } from '../../hooks/redux';
import UserPosts from './components/UserPosts/UserPosts';
import Users from './components/Users/Users';
import './Dashboard.css';

export default function Dashboard() {
  const {userPosts} = useAppSelector(state => state.postReducer);

  return (
    <div className="dashboard">
      <Users />
      {userPosts.length !== 0 ?
        <UserPosts />
        :
        <div className="dashboard__content">no user selected</div>
      }
    </div>
  );
}
