import http from 'http';

const server = http.createServer((request, response) => {
  const { url } = request;

  if (url === '/') {
    response.write('Home page');
  } else if (url === '/contacts') {
    response.write('Contacts page');
  } else {
    response.write('Not found');
  }
  response.end();
});

server.listen(3000, () => {
  console.log('Server started');
});
