module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vueGallery/'
        : '/',
    outputDir:'docs'
};