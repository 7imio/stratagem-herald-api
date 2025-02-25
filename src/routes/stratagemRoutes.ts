import { Request, Response, Router } from 'express';
import { StratagemService } from '../services/stratagemsService';

const stratagemRouter = Router();

stratagemRouter.get('/', (req: Request, res: Response) => {
  console.log('GET /api/stratagems');
  res.status(200).json(StratagemService.getAll());
});

stratagemRouter.get('/random', (req: Request, res: Response) => {
  console.log('GET /api/stratagems/random');
  res.status(200).json(StratagemService.getOneRandom());
});

stratagemRouter.get('/name', (req: Request, res: Response) => {
  console.log('GET /api/stratagems/name');
  res.status(200).json(StratagemService.getAllNames());
});

stratagemRouter.get('/name/:name', (req: Request, res: Response) => {
  const name = req.params.name;
  console.log(`GET /api/stratagems/name/${name}`);
  const stratagem = StratagemService.getOneByName(name);
  if (stratagem) {
    res.json(stratagem);
  } else {
    res.status(404).send('Stratagem not found');
  }
});

stratagemRouter.get('/id/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(`GET /api/stratagems/id/${id}`);
  const stratagem = StratagemService.getOneById(id);
  if (stratagem) {
    res.json(stratagem);
  } else {
    res.status(404).send('Stratagem not found');
  }
});

export default stratagemRouter;
