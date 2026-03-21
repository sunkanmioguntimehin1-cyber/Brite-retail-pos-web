'use client';
import { useState, useCallback } from 'react';
import { IconSearch, IconScan, IconTrash, IconPlus, IconMinus, IconCreditCard, IconDollar, IconPrinter, IconCheck, IconX } from '@/components/ui/Icons';

interface Product { id:number; name:string; sku:string; price:number; category:string; emoji:string; }
interface CartItem extends Product { qty:number; }

const PRODUCTS: Product[] = [
  {id:1,name:'Wireless Earbuds Pro',sku:'WEP-001',price:49.99,category:'Electronics',emoji:'🎧'},
  {id:2,name:'USB-C Hub 7-in-1',sku:'HUB-019',price:44.99,category:'Electronics',emoji:'🔌'},
  {id:3,name:'Phone Case Premium',sku:'CAS-072',price:19.99,category:'Cases',emoji:'📱'},
  {id:4,name:'Wireless Charger Pad',sku:'CHR-044',price:29.99,category:'Electronics',emoji:'⚡'},
  {id:5,name:'Laptop Stand Pro',sku:'STD-012',price:59.99,category:'Accessories',emoji:'💻'},
  {id:6,name:'USB-C Cable 2m',sku:'CBL-088',price:14.99,category:'Cables',emoji:'🔗'},
  {id:7,name:'Screen Protector',sku:'SCR-031',price:9.99,category:'Cases',emoji:'🛡️'},
  {id:8,name:'Bluetooth Speaker',sku:'SPK-005',price:79.99,category:'Electronics',emoji:'🔊'},
  {id:9,name:'Mouse Pad XL',sku:'MPD-007',price:24.99,category:'Accessories',emoji:'🖱️'},
  {id:10,name:'LED Desk Lamp',sku:'LMP-003',price:39.99,category:'Lighting',emoji:'💡'},
  {id:11,name:'Cable Organizer',sku:'ORG-015',price:12.99,category:'Accessories',emoji:'📦'},
  {id:12,name:'HDMI Cable 2m',sku:'HDM-002',price:17.99,category:'Cables',emoji:'🎮'},
];
const CATEGORIES = ['All','Electronics','Cases','Accessories','Cables','Lighting'];
type PayView = 'cart'|'cash'|'card'|'success';

