export const loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]); // Promisse.all([]) vai reslver vairias promises a ser resolvidas e no retorno vai me retonar um array com essas promisses resolvidas

  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    // unindo 2 arrays com base no seu index:
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
};
