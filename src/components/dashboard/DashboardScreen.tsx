'use client';
import { IconTrendUp, IconTrendDown, IconAlertTriangle, IconPackage, IconReceipt, IconDollar } from '@/components/ui/Icons';

const stats = [
  { label:"Today's Revenue", value:'$12,847', delta:'+18.2% vs yesterday', up:true,  color:'blue'  as const, Icon:IconDollar },
  { label:'Transactions',    value:'284',     delta:'+32 today',           up:true,  color:'green' as const, Icon:IconReceipt },
  { label:'Avg. Basket',     value:'$45.20',  delta:'-3.1% this week',     up:false, color:'amber' as const, Icon:IconPackage },
  { label:'Low Stock Alerts',value:'14',      delta:'3 critical items',    up:false, color:'red'   as const, Icon:IconAlertTriangle },
];

const chartData = [
  {h:'8am',v:12},{h:'9',v:28},{h:'10',v:55},{h:'11',v:82},{h:'12',v:95},
  {h:'1pm',v:78},{h:'2',v:62},{h:'3',v:44},{h:'4',v:71},{h:'5',v:88},{h:'6',v:52},{h:'7',v:30},
];

const topProducts = [
  {name:'Wireless Earbuds Pro',sold:48,pct:90},{name:'USB-C Hub 7-in-1',sold:36,pct:68},
  {name:'Phone Case Premium',sold:29,pct:54},{name:'Wireless Charger Pad',sold:21,pct:40},
];

const lowStock = [
  {name:'iPhone 15 Case — Black',qty:2,reorder:10,critical:true},
  {name:'USB-C Cable 2m',qty:7,reorder:15,critical:false},
  {name:'Wireless Charger Pad',qty:9,reorder:20,critical:false},
];

const recentOrders = [
  {id:'#ORD-00284',customer:'Walk-in',cashier:'Sarah M.',total:'$89.99',  method:'Cash',status:'paid',     time:'2m ago'},
  {id:'#ORD-00283',customer:'James H.',cashier:'James K.',total:'$134.50',method:'Card',status:'paid',     time:'8m ago'},
  {id:'#ORD-00282',customer:'Maria C.',cashier:'Maria L.',total:'$56.00', method:'Card',status:'refunded', time:'15m ago'},
  {id:'#ORD-00281',customer:'Walk-in',cashier:'Sarah M.',total:'$210.00', method:'Card',status:'paid',     time:'23m ago'},
  {id:'#ORD-00280',customer:'Robert K.',cashier:'James K.',total:'$44.99',method:'Cash',status:'voided',   time:'31m ago'},
];

const staff = [
  {name:'Sarah M.',revenue:'$4,840',pct:92,color:'#3B82F6'},
  {name:'James K.',revenue:'$3,420',pct:69,color:'#10B981'},
  {name:'Maria L.',revenue:'$2,587',pct:49,color:'#8B5CF6'},
];

const colorMap = {
  blue:'var(--pos-blue)', green:'var(--pos-green)',
  amber:'var(--pos-amber)', red:'var(--pos-red)',
};

