import './styles.css';

import PostCard from '../postCard';

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {
      posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))
    }
    </div>
  );
}
