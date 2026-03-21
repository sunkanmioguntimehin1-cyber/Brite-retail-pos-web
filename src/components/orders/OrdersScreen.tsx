'use client';
import { useState } from 'react';
import { IconSearch, IconDownload, IconReceipt } from '@/components/ui/Icons';

const orders = [
  {id:'#ORD-00284',customer:'Walk-in', cashier:'Sarah M.',items:3,method:'Cash',total:89.99, status:'paid',    time:'14:32',date:'Today'},
  {id:'#ORD-00283',customer:'James H.',cashier:'James K.',items:1,method:'Card',total:134.50,status:'paid',    time:'14:27',date:'Today'},
  {id:'#ORD-00282',customer:'Maria C.',cashier:'Maria L.',items:5,method:'Card',total:56.00, status:'refunded',time:'14:16',date:'Today'},
  {id:'#ORD-00281',customer:'Walk-in', cashier:'Sarah M.',items:2,method:'Card',total:210.00,status:'paid',    time:'13:55',date:'Today'},
  {id:'#ORD-00280',customer:'Robert K.',cashier:'James K.',items:1,method:'Cash',total:44.99,status:'voided',  time:'13:40',date:'Today'},
  {id:'#ORD-00279',customer:'Emily D.',cashier:'Sarah M.',items:4,method:'Card',total:189.96,status:'paid',    time:'13:22',date:'Today'},
];

export function OrdersScreen() {
  const [search, setSearch] = useState('');
  const [statusF, setStatusF] = useState('All');
  const filtered = orders.filter(o =>
    (statusF === 'All' || o.status === statusF.toLowerCase()) &&
    (o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase()))
  );
  const revenue   = filtered.filter(o=>o.status==='paid').reduce((s,o)=>s+o.total,0);
  const refunded  = filtered.filter(o=>o.status==='refunded').reduce((s,o)=>s+o.total,0);

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
        {[
          {label:"Revenue (today)", value:`$${revenue.toFixed(2)}`, color:'var(--pos-green)'},
          {label:'Transactions',    value:String(filtered.filter(o=>o.status==='paid').length), color:'var(--pos-blue)'},
          {label:'Refunded',        value:`$${refunded.toFixed(2)}`, color:'var(--pos-amber)'},
          {label:'Voided',          value:String(filtered.filter(o=>o.status==='voided').length), color:'var(--pos-red)'},
        ].map(c => (
          <div key={c.label} className="pos-card-sm" style={{ padding:'14px 16px' }}>
            <div style={{ fontSize:10, color:'var(--pos-t3)', fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:6 }}>{c.label}</div>
            <div style={{ fontSize:22, fontWeight:800, color:c.color, fontVariantNumeric:'tabular-nums' }}>{c.value}</div>
          </div>
        ))}
      </div>

      <div className="pos-card" style={{ overflow:'hidden' }}>
        <div style={{ padding:'13px 16px', display:'flex', alignItems:'center', gap:10, borderBottom:'1px solid var(--pos-bd)', flexWrap:'wrap' }}>
          <div className="pos-search" style={{ maxWidth:260 }}>
            <IconSearch size={14} />
            <input className="pos-input" placeholder="Search order #, customer…" value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
          <select className="pos-input" style={{ width:'auto' }} value={statusF} onChange={e=>setStatusF(e.target.value)}>
            {['All','Paid','Refunded','Voided'].map(s=><option key={s}>{s}</option>)}
          </select>
          <select className="pos-input" style={{ width:'auto' }}>
            {['Today','Yesterday','This week','This month'].map(d=><option key={d}>{d}</option>)}
          </select>
          <div style={{ flex:1 }} />
          <button className="pos-btn ghost" style={{ gap:5 }}><IconDownload size={12} /> Export CSV</button>
        </div>

        <div style={{ overflowX:'auto' }}>
          <table className="pos-table">
            <thead>
              <tr><th>Order ID</th><th>Customer</th><th>Cashier</th><th>Items</th><th>Method</th><th>Total</th><th>Time</th><th>Status</th><th style={{ width:50 }}></th></tr>
            </thead>
            <tbody>
              {filtered.map(o => (
                <tr key={o.id}>
                  <td><span className="pos-mono" style={{ color:'var(--pos-blue)', fontWeight:700 }}>{o.id}</span></td>
                  <td style={{ fontWeight:500 }}>{o.customer}</td>
                  <td style={{ color:'var(--pos-t2)', fontSize:12 }}>{o.cashier}</td>
                  <td><span style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:22, height:22, borderRadius:'50%', background:'var(--pos-s2)', fontSize:11, fontWeight:700 }}>{o.items}</span></td>
                  <td><span className={`pos-badge ${o.method==='Cash' ? 'gray' : 'blue'}`}>{o.method}</span></td>
                  <td style={{ fontWeight:700, fontVariantNumeric:'tabular-nums', fontSize:14 }}>${o.total.toFixed(2)}</td>
                  <td style={{ fontSize:12, color:'var(--pos-t3)' }}>{o.time}</td>
                  <td>
                    {o.status==='paid'     && <span className="pos-badge green">Paid</span>}
                    {o.status==='refunded' && <span className="pos-badge amber">Refunded</span>}
                    {o.status==='voided'   && <span className="pos-badge red">Voided</span>}
                  </td>
                  <td><button className="pos-btn ghost sm icon"><IconReceipt size={11} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ padding:'10px 16px', borderTop:'1px solid var(--pos-bd)', background:'var(--pos-s2)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ fontSize:12, color:'var(--pos-t3)' }}>Showing {filtered.length} of {orders.length} orders</span>
          <div style={{ display:'flex', gap:4 }}>
            {['← Prev','1','2','3','Next →'].map((p,i) => (
              <button key={p} className="pos-btn ghost sm" style={{ minWidth: p.length < 4 ? 32 : undefined, justifyContent:'center', background: i===1 ? 'var(--pos-blue)' : undefined, color: i===1 ? '#fff' : undefined }}>{p}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
