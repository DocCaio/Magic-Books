
import { use, Suspense } from 'react';
import type { Book } from '../../types/Books';
import { getAllBooks } from '../../services/bookService';
import { BookCard } from '../BookCard';
import { ErrorBoundary } from 'react-error-boundary';


const booksPromise = getAllBooks();

function BookList() {
  
  const books: Book[] = use(booksPromise);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

function Cards() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>📚 Biblioteca de Livros</h1>

      <ErrorBoundary
        fallback={<p style={{ color: 'red', textAlign: 'center' }}>
          Erro ao carregar livros. Verifique se a API está rodando.
        </p>}
      >
        <Suspense
          fallback={<p style={{ textAlign: 'center', marginTop: '2rem' }}>Carregando livros...</p>}
        >
          <BookList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default Cards;