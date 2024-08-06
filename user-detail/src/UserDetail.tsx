import React, { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';
import { useParams, useNavigate } from 'react-router-dom';
import './UserDetail.css';

interface UserDetail {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    country: string;
  };
  company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      country: string;
    };
  };
}

const UserDetail: React.FC<UserDetailProps> = () => {
  const [user, setUser] = useState<UserDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams<{id}>();
  const navigate = useNavigate();


  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchData(`https://dummyjson.com/users/${params.id}`);
        setUser(data);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);


  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="user-detail">
      <button className="back-button" onClick={handleBackClick}>
        &lt; Back
      </button>
      {user && (
        <div className="user-detail-content">
          <img
            src={`https://robohash.org/${user.id}?set=set5`} 
            alt={user.firstName}
            className="user-detail-avatar"
          />
          <div className="user-detail-info">
            <h1>{user.firstName} {user.lastName}</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state} {user.address.postalCode}</p>
            <p><strong>Company:</strong> {user.company.name} - {user.company.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
