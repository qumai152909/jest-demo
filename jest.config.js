module.exports = {
  moduleFileExtensions: [ // 设置Jest要执行测试文件的扩展名
    'js',
    'jsx',
    'md',
  ],
  transform: { // 配置转译器(transformer)
    '\\.js$': ['babel-jest', { configFile: './.babelrc' }]
  },
};
