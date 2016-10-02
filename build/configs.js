function rootPath() {
    return this.host + ':' + this.port + '/'
}

module.exports = {
    server: {
        host: 'http://localhost',
        port: 3001,
        rootPath: rootPath
    },
    dev: {
        host: 'http://localhost',
        port: 8080,
        rootPath: rootPath
    },
    alias: {
        'components': '../../components'
    },
    vendors: [
        'react',
        'react-dom'
    ]
};