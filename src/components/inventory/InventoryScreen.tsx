'use client';
import { useState } from 'react';
import { IconSearch, IconPlus, IconAlertTriangle } from '@/components/ui/Icons';

const inventory = [
  {name:'Wireless Earbuds Pro',sku:'WEP-001',onHand:284,reserved:12,available:272,reorder:20,location:'A-12',updated:'2m ago',status:'ok'},
  {name:'iPhone 15 Case — Black',sku:'CAS-072',onHand:2,reserved:0,available:2,reorder:10,location:'B-04',updated:'14m ago',status:'critical'},
  {name:'USB-C Hub 7-in-1',sku:'HUB-019',onHand:61,reserved:5,available:56,reorder:15,location:'A-08',updated:'1h ago',status:'ok'},
  {name:'Wireless Charger Pad',sku:'CHR-044',onHand:9,reserved:0,available:9,reorder:20,location:'C-02',updated:'3h ago',status:'low'},
  {name:'Laptop Stand Pro',sku:'STD-012',onHand:45,reserved:3,available:42,reorder:10,location:'B-11',updated:'30m ago',status:'ok'},
  {name:'USB-C Cable 2m',sku:'CBL-088',onHand:0,reserved:0,available:0,reorder:30,location:'C-07',updated:'2h ago',status:'out'},
];
const logs = [
  {time:'14:32',type:'sale',    product:'Wireless Earbuds Pro',qty:-1, ref:'#ORD-00284',user:'Sarah M.'},
  {time:'14:28',type:'sale',    product:'USB-C Hub 7-in-1',    qty:-2, ref:'#ORD-00283',user:'James K.'},
  {time:'13:55',type:'receive', product:'Laptop Stand Pro',    qty:+20,ref:'#PO-0041',  user:'Admin'},
  {time:'13:40',type:'adjust',  product:'Screen Protector',    qty:-5, ref:'ADJ-112',   user:'Maria L.'},
];

