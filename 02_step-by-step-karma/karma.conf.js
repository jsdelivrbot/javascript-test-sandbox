module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'app/app.js',
      'test/*Spec.js',
    ],
    browsers: ['Chrome'],
    logLevel: config.LOG_DEBUG
  })
}