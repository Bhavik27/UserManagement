exports.config = {
    user: 'admin', //enter your username
    password: 'sa@12345', //enter your password
    database: 'UserMangementDB', //created DB name
    server: 'localhost',
    port: 1433,
    options: {
        encrypt: true,
        trustedConnection: true,
        enableArithAbort: true,
    }
};

