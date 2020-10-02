import { response, Router } from 'express';
import { request } from 'http';
import { getCustomRepository, getRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  // importante usar isso pra saber identificar os erros
  try {
    const repo = getRepository(Class);
    const res = await repo.save(request.body);
    return response.status(201).json(res);
  } catch (err) {
    console.log('err.message: >>', err.message);
  }
});

classRouter.get('/', async (request, response) => {
  return response.json(await getRepository(Class).find());
});

// filtro por nomes
classRouter.get('/:name', async (request, response) => {
  // :name = request.params.name
  /* const repository = getRepository(Class);
  const res = await repository.find({
    where: {
      name: request.params.name,
    },
  }); */
  const repository = getCustomRepository(ClassRepository);
  const res = await repository.findByName(request.params.name);
  response.json(res);
});
export default classRouter;
