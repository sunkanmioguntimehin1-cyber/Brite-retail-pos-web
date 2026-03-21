'use client';
import { useState } from 'react';
import { IconSearch, IconPlus, IconEdit, IconTrash, IconDownload } from '@/components/ui/Icons';

const products = [
  {id:1,name:'Wireless Earbuds Pro',sku:'WEP-001',category:'Electronics',price:49.99,cost:22.00,stock:284,status:'active',emoji:'🎧'},
  {id:2,name:'USB-C Hub 7-in-1',sku:'HUB-019',category:'Electronics',price:44.99,cost:18.00,stock:61,status:'active',emoji:'🔌'},
  {id:3,name:'iPhone 15 Case — Black',sku:'CAS-072',category:'Cases',price:19.99,cost:5.50,stock:2,status:'low',emoji:'📱'},
  {id:4,name:'Wireless Charger Pad',sku:'CHR-044',category:'Electronics',price:29.99,cost:12.00,stock:9,status:'low',emoji:'⚡'},
  {id:5,name:'Laptop Stand Pro',sku:'STD-012',category:'Accessories',price:59.99,cost:25.00,stock:45,status:'active',emoji:'💻'},
  {id:6,name:'USB-C Cable 2m',sku:'CBL-088',category:'Cables',price:14.99,cost:3.00,stock:0,status:'out',emoji:'🔗'},
  {id:7,name:'Bluetooth Speaker',sku:'SPK-005',category:'Electronics',price:79.99,cost:35.00,stock:28,status:'active',emoji:'🔊'},
  {id:8,name:'Screen Protector',sku:'SCR-031',category:'Cases',price:9.99,cost:1.50,stock:120,status:'active',emoji:'🛡️'},
];

export function ProductsScreen() {
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filtered = products.filter(p =>
    (catFilter === 'All' || p.category === catFilter) &&
    (statusFilter === 'All' || p.status === statusFilter.toLowerCase()) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase()))
  );
  const margin = (p: typeof products[0]) => (((p.price - p.cost) / p.price) * 100).toFixed(0);
  const statusBadge = (s: string) => {
    if (s === 'active') return <span className="pos-badge green">Active</span>;
    if (s === 'low')    return <span className="pos-badge amber">Low Stock</span>;
    return <span className="pos-badge red">Out of Stock</span>;
  };

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
        {[
          {label:'Total Products',value:'248',color:'var(--pos-blue)'},
          {label:'Active Listings',value:'231',color:'var(--pos-green)'},
          {label:'Low Stock Items',value:'14',color:'var(--pos-amber)'},
          {label:'Out of Stock',value:'3',color:'var(--pos-red)'},
        ].map(c => (
          <div key={c.label} className="pos-card-sm" style={{ padding:'14px 16px' }}>
            <div style={{ fontSize:10, color:'var(--pos-t3)', fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:6 }}>{c.label}</div>
            <div style={{ fontSize:26, fontWeight:800, color:c.color, fontVariantNumeric:'tabular-nums' }}>{c.value}</div>
          </div>
        ))}
      </div>

      <div className="pos-card" style={{ overflow:'hidden' }}>
        <div style={{ padding:'13px 16px', display:'flex', alignItems:'center', gap:10, borderBottom:'1px solid var(--pos-bd)', flexWrap:'wrap' }}>
          <div className="pos-search" style={{ maxWidth:280 }}>
            <IconSearch size={14} />
            <input className="pos-input" placeholder="Search by name or SKU…" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <select className="pos-input" style={{ width:'auto' }} value={catFilter} onChange={e => setCatFilter(e.target.value)}>
            {['All','Electronics','Cases','Accessories','Cables'].map(c => <option key={c}>{c}</option>)}
          </select>
          <select className="pos-input" style={{ width:'auto' }} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
            {['All','Active','Low','Out'].map(s => <option key={s}>{s}</option>)}
          </select>
          <div style={{ flex:1 }} />
          <button className="pos-btn ghost" style={{ gap:5 }}><IconDownload size={12} /> Export</button>
          <button className="pos-btn primary" style={{ gap:5 }}><IconPlus size={12} /> Add Product</button>
        </div>

        <div style={{ overflowX:'auto' }}>
          <table className="pos-table">
            <thead>
              <tr>
                <th style={{ width:40 }}><input type="checkbox" style={{ accentColor:'var(--pos-blue)' }} /></th>
                <th>Product</th><th>SKU</th><th>Category</th>
                <th>Price</th><th>Cost</th><th>Margin</th><th>Stock</th><th>Status</th>
                <th style={{ width:80 }}></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td><input type="checkbox" style={{ accentColor:'var(--pos-blue)' }} /></td>
                  <td>
                    <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                      <div style={{ width:36, height:36, borderRadius:8, background:'var(--pos-s2)', border:'1px solid var(--pos-bd)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{p.emoji}</div>
                      <div>
                        <div style={{ fontWeight:600, color:'var(--pos-t1)', fontSize:13 }}>{p.name}</div>
                        <div style={{ fontSize:10, color:'var(--pos-t3)', marginTop:1 }}>1 variant</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="pos-mono" style={{ color:'var(--pos-t3)' }}>{p.sku}</span></td>
                  <td style={{ fontSize:12, color:'var(--pos-t2)' }}>{p.category}</td>
                  <td style={{ fontWeight:700, fontVariantNumeric:'tabular-nums' }}>${p.price.toFixed(2)}</td>
                  <td style={{ fontSize:12, color:'var(--pos-t3)', fontVariantNumeric:'tabular-nums' }}>${p.cost.toFixed(2)}</td>
                  <td style={{ fontSize:12, fontWeight:700, color: parseInt(margin(p)) > 50 ? 'var(--pos-green)' : 'var(--pos-t2)' }}>{margin(p)}%</td>
                  <td style={{ fontWeight:700, fontVariantNumeric:'tabular-nums', color: p.stock === 0 ? 'var(--pos-red)' : p.stock < 10 ? 'var(--pos-amber)' : 'var(--pos-t1)' }}>{p.stock}</td>
                  <td>{statusBadge(p.status)}</td>
                  <td>
                    <div style={{ display:'flex', gap:4 }}>
                      <button className="pos-btn ghost icon sm"><IconEdit size={11} /></button>
                      <button className="pos-btn ghost icon sm" style={{ color:'var(--pos-red)' }}><IconTrash size={11} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ padding:'11px 16px', borderTop:'1px solid var(--pos-bd)', display:'flex', alignItems:'center', justifyContent:'space-between', background:'var(--pos-s2)' }}>
          <span style={{ fontSize:12, color:'var(--pos-t3)' }}>Showing {filtered.length} of {products.length} products</span>
          <div style={{ display:'flex', gap:4 }}>
            {['Prev','1','2','3','Next'].map((p,i) => (
              <button key={p} className="pos-btn ghost sm"
                style={{ minWidth:32, justifyContent:'center', background: i===1 ? 'var(--pos-blue)' : undefined, color: i===1 ? '#fff' : undefined, border: i===1 ? 'none' : undefined }}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
