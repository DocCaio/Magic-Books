import axios from 'axios';
import type { Book } from '../types/Books';

// Atualizado de 8080 para 8081 para coincidir com o Spring Boot
const API_URL = 'http://localhost:8081/api/books';

export const getAllBooks = async (): Promise<Book[]> => {
  const response = await axios.get<Book[]>(API_URL);
  return response.data;
};