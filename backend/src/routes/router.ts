import express, { Request, Response } from 'express';
import loginController from "../controller/loginController";
import signupController from "../controller/signupController";
import { createActivity, deleteActivity, updateActivity, getActivities } from '../controller/activityController';

const router = express.Router();

router.get('/', (request:Request, response:Response) => {
    response.send("Hello from server");
})

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/activity', createActivity);
router.get('/activity', getActivities);
router.put('/activity', updateActivity);
router.delete('/activity', deleteActivity);

export default router;