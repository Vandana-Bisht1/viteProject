import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';
import { navigateToUrl } from 'single-spa';
import sharedState from '../../utils/sharedState';
import './Users.css';

interface Users {
    id: number;
    firstName: string;
    username: string;
    email: string;
  }

const Users = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchData("https://dummyjson.com/users");
        setUsers(data.users);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const navigate = (path)=>{
    navigateToUrl(path);
  }
  
  const navigateToUserPost = (path, user)=>{
    sharedState.set('user', user);
    navigateToUrl(path);
  }

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="users-grid">
      {users.map(user => (        
        <div key={user.id} className="user-card">
          <img
            src={`https://robohash.org/${user.id}?set=set5`} 
            alt={user.firstName}
            className="user-avatar"
          />
          <div className="user-details">
            <h2 className="user-name">{user.firstName}</h2>
            <p className="user-username">@{user.username}</p>
            <p className="user-email">{user.email}</p>
          </div>
          <div className="user-buttons">
          <button onClick={()=> navigate(`/user/${user.id}`)}>User Details</button>
          <button onClick={() => navigateToUserPost(`/posts/${user.id}`, user)}>User Posts</button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Users;