export function DashboardScreen() {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
      {/* Stat cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14 }}>
        {stats.map(s => {
          const c = colorMap[s.color];
          return (
            <div key={s.label} className={`pos-stat ${s.color}`}>
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:10 }}>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:'.07em', textTransform:'uppercase', color:'var(--pos-t3)' }}>{s.label}</div>
                <div style={{ width:30, height:30, borderRadius:7, background:`${c}20`, display:'flex', alignItems:'center', justifyContent:'center', color:c, flexShrink:0 }}>
                  <s.Icon size={13} />
                </div>
              </div>
              <div style={{ fontSize:28, fontWeight:800, color:'var(--pos-t1)', lineHeight:1, fontVariantNumeric:'tabular-nums', marginBottom:5 }}>{s.value}</div>
              <div style={{ fontSize:11, display:'flex', alignItems:'center', gap:3, color: s.up ? 'var(--pos-green)' : s.color === 'red' ? 'var(--pos-t3)' : 'var(--pos-red)' }}>
                {s.up ? <IconTrendUp size={10} /> : <IconTrendDown size={10} />}
                {s.delta}
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart + Low Stock */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 330px', gap:14 }}>
        <div className="pos-card" style={{ padding:'18px 18px 14px' }}>
          <div className="pos-section-head">
            <div>
              <div className="pos-section-title">Hourly Revenue</div>
              <div className="pos-section-sub">Today vs 7-day average</div>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:5 }}>
              <div className="pos-live-dot" />
              <span style={{ fontSize:10, color:'var(--pos-green)', fontWeight:700 }}>Live</span>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'flex-end', gap:5, height:130, padding:'0 2px' }}>
            {chartData.map((d, i) => (
              <div key={d.h} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:5 }}>
                <div
                  className="pos-chart-bar"
                  style={{
                    height:`${d.v}%`,
                    background: d.v === 95
                      ? 'linear-gradient(180deg,var(--pos-blue),rgba(59,130,246,0.4))'
                      : 'linear-gradient(180deg,rgba(59,130,246,0.55),rgba(59,130,246,0.15))',
                    border: d.v === 95 ? '1px solid rgba(59,130,246,0.4)' : 'none',
                    boxShadow: d.v === 95 ? '0 0 10px rgba(59,130,246,0.25)' : 'none',
                    animationDelay:`${i * 40}ms`,
                  }}
                />
                <div style={{ fontSize:9, color:'var(--pos-t3)', fontWeight:500 }}>{d.h}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="pos-card" style={{ padding:18 }}>
          <div className="pos-section-head">
            <div>
              <div className="pos-section-title">Low Stock</div>
              <div className="pos-section-sub">{lowStock.length} items need attention</div>
            </div>
            <span className="pos-badge red">⚠ {lowStock.length}</span>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {lowStock.map(item => (
              <div key={item.name} style={{
                background:'var(--pos-s2)',
                border:`1px solid ${item.critical ? 'rgba(239,68,68,0.25)' : 'var(--pos-bd)'}`,
                borderRadius:8, padding:'10px 12px',
                display:'flex', alignItems:'center', gap:10,
              }}>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:12, fontWeight:600, color:'var(--pos-t1)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{item.name}</div>
                  <div style={{ fontSize:10, color:'var(--pos-t3)', marginTop:2 }}>{item.qty} left · reorder at {item.reorder}</div>
                </div>
                <span className={`pos-badge ${item.critical ? 'red' : 'amber'}`}>{item.critical ? 'Critical' : 'Low'}</span>
              </div>
            ))}
          </div>
          <button className="pos-btn ghost" style={{ width:'100%', marginTop:12, justifyContent:'center', fontSize:11 }}>View all alerts</button>
        </div>
      </div>

      {/* Orders + side panels */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 270px', gap:14 }}>
        <div className="pos-card" style={{ overflow:'hidden' }}>
          <div style={{ padding:'14px 16px', borderBottom:'1px solid var(--pos-bd)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div>
              <div className="pos-section-title">Recent Transactions</div>
              <div className="pos-section-sub">Last 5 orders</div>
            </div>
            <button className="pos-btn ghost sm">View all</button>
          </div>
          <table className="pos-table">
            <thead>
              <tr>
                <th>Order</th><th>Customer</th><th>Cashier</th>
                <th>Method</th><th>Total</th><th>Status</th><th>Time</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(o => (
                <tr key={o.id}>
                  <td><span className="pos-mono" style={{ color:'var(--pos-blue)', fontWeight:700 }}>{o.id}</span></td>
                  <td style={{ fontSize:12 }}>{o.customer}</td>
                  <td style={{ fontSize:12, color:'var(--pos-t2)' }}>{o.cashier}</td>
                  <td><span className={`pos-badge ${o.method === 'Cash' ? 'gray' : 'blue'}`}>{o.method}</span></td>
                  <td style={{ fontWeight:700, fontVariantNumeric:'tabular-nums' }}>{o.total}</td>
                  <td>
                    <span className={`pos-badge ${o.status === 'paid' ? 'green' : o.status === 'refunded' ? 'amber' : 'red'}`}>
                      {o.status}
                    </span>
                  </td>
                  <td style={{ fontSize:11, color:'var(--pos-t3)' }}>{o.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          <div className="pos-card" style={{ padding:16 }}>
            <div className="pos-section-title" style={{ marginBottom:14 }}>Top Products</div>
            {topProducts.map((p, i) => (
              <div key={p.name} style={{ marginBottom:i < topProducts.length - 1 ? 10 : 0 }}>
                <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, marginBottom:5 }}>
                  <span style={{ display:'flex', gap:5, alignItems:'center' }}>
                    <span style={{ fontSize:9, color:'var(--pos-t3)', fontWeight:800 }}>#{i+1}</span>
                    <span style={{ color:'var(--pos-t1)', fontWeight:500, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', maxWidth:130 }}>{p.name}</span>
                  </span>
                  <span style={{ color:'var(--pos-t3)', flexShrink:0 }}>{p.sold}</span>
                </div>
                <div className="pos-prog-track">
                  <div className="pos-prog-fill" style={{ width:`${p.pct}%`, background: i===0 ? 'var(--pos-blue)' : 'rgba(59,130,246,0.4)' }} />
                </div>
              </div>
            ))}
          </div>

          <div className="pos-card" style={{ padding:16 }}>
            <div className="pos-section-title" style={{ marginBottom:14 }}>Staff Performance</div>
            {staff.map(s => (
              <div key={s.name} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                <div style={{ width:28, height:28, borderRadius:'50%', background:`${s.color}30`, color:s.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:9, fontWeight:800, flexShrink:0 }}>
                  {s.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', fontSize:11, marginBottom:4 }}>
                    <span style={{ fontWeight:600 }}>{s.name}</span>
                    <span style={{ color:'var(--pos-t2)', fontVariantNumeric:'tabular-nums' }}>{s.revenue}</span>
                  </div>
                  <div className="pos-prog-track">
                    <div className="pos-prog-fill" style={{ width:`${s.pct}%`, background:s.color }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
