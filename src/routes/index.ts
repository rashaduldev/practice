import { Router } from "express"
import { userRoutes } from "../module/user/user.route";
import { StudentRoutes } from "../module/student/student.route";

const router=Router();

const allRoutes=[
    {
        path:'/users',
        route:userRoutes
    },
    {
        path:'/students',
        route:StudentRoutes
    },
]

allRoutes.forEach((route)=>router.use(
    route.path,
    route.route
))


export default router;