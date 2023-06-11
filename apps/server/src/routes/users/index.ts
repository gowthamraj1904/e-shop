import { Router } from 'express';
import { userController } from '@server/controllers';

const router: Router = Router();
const apiURL = '/api/v1';
// const apiURL = process.env.API_URL;

router.get(`${apiURL}/users`, userController.getUsers);
router.get(`${apiURL}/users/:id`, userController.getUserById);
router.post(`${apiURL}/users`, userController.addUser);
router.put(`${apiURL}/users/:id`, userController.updateUser);
router.delete(`${apiURL}/users/:id`, userController.deleteUser);

export default router;
