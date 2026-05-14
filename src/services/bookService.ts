

import axios from 'axios';
import type { Book } from '../types/Books';

const API_URL = 'http://localhost:8080/api/books';

export const getAllBooks = async (): Promise<Book[]> => {
  const response = await axios.get<Book[]>(API_URL);
  return response.data;
};