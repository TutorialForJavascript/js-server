import cmd from './cmd'
import bind_config from './config'
import connect from './model/index'
import pubsub from './pubsub'
import app from './app'

function main(argv) {
    let config = cmd(argv)(bind_config)
    console.log(config)
    app.config = config
    connect.init_url(app.config.get("DB_URL"))
    pubsub.init(app.config.get("REDIS_URL"), app.config.get("REDIS_CHANNEL"))
    connect.create_tables("Notification", true).then(() => {
        return connect.get_table("Notification").count()
    }).then(count => {
        console.log("****************")
        console.log(count)
        console.log("****************")
        if (count === 0) {
            return connect.moke_data()
        } else {
            return false
        }
    }).then(() => {
        console.log(`server start @ ${app.config.get("HOST")}:${app.config.get("PORT")}`)
        app.listen(app.config.get("PORT"), app.config.get("HOST"))
    })


}
if (process.mainModule.filename === __filename) {
    main(process.argv)
}