import router from 'koa-route'
import compose from 'koa-compose'
import Main from './source/main'
import NotificationList from './source/notification_list'
import Notification from './source/notification'

let routes = compose([
    router.get('/', Main.get),
    router.get('/notification', NotificationList.get),
    router.post('/notification', NotificationList.post),
    router.get('/notification/:id', Notification.get),
    router.delete('/notification/:id', Notification.delete)
])

export default routes