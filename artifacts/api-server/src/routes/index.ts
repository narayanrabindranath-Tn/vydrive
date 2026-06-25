import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import partnerRouter from "./partner";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(partnerRouter);

export default router;
