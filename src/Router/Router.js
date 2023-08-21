import OurHome from '@/Pages/OurHome';
import OurServices from '@/Pages/OurServices';
import AboutCompany from '@/Pages/AboutCompany';
import OurCase from '@/Pages/OurCase';
import OurContact from '@/Pages/OurContact';
import PersonalArea from '@/Pages/PersonalArea';
import RegistrationAuthorization from '@/Pages/RegistrationAuthorization';
import NewApplication from '@/Pages/NewApplication';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: OurHome
    },

    {
        path: '/OurServices',
        component: OurServices
    },

    {
        path: '/AboutCompany',
        component: AboutCompany
    },

    {
        path: '/OurCase',
        component: OurCase
    },

    {
        path: '/OurContact',
        component: OurContact
    },

    {
        path: '/PersonalArea',
        component: PersonalArea
    },

    {
        path: '/RegistrationAuthorization',
        component: RegistrationAuthorization
    },

    {
        path: '/NewApplication',
        component: NewApplication
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})
export default router;