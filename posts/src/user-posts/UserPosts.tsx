import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom'; 
import { fetchData } from '../../../utils/api';
import sharedState from '../../../utils/sharedState';
import './UserPosts.css';

interface UserPosts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  firstName: string;
  username: string;
  email: string;
  birthDate: string;
}

const UserPosts: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User[]>([]);
  const [posts, setPosts] = useState<UserPosts[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const retrievedData = sharedState.get('user');
    setUser(retrievedData);
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchData(`https://dummyjson.com/posts/user/${id}`);
        setPosts(data.posts);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="post-list">
      <div className="post-header">
        <button className="back-button" onClick={handleBackClick}>
          &lt; Back
        </button>
        <h1>{user?.firstName}</h1>
        <img
          src={`https://robohash.org/${user.id}?set=set5`}
          alt={user.firstName}
          className="user-avatar"
        />
      </div>

      {posts.length === 0 ? (
        <div className="no-posts-message">No posts available</div>
      ) : (
        posts.map((post) => (
          <div className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>~ {user?.firstName}</small>
          </div>
        ))
      )}
    </div>
  );
};

export default UserPosts;
