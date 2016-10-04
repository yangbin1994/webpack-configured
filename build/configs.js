function rootPath() {
    return this.host + ':' + this.port + '/'
}

module.exports = {
    apiServer: {
        host: 'http://localhost',
        port: 3001,
        rootPath: rootPath
    },
    server: {
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