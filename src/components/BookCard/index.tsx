

import type { Book } from '../../types/Books';

interface Props {
  book: Book;
}

export function BookCard({ book }: Props) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '200px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <img
        src={book.coverUrl}
        alt={book.title}
        style={{ width: '100%', height: '280px', objectFit: 'cover' }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x280';
        }}
      />
      <div style={{ padding: '12px' }}>
        <h3 style={{ margin: '0 0 4px', fontSize: '14px' }}>{book.title}</h3>
        <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{book.author}</p>
      </div>
    </div>
  );
}