import { useEffect, useState } from 'react';

import './styles.css';

import Posts from '../../components/posts';
import { loadPosts } from '../../utils/load-posts';
import Button from '../../components/button';
import TextInput from '../../components/textInput';

/* eslint-disable */

export default function Home () {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(20); // um setState que não fow ultilizar pode deixar assim somente com estado inicial
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    handleLoadsPosts();
  }, []);

  async function handleLoadsPosts () {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }

  function handleLoadMorePosts() {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    setPosts(posts);
    setPage(nextPage);
  }

  function handleChange(event) {
    const { value } = event.target;
    setSearchValue(value);
  }

  const noMorePosts = page + postsPerPage >= allPosts.length;
  const filterPosts = searchValue ? posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase())) : posts; // filtrando os posts que estão de acordo com a palavras que tá no searchValue

  if (!posts.length) return;

  return (
    <section className="container">
      <div className="search-container">
       {searchValue
        && (
          <h1>
            Searh value: {searchValue}
          </h1>
        )}
       <TextInput handleChange={handleChange} searchValue={searchValue} />
      </div>
      {filterPosts.length ? <Posts posts={filterPosts} /> : <p>Não existe posts</p>}
      <div className="button-container">
       {!searchValue && <Button text="Load more posts" disabled={noMorePosts} onClick={handleLoadMorePosts} />}
      </div>
    </section>
  );
}
