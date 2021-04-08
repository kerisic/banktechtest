module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'spec/*.js'
    ],
    browsers: ['Chrome'],

    reporters: ['progress', 'coverage'],
    preprocessors: {
      'src/*.js': ['coverage']
    },
    singleRun: true
  });
};