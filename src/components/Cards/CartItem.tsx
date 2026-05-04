import { Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import type { CartItem as CartItemType } from '../../types/Books';

export function CartItem({ item }: { item: CartItemType }) {
  const { changeQty, removeFromCart } = useCart();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 0',
      borderBottom: '1px solid #f0f0f0',
    }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: '13px', fontWeight: 600, margin: 0, 
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.title}
        </p>
        <p style={{ fontSize: '11px', color: '#888', margin: '2px 0 0' }}>
          R$ {item.price.toFixed(2).replace('.', ',')} / un.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <button onClick={() => changeQty(item.id, -1)} style={qtyBtnStyle}>−</button>
        <span style={{ fontSize: '14px', fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>
          {item.qty}
        </span>
        <button onClick={() => changeQty(item.id, +1)} style={qtyBtnStyle}>+</button>
      </div>

      <span style={{ fontSize: '13px', fontWeight: 600, minWidth: '60px', textAlign: 'right' }}>
        R$ {(item.price * item.qty).toFixed(2).replace('.', ',')}
      </span>

      <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ccc', padding: '2px' }}>
        <Trash2 size={15} />
      </button>
    </div>
  );
}

const qtyBtnStyle: React.CSSProperties = {
  width: '24px', height: '24px', borderRadius: '50%',
  border: '1px solid #ddd', background: '#f9f9f9',
  cursor: 'pointer', fontSize: '16px', lineHeight: 1,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};