import { ShoppingCart as CartIcon } from 'lucide-react'; // Import and alias
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
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif'
    }}>
      <img
        src={book.coverUrl}
        alt={book.title}
        style={{ width: '100%', height: '280px', objectFit: 'cover' }}
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x280';
        }}
      />
      <div style={{ padding: '12px', position: 'relative' }}>
      
        <div style={{ float: 'right', color: '#000' }}>
           <CartIcon size={20} />
        </div>

        <h3 style={{ margin: '0 0 4px', fontSize: '14px', clear: 'both' }}>{book.title}</h3>
        <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#666' }}>{book.author}</p>
        <span style={{ fontWeight: 'bold', color: '#333' }}>${book.price}</span>
      </div>
    </div>
  );
}