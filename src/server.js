import express from 'express';

const PORT = 3000;

const app = express();

// ----- Middlewares
app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});

app.use(express.json());

// ----- RegExp Middlewares

// Middleware will be applied to paths starting with /products and having an optional /category
app.use(/^\/products(\/category)?$/, (req, res, next) => {
  console.log('Middleware for products or category');
  next();
});

// Middleware will be applied to paths which have UUID at the end
app.use(
  /^\/user\/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})$/,
  (req, res, next) => {
    console.log('Middleware for route with UUID');
    next();
  },
);

// ----- Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Hello, World!',
  });
});

app.get('/products', (req, res) => {
  res.send('Show all products');
});

app.get('/products/category', (req, res) => {
  res.send('Show all products by category');
});

app.get('/user/123e4567-e89b-12d3-a456-426614174000', (req, res) => {
  res.send('User profile');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
