module.exports = (config) => {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'app/app.js',
      'test/*Spec.js',
    ],
    logLevel: config.LOG_DEBUG
  })
}