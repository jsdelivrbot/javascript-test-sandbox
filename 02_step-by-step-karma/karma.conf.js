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
    logLevel: config.LOG_DEBUG
  })
}