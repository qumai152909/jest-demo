module.exports = {
  transform: {
    '\\.js$': ['babel-jest', { configFile: './babel.config.js' }]
  },
  roots: ['./']
};
