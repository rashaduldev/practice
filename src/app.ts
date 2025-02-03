import express, {Request, Response} from 'express';
import { userRoutes } from './module/user/user.route';
import cors from 'cors';
const app = express()
app.use(express.json());
app.use(cors());

app.use('/api/v1', userRoutes)
app.get('/', (req:Request, res:Response) => {
    res.send({
        status:true,
        Message:"Server is running"
    })
  })

  export default app;