import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import type { Book } from '../../types/Books';

export function BookCard({ book }: { book: Book }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(book.id);

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      width: '200px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'sans-serif',
      outline: inCart ? '2px solid #F59106' : 'none',
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
        <div style={{ float: 'right', color: inCart ? '#F59106' : '#000' }}>
          <ShoppingCart size={20} />
        </div>
        <h3 style={{ margin: '0 0 4px', fontSize: '14px', clear: 'both' }}>{book.title}</h3>
        <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#666' }}>{book.author}</p>
        <span style={{ fontWeight: 'bold', color: '#333' }}>
          R$ {book.price.toFixed(2).replace('.', ',')}
        </span>
        <button
          onClick={() => addToCart(book)}
          disabled={inCart}
          style={{
            display: 'block',
            width: '100%',
            marginTop: '10px',
            padding: '8px',
            background: inCart ? '#eee' : '#F59106',
            color: inCart ? '#999' : 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: inCart ? 'default' : 'pointer',
            fontWeight: 600,
            fontSize: '13px',
          }}
        >
          {inCart ? '✓ Adicionado' : '+ Adicionar'}
        </button>
      </div>
    </div>
  );
}