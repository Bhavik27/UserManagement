var sql = require("mssql");
const { config } = require("./DBConfig");

function QueryFunction(query, res) {
    return new Promise((resolve, reject) => {
        const pool = new sql.ConnectionPool(config)
            .connect()
            .then(pool => {
                console.log('connected ..')
                return pool
            });

        pool.then(conn => {
            conn.request()
                .query(query)
                .then(data => {
                    res.send(data.recordsets);
                }).catch(err => {
                    reject(err)
                })
        }).catch(err => {
            reject(err)
        });

    })
}


module.exports = QueryFunction