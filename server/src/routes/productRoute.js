import { Router } from 'express';
import {
  getProducts, createProduct, updateProduct, deleteProduct,
} from '../controllers';

const router = Router;

router.get('/', getProducts);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.remove('/:id', deleteProduct);

export default router;
