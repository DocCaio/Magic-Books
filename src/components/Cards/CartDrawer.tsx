import { X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CartItem } from './CartItem';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: Props) {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    alert(`Pedido finalizado!\n${totalItems} item(s) — R$ ${totalPrice.toFixed(2).replace('.', ',')}`);
    clearCart();
    onClose();
  };

  return (
    <>
      
      {open && (
        <div onClick={onClose} style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.3)', zIndex: 40,
        }} />
      )}

   
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: '340px', background: 'white', zIndex: 50,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        display: 'flex', flexDirection: 'column',
        boxShadow: '-4px 0 20px rgba(0,0,0,0.1)',
      }}>
     
        <div style={{ padding: '16px 20px', borderBottom: '1px solid #f0f0f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 600 }}>
            🛒 Carrinho ({totalItems})
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

      
        <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px' }}>
          {items.length === 0
            ? <p style={{ textAlign: 'center', color: '#aaa', marginTop: '3rem' }}>Carrinho vazio</p>
            : items.map(item => <CartItem key={item.id} item={item} />)
          }
        </div>

     
        {items.length > 0 && (
          <div style={{ padding: '16px 20px', borderTop: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between',
                          fontSize: '16px', fontWeight: 700, marginBottom: '14px' }}>
              <span>Total</span>
              <span style={{ color: '#F59106' }}>
                R$ {totalPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <button onClick={handleCheckout} style={{
              width: '100%', padding: '12px',
              background: '#F59106', color: 'white',
              border: 'none', borderRadius: '8px',
              fontSize: '15px', fontWeight: 700, cursor: 'pointer',
            }}>
              Finalizar compra
            </button>
          </div>
        )}
      </aside>
    </>
  );
}