export function InventoryScreen() {
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<'stock'|'logs'>('stock');

  const filtered = inventory.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase())
  );
  const sc = (s:string) => ({ok:'var(--pos-t1)',low:'var(--pos-amber)',critical:'var(--pos-red)',out:'var(--pos-red)'}[s] ?? 'var(--pos-t1)');
  const lc = (t:string) => t==='sale' ? 'var(--pos-red)' : t==='receive' ? 'var(--pos-green)' : 'var(--pos-amber)';
  const le = (t:string) => t==='sale' ? '🛍️' : t==='receive' ? '📦' : '🔧';

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
        {[
          {label:'Total SKUs',value:'248',color:'var(--pos-blue)'},
          {label:'Total Units',value:'4,821',color:'var(--pos-t1)'},
          {label:'Low Stock',value:'14',color:'var(--pos-amber)'},
          {label:'Out of Stock',value:'3',color:'var(--pos-red)'},
        ].map(c => (
          <div key={c.label} className="pos-card-sm" style={{ padding:'14px 16px' }}>
            <div style={{ fontSize:10, color:'var(--pos-t3)', fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:6 }}>{c.label}</div>
            <div style={{ fontSize:26, fontWeight:800, color:c.color, fontVariantNumeric:'tabular-nums' }}>{c.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 290px', gap:14 }}>
        <div className="pos-card" style={{ overflow:'hidden' }}>
          <div style={{ padding:'13px 16px', display:'flex', alignItems:'center', gap:10, borderBottom:'1px solid var(--pos-bd)', flexWrap:'wrap' }}>
            <div className="pos-tab-nav" style={{ flexShrink:0 }}>
              <button className={`pos-tab-btn${tab==='stock'?' active':''}`} onClick={() => setTab('stock')}>Stock Levels</button>
              <button className={`pos-tab-btn${tab==='logs'?' active':''}`} onClick={() => setTab('logs')}>Movement Log</button>
            </div>
            <div className="pos-search" style={{ flex:1 }}>
              <IconSearch size={14} />
              <input className="pos-input" placeholder="Search product or SKU…" value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <button className="pos-btn primary" style={{ gap:5, flexShrink:0 }}><IconPlus size={12} /> Adjust</button>
          </div>

          {tab === 'stock' && (
            <div style={{ overflowX:'auto' }}>
              <table className="pos-table">
                <thead>
                  <tr><th>Product</th><th>SKU</th><th>On Hand</th><th>Reserved</th><th>Available</th><th>Reorder Pt.</th><th>Location</th><th>Status</th></tr>
                </thead>
                <tbody>
                  {filtered.map(item => (
                    <tr key={item.sku} style={{ background: item.status==='critical'||item.status==='out' ? 'rgba(239,68,68,0.04)' : undefined }}>
                      <td style={{ fontWeight:600, fontSize:13 }}>{item.name}</td>
                      <td><span className="pos-mono" style={{ color:'var(--pos-t3)' }}>{item.sku}</span></td>
                      <td style={{ fontWeight:800, color:sc(item.status), fontVariantNumeric:'tabular-nums' }}>{item.onHand}</td>
                      <td style={{ color:'var(--pos-t3)', fontVariantNumeric:'tabular-nums', fontSize:12 }}>{item.reserved}</td>
                      <td style={{ fontWeight:800, color:sc(item.status), fontVariantNumeric:'tabular-nums' }}>{item.available}</td>
                      <td style={{ color:'var(--pos-t3)', fontSize:12, fontVariantNumeric:'tabular-nums' }}>{item.reorder}</td>
                      <td><span style={{ fontFamily:'var(--font-mono,monospace)', fontSize:10, background:'var(--pos-s2)', padding:'2px 6px', borderRadius:4, border:'1px solid var(--pos-bd)' }}>{item.location}</span></td>
                      <td>
                        {item.status==='ok'       && <span className="pos-badge green">In Stock</span>}
                        {item.status==='low'      && <span className="pos-badge amber">Low</span>}
                        {item.status==='critical' && <span className="pos-badge red">Critical</span>}
                        {item.status==='out'      && <span className="pos-badge red">Out</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'logs' && (
            <div>
              {logs.map((l,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:12, padding:'12px 16px', borderBottom:'1px solid var(--pos-bd)' }}>
                  <div style={{ width:36, height:36, borderRadius:8, background:`${lc(l.type)}20`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:16 }}>{le(l.type)}</div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:13, fontWeight:600, color:'var(--pos-t1)' }}>{l.product}</div>
                    <div style={{ fontSize:11, color:'var(--pos-t3)', marginTop:1 }}>{l.ref} · {l.user}</div>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <div style={{ fontSize:14, fontWeight:800, color: l.qty > 0 ? 'var(--pos-green)' : 'var(--pos-red)', fontVariantNumeric:'tabular-nums' }}>{l.qty > 0 ? '+' : ''}{l.qty}</div>
                    <div style={{ fontSize:10, color:'var(--pos-t3)' }}>{l.time}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pos-card" style={{ padding:18, height:'fit-content' }}>
          <div style={{ fontWeight:700, fontSize:13, color:'var(--pos-t1)', marginBottom:14, display:'flex', alignItems:'center', gap:6 }}>
            <IconAlertTriangle size={13} style={{ color:'var(--pos-amber)' } as React.CSSProperties} />
            Stock Adjustment
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:11 }}>
            {[
              {label:'Product',type:'select',opts:['Select product…',...inventory.map(p=>p.name)]},
              {label:'Type',type:'select',opts:['Add stock (receive)','Remove stock (damage)','Count correction','Transfer out']},
              {label:'Quantity',type:'number',value:50},
              {label:'Reason / Note',type:'text',placeholder:'e.g. Received PO-2024-012'},
            ].map((f,i) => (
              <div key={i}>
                <label className="pos-label">{f.label}</label>
                {f.type === 'select'
                  ? <select className="pos-input">{f.opts?.map(o => <option key={o}>{o}</option>)}</select>
                  : <input className="pos-input" type={f.type} defaultValue={f.value} placeholder={f.placeholder} />
                }
              </div>
            ))}
            <button className="pos-btn primary" style={{ width:'100%', justifyContent:'center' }}>Apply Adjustment</button>
          </div>

          <div style={{ marginTop:18, paddingTop:16, borderTop:'1px solid var(--pos-bd)' }}>
            <div className="pos-label" style={{ marginBottom:10 }}>Critical Alerts</div>
            {inventory.filter(p => p.status==='critical'||p.status==='out').map(p => (
              <div key={p.sku} style={{ padding:'9px 11px', background:'var(--pos-red-dim)', border:'1px solid rgba(239,68,68,0.2)', borderRadius:8, marginBottom:7 }}>
                <div style={{ fontSize:12, fontWeight:600, color:'var(--pos-t1)' }}>{p.name}</div>
                <div style={{ fontSize:11, color:'var(--pos-red)', marginTop:2 }}>{p.onHand===0 ? 'Out of stock' : `${p.onHand} units left`}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
