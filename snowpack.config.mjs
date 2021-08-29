export default {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  mount: {
     /* ... */
     // directory name: 'build directory'
     public: '/',
     src: '/dist',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-webpack'],

};