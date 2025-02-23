import express from "express";
import prisma from "../../prisma/prismaSetting.js";
import { PostsController } from "./posts.controller.js";
import { PostsService } from "./posts.service.js";
import { PostsRepository } from "./posts.repository.js";

const router = express.Router();

const postsRepository = new PostsRepository(prisma);
const postsService = new PostsService(postsRepository);
const postsController = new PostsController(postsService);

router.get('/', postsController.find);

router.get('/:id', postsController.findOne);

router.post('/', postsController.create);

export default router;