import express from 'express';
import {
  movievideos,
  nowplayingmovies,
} from '../controllers/netflix.controller.js';

const router = express.Router();

router.get('/movievideos/:movieID', movievideos);

router.get('/nowplayingmovies', nowplayingmovies);

export default router;