export function POSTerminalScreen() {
  const [cart, setCart] = useState<CartItem[]>([
    {...PRODUCTS[0], qty:1},
    {...PRODUCTS[1], qty:2},
  ]);
  const [search, setSearch]     = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [payView, setPayView]   = useState<PayView>('cart');
  const [cashInput, setCashInput] = useState('');

  const filtered = PRODUCTS.filter(p =>
    (activeCat === 'All' || p.category === activeCat) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()))
  );

  const addItem = useCallback((p: Product) => {
    setCart(prev => {
      const ex = prev.find(c => c.id === p.id);
      if (ex) return prev.map(c => c.id === p.id ? {...c, qty:c.qty+1} : c);
      return [...prev, {...p, qty:1}];
    });
  }, []);

  const updateQty = useCallback((id: number, delta: number) => {
    setCart(prev => prev.map(c => c.id === id ? {...c, qty:Math.max(0,c.qty+delta)} : c).filter(c => c.qty > 0));
  }, []);

  const removeItem = useCallback((id: number) => setCart(prev => prev.filter(c => c.id !== id)), []);
  const clearCart = () => { setCart([]); setPayView('cart'); setCashInput(''); };

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const tax      = subtotal * 0.0825;
  const total    = subtotal + tax;
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);

  const cashNum = parseFloat(cashInput || '0');
  const change  = cashNum - total;

  const handleNumPad = (val: string) => {
    if (val === 'DEL') { setCashInput(p => p.slice(0,-1)); return; }
    if (val === '.' && cashInput.includes('.')) return;
    if (cashInput.length >= 7) return;
    setCashInput(p => p + val);
  };

  const processPayment = () => {
    setPayView('success');
    setTimeout(() => { clearCart(); setPayView('cart'); }, 2600);
  };

  return (
    <div style={{ display:'flex', gap:16, height:'calc(100vh - 96px)', minHeight:0 }}>
      {/* ── Left: catalog ── */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:10, minWidth:0 }}>
        <div style={{ display:'flex', gap:10 }}>
          <div className="pos-search" style={{ flex:1 }}>
            <IconSearch size={14} />
            <input className="pos-input" placeholder="Search by name or SKU…" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <button className="pos-btn ghost" style={{ gap:6, flexShrink:0 }}>
            <IconScan size={14} /> Scan
          </button>
        </div>

        <div style={{ display:'flex', gap:6, overflowX:'auto', paddingBottom:2 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} className={`pos-chip${activeCat === cat ? ' active' : ''}`} onClick={() => setActiveCat(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ flex:1, overflowY:'auto', display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(145px,1fr))', gap:10, alignContent:'start', paddingRight:3 }}>
          {filtered.map(p => {
            const inCart = cart.find(c => c.id === p.id);
            return (
              <button key={p.id} className="pos-product-card" onClick={() => addItem(p)}>
                {inCart && (
                  <div style={{ position:'absolute', top:8, right:8, width:19, height:19, borderRadius:'50%', background:'var(--pos-blue)', color:'#fff', fontSize:9, fontWeight:800, display:'flex', alignItems:'center', justifyContent:'center' }}>
                    {inCart.qty}
                  </div>
                )}
                <div style={{ fontSize:26, marginBottom:7, lineHeight:1 }}>{p.emoji}</div>
                <div style={{ fontSize:11, fontWeight:700, color:'var(--pos-t1)', marginBottom:3, lineHeight:1.3 }}>{p.name}</div>
                <div className="pos-mono" style={{ color:'var(--pos-t3)', marginBottom:7 }}>{p.sku}</div>
                <div style={{ fontSize:15, fontWeight:800, color:'var(--pos-blue)', fontVariantNumeric:'tabular-nums' }}>${p.price.toFixed(2)}</div>
                <div style={{ fontSize:9, color:'var(--pos-t3)', marginTop:2 }}>{p.category}</div>
              </button>
            );
          })}
          {!filtered.length && (
            <div style={{ gridColumn:'1/-1', textAlign:'center', padding:'40px 0', color:'var(--pos-t3)', fontSize:12 }}>No products found</div>
          )}
        </div>
      </div>

      {/* ── Right: cart panel ── */}
      <div style={{ width:350, display:'flex', flexDirection:'column', background:'var(--pos-s1)', border:'1px solid var(--pos-bd)', borderRadius:14, overflow:'hidden', flexShrink:0 }}>
        {/* Header */}
        <div style={{ padding:'13px 14px', borderBottom:'1px solid var(--pos-bd)', display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0 }}>
          <div>
            <div style={{ fontWeight:800, fontSize:13, color:'var(--pos-t1)' }}>Current Sale</div>
            <div style={{ fontSize:10, color:'var(--pos-t3)', marginTop:1 }}>{totalItems} item{totalItems !== 1 ? 's' : ''} in cart</div>
          </div>
          <div style={{ display:'flex', gap:6 }}>
            {payView !== 'cart' && <button className="pos-btn ghost sm" onClick={() => setPayView('cart')}>← Back</button>}
            {cart.length > 0 && payView === 'cart' && (
              <button className="pos-btn danger sm" onClick={clearCart} style={{ gap:4 }}>
                <IconTrash size={11} /> Clear
              </button>
            )}
          </div>
        </div>
        {/* Customer */}
        <div style={{ padding:'8px 12px', borderBottom:'1px solid var(--pos-bd)', background:'var(--pos-s2)', flexShrink:0 }}>
          <input className="pos-input sm" placeholder="Customer name (optional)" style={{ background:'var(--pos-s1)' }} />
        </div>

        {/* ── SUCCESS ── */}
        {payView === 'success' && (
          <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:14, padding:24, textAlign:'center' }}>
            <div style={{ width:68, height:68, borderRadius:'50%', background:'var(--pos-green-dim)', border:'2px solid var(--pos-green)', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <IconCheck size={32} style={{ color:'var(--pos-green)' } as React.CSSProperties} />
            </div>
            <div style={{ fontSize:20, fontWeight:800, color:'var(--pos-green)' }}>Payment Successful!</div>
            <div style={{ fontSize:30, fontWeight:800, color:'var(--pos-t1)', fontVariantNumeric:'tabular-nums' }}>${total.toFixed(2)}</div>
          </div>
        )}

        {/* ── CASH PAY ── */}
        {payView === 'cash' && (
          <div style={{ flex:1, display:'flex', flexDirection:'column', padding:14, gap:10, overflowY:'auto' }}>
            <div style={{ background:'var(--pos-s2)', border:'1px solid var(--pos-bd)', borderRadius:10, padding:12, textAlign:'center' }}>
              <div style={{ fontSize:10, color:'var(--pos-t3)', marginBottom:3, fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em' }}>Amount Due</div>
              <div style={{ fontSize:30, fontWeight:800, color:'var(--pos-t1)', fontVariantNumeric:'tabular-nums' }}>${total.toFixed(2)}</div>
            </div>
            <div style={{ background:'var(--pos-blue-dim)', border:'1px solid rgba(59,130,246,0.3)', borderRadius:10, padding:11, textAlign:'center' }}>
              <div style={{ fontSize:10, color:'var(--pos-blue)', marginBottom:3, fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em' }}>Cash Received</div>
              <div style={{ fontSize:26, fontWeight:800, color:'var(--pos-blue)', fontVariantNumeric:'tabular-nums', minHeight:34 }}>${cashInput || '0'}</div>
            </div>
            {cashNum > 0 && (
              <div style={{ background: change >= 0 ? 'var(--pos-green-dim)' : 'var(--pos-red-dim)', border:`1px solid ${change >= 0 ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`, borderRadius:10, padding:11, textAlign:'center' }}>
                <div style={{ fontSize:10, color: change >= 0 ? 'var(--pos-green)' : 'var(--pos-red)', marginBottom:3, fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em' }}>
                  {change >= 0 ? 'Change Due' : 'Insufficient'}
                </div>
                <div style={{ fontSize:22, fontWeight:800, color: change >= 0 ? 'var(--pos-green)' : 'var(--pos-red)', fontVariantNumeric:'tabular-nums' }}>${Math.abs(change).toFixed(2)}</div>
              </div>
            )}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6 }}>
              {['20','50','100'].map(v => (
                <button key={v} className="pos-btn ghost" style={{ justifyContent:'center' }} onClick={() => setCashInput(v)}>${v}</button>
              ))}
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6 }}>
              {['1','2','3','4','5','6','7','8','9','.','0','DEL'].map(k => (
                <button key={k} className={`pos-keypad-btn${k === 'DEL' ? ' del' : ''}`} style={{ height:46 }} onClick={() => handleNumPad(k)}>{k}</button>
              ))}
            </div>
            <button className="pos-btn success lg" style={{ width:'100%', justifyContent:'center', gap:8 }} disabled={change < 0 || cashNum === 0} onClick={processPayment}>
              <IconCheck size={15} /> Complete Sale
            </button>
          </div>
        )}

        {/* ── CARD PAY ── */}
        {payView === 'card' && (
          <div style={{ flex:1, display:'flex', flexDirection:'column', padding:14, gap:14 }}>
            <div style={{ background:'var(--pos-s2)', border:'1px solid var(--pos-bd)', borderRadius:10, padding:14, textAlign:'center' }}>
              <div style={{ fontSize:10, color:'var(--pos-t3)', marginBottom:4, fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em' }}>Charge to Card</div>
              <div style={{ fontSize:34, fontWeight:800, color:'var(--pos-t1)', fontVariantNumeric:'tabular-nums' }}>${total.toFixed(2)}</div>
            </div>
            <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, background:'var(--pos-s2)', border:'2px dashed var(--pos-bd2)', borderRadius:12, padding:28, textAlign:'center' }}>
              <div style={{ width:56, height:56, borderRadius:'50%', background:'var(--pos-blue-dim)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <IconCreditCard size={24} style={{ color:'var(--pos-blue)' } as React.CSSProperties} />
              </div>
              <div style={{ fontSize:13, fontWeight:700, color:'var(--pos-t1)' }}>Tap, Insert or Swipe</div>
              <div style={{ fontSize:11, color:'var(--pos-t3)' }}>Present card to reader to continue</div>
            </div>
            <button className="pos-btn success lg" style={{ width:'100%', justifyContent:'center', gap:8 }} onClick={processPayment}>
              <IconCheck size={15} /> Confirm Payment
            </button>
          </div>
        )}

        {/* ── CART VIEW ── */}
        {payView === 'cart' && (
          <>
            <div style={{ flex:1, overflowY:'auto', padding:'10px 12px', display:'flex', flexDirection:'column', gap:6 }}>
              {cart.length === 0 && (
                <div style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10, color:'var(--pos-t3)', padding:'40px 0', textAlign:'center' }}>
                  <div style={{ fontSize:36 }}>🛒</div>
                  <div style={{ fontSize:13, fontWeight:600 }}>Cart is empty</div>
                  <div style={{ fontSize:11 }}>Tap a product to add it</div>
                </div>
              )}
              {cart.map(item => (
                <div key={item.id} className="pos-cart-item">
                  <div style={{ fontSize:20, flexShrink:0 }}>{item.emoji}</div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:12, fontWeight:700, color:'var(--pos-t1)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{item.name}</div>
                    <div className="pos-mono" style={{ color:'var(--pos-t3)', marginTop:1 }}>{item.sku} · ${item.price.toFixed(2)} ea</div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:5, flexShrink:0 }}>
                    <button className="pos-qty-btn" onClick={() => updateQty(item.id, -1)}><IconMinus size={10} /></button>
                    <span style={{ fontSize:13, fontWeight:800, color:'var(--pos-t1)', minWidth:18, textAlign:'center', fontVariantNumeric:'tabular-nums' }}>{item.qty}</span>
                    <button className="pos-qty-btn" onClick={() => updateQty(item.id, 1)}><IconPlus size={10} /></button>
                  </div>
                  <div style={{ fontSize:13, fontWeight:800, color:'var(--pos-t1)', minWidth:50, textAlign:'right', fontVariantNumeric:'tabular-nums' }}>${(item.price * item.qty).toFixed(2)}</div>
                  <button className="pos-btn ghost icon" style={{ color:'var(--pos-red)', width:22, height:22, flexShrink:0, borderRadius:5, fontSize:14 }} onClick={() => removeItem(item.id)}>
                    <IconX size={11} />
                  </button>
                </div>
              ))}
            </div>

            <div style={{ padding:'12px 14px', borderTop:'1px solid var(--pos-bd)', background:'var(--pos-s2)', flexShrink:0 }}>
              <div style={{ display:'flex', flexDirection:'column', gap:5, marginBottom:12 }}>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'var(--pos-t2)' }}>
                  <span>Subtotal</span><span style={{ fontVariantNumeric:'tabular-nums' }}>${subtotal.toFixed(2)}</span>
                </div>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, color:'var(--pos-t2)' }}>
                  <span>Tax (8.25%)</span><span style={{ fontVariantNumeric:'tabular-nums' }}>${tax.toFixed(2)}</span>
                </div>
                <div style={{ height:1, background:'var(--pos-bd)', margin:'3px 0' }} />
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:18, fontWeight:800, color:'var(--pos-t1)' }}>
                  <span>Total</span><span style={{ fontVariantNumeric:'tabular-nums' }}>${total.toFixed(2)}</span>
                </div>
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:8 }}>
                <button className="pos-btn ghost lg" style={{ justifyContent:'center', gap:6, width:'100%' }} disabled={cart.length === 0} onClick={() => setPayView('cash')}>
                  <IconDollar size={14} /> Cash
                </button>
                <button className="pos-btn primary lg" style={{ justifyContent:'center', gap:6, width:'100%' }} disabled={cart.length === 0} onClick={() => setPayView('card')}>
                  <IconCreditCard size={14} /> Card
                </button>
              </div>
              <button className="pos-btn ghost" style={{ width:'100%', justifyContent:'center', gap:6, fontSize:11 }} disabled={cart.length === 0}>
                <IconPrinter size={12} /> Print Receipt
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
