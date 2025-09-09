import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/',            
        name: 'home',      
        component: () => import('@/view/Home.vue'),      
        meta:{ 
            title:'Home'
        } 
    },
    { 
        path: '/projects',    
        name: 'projects',  
        component: () => import('@/view/Projects.vue'),  
        meta:{ 
            title:'Projects'
        } 
    },
    { 
        path: '/resources',   
        name: 'resources', 
        component: () => import('@/view/Resources.vue'), 
        meta:{
            title:'Resources'
        } 
    },
    { 
        path: '/about',       
        name: 'about',     
        component: () => import('@/view/About.vue'),     
        meta:{ 
            title:'About'
        } 
    },
    {   
        path: '/contact',     
        name: 'contact',   
        component: () => import('@/view/Contact.vue'),   
        meta:{ 
            title:'Contact'
        } 
    },
    // 404
    { 
        path: '/:pathMatch(.*)*', 
        name: 'not-found', 
        component: { 
            template: '<div style="padding:10rem 14rem">404</div>' 
        }, 
        meta:{
            title:'Not Found'} 
        }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Vite 預設 base
    routes,
    scrollBehavior(to, from, saved) {
        // 返回上一頁時保留位置；一般導航滾到最上方
        if (saved) return saved
        return { top: 0 }
    }
})

// 可選：動態設定標題
router.afterEach((to) => {
    if (to.meta?.title) document.title = `Aida · ${to.meta.title}`
})

export default router