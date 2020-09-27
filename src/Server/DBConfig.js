exports.config = {
    user: '', //enter your username
    password: '', //enter your password
    database: 'UserMangementDB', //created DB name
    server:'localhost',
    port:1433,
    options: {
        encrypt: true,
        trustedConnection: true,
        enableArithAbort: true,
    }
};

