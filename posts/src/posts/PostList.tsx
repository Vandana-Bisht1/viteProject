import React, { useEffect, useState } from 'react';
import { fetchData } from '../../../utils/api';
import Parcel from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';
import './PostList.css';

interface PostList {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<PostList[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const ParcelComponent = (): ParcelConfig<object>=>{
    return import('../../../chat-parcel/src/main') as unknown as ParcelConfig<object>;
  }

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchData("https://dummyjson.com/posts");
        setPosts(data.posts);
      } catch (err) {
        setError('Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="main-container">
      <h1>POSTS</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
      <Parcel
        config={ParcelComponent()}
        initiator={"Posts Page"}
        mountParcel={mountRootParcel}
        wrapWith="div"
        wrapStyle={{ position: "absolute", bottom: 60, right: 60 }}
      />
    </div>
  );
};

export default PostList;