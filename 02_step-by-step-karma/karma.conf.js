module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'app/app.js',
      'test/*Spec.ts',
    ],
    preprocessors: {
      'test/*Spec.ts': ['typescript'],
    },
    browsers: ['Chrome'],
    reporters: ['mocha'],
    logLevel: config.LOG_DEBUG
  })
}