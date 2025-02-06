import express, {Request, Response} from 'express';
import { userRoutes } from './module/user/user.route';
import cors from 'cors';
import globalErrorHandeler from './middleware/globalErrorHandeler';
import notFoundRoute from './middleware/notFoundRoute';
import { StudentRoutes } from './module/student/student.route';
import router from './routes';
const app = express()
app.use(express.json());
app.use(cors());

app.use('/api/v1', userRoutes)
app.use('/api/v1', router)
app.use(globalErrorHandeler)
app.use(notFoundRoute)

app.get('/', (req:Request, res:Response) => {
    res.send({
        status:true,
        Message:"Server is running"
    })
  })
 

  export default app;