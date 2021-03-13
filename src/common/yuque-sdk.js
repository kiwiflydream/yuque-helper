import axios from 'axios';

axios.defaults.baseURL = 'https://www.yuque.com/api/v2';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['User-Agent'] = 'yuque-helper';

async function createDoc(article) {
  handlerToken(article.token);
  return await axios.post('/repos/' + article.repo + '/docs', {
    title: article.title,
    slug: article.slug,
    public: 1,
    body: article.content,
  });
}

async function readDoc(article) {
  handlerToken(article.token);
  return await axios.get('/repos/' + article.repo + '/docs/' + article.slug);
}

async function getUser(token) {
  handlerToken(token);
  return await axios.get('/user');
}

async function findDocs(repoAndToken) {
  handlerToken(repoAndToken.token);
  return await axios.get(`/repos/${repoAndToken.repo}/docs`);
}

function handlerToken(token) {
  axios.defaults.headers.common['X-Auth-Token'] = token;
}

export { createDoc, getUser, readDoc, findDocs };
