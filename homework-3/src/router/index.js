import { createRouter, createWebHashHistory } from 'vue-router'
// Import the views that will be shown for specific routes
import MainView from '../views/MainView.vue'
import LoginView from '../views/LoginView.vue'

// Define the routes that the application will use
const routes = [{
    path: '/',
    name: 'main',
    component: MainView
},
{
    path: '/login',
    name: 'login',
    component: LoginView
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// Export so router can be used in main application file
export default router