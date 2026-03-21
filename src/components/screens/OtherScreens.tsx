export function CustomersScreen() {
  const customers = [
    {name:'James Harrison',email:'james.h@email.com',phone:'+31 6 1234 5678',visits:24,spent:1840,last:'2 days ago',tier:'Gold'},
    {name:'Emily Davis',email:'emily.d@email.com',phone:'+31 6 4567 8901',visits:41,spent:4200,last:'Today',tier:'Platinum'},
    {name:'Maria Contreras',email:'maria.c@email.com',phone:'+31 6 2345 6789',visits:18,spent:920,last:'Today',tier:'Silver'},
    {name:'Robert Kim',email:'r.kim@email.com',phone:'+31 6 3456 7890',visits:6,spent:340,last:'1 week ago',tier:'Bronze'},
    {name:'David Wilson',email:'d.wilson@email.com',phone:'+31 6 5678 9012',visits:12,spent:680,last:'3 days ago',tier:'Silver'},
  ];
  const tierColor: Record<string,string> = {Platinum:'var(--pos-violet)',Gold:'var(--pos-amber)',Silver:'var(--pos-t2)',Bronze:'#CD7F32'};

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12 }}>
        {[
          {label:'Total Customers',value:'1,284',color:'var(--pos-blue)'},
          {label:'Active (30d)',value:'312',color:'var(--pos-green)'},
          {label:'Avg. Lifetime Value',value:'$428',color:'var(--pos-t1)'},
          {label:'Loyalty Members',value:'847',color:'var(--pos-violet)'},
        ].map(c=>(
          <div key={c.label} className="pos-card-sm" style={{ padding:'14px 16px' }}>
            <div style={{ fontSize:10, color:'var(--pos-t3)', fontWeight:700, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:6 }}>{c.label}</div>
            <div style={{ fontSize:24, fontWeight:800, color:c.color, fontVariantNumeric:'tabular-nums' }}>{c.value}</div>
          </div>
        ))}
      </div>
      <div className="pos-card" style={{ overflow:'hidden' }}>
        <div style={{ padding:'14px 16px', borderBottom:'1px solid var(--pos-bd)', fontWeight:700, fontSize:13 }}>Customer Database</div>
        <table className="pos-table">
          <thead><tr><th>Customer</th><th>Phone</th><th>Tier</th><th>Visits</th><th>Total Spent</th><th>Last Visit</th></tr></thead>
          <tbody>
            {customers.map(c=>(
              <tr key={c.email}>
                <td>
                  <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <div className="pos-avatar" style={{ width:30, height:30, fontSize:10, flexShrink:0 }}>{c.name.split(' ').map(n=>n[0]).join('')}</div>
                    <div>
                      <div style={{ fontWeight:600, fontSize:13 }}>{c.name}</div>
                      <div style={{ fontSize:10, color:'var(--pos-t3)' }}>{c.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{ fontSize:12, color:'var(--pos-t2)' }}>{c.phone}</td>
                <td><span style={{ fontSize:12, fontWeight:800, color:tierColor[c.tier] }}>★ {c.tier}</span></td>
                <td style={{ fontVariantNumeric:'tabular-nums' }}>{c.visits}</td>
                <td style={{ fontWeight:700, color:'var(--pos-green)', fontVariantNumeric:'tabular-nums' }}>${c.spent.toLocaleString()}</td>
                <td style={{ fontSize:12, color:'var(--pos-t3)' }}>{c.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ReportsScreen() {
  const reports = [
    {name:'Daily Sales Summary',desc:'Revenue, transactions, avg basket by day',icon:'📊'},
    {name:'Product Performance',desc:'Top sellers, slow movers, margin analysis',icon:'📦'},
    {name:'Staff Performance',desc:'Sales per cashier, hours, conversions',icon:'👥'},
    {name:'Inventory Valuation',desc:'Stock value at cost and retail price',icon:'🏪'},
    {name:'Cash Drawer Report',desc:'Opening/closing balances per session',icon:'💰'},
    {name:'Customer Analytics',desc:'Retention, lifetime value, frequency',icon:'📈'},
  ];
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
      {reports.map(r=>(
        <div key={r.name} className="pos-card" style={{ padding:20, cursor:'pointer' }}>
          <div style={{ fontSize:32, marginBottom:12 }}>{r.icon}</div>
          <div style={{ fontWeight:700, fontSize:13, color:'var(--pos-t1)', marginBottom:6 }}>{r.name}</div>
          <div style={{ fontSize:11, color:'var(--pos-t3)', lineHeight:1.5, marginBottom:14 }}>{r.desc}</div>
          <button className="pos-btn ghost sm">Generate Report →</button>
        </div>
      ))}
    </div>
  );
}

export function SettingsScreen() {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'220px 1fr', gap:16 }}>
      <div className="pos-card" style={{ padding:8, height:'fit-content' }}>
        {['Store Info','Tax Settings','Payment Methods','Receipts','Users & Roles','Integrations','Backup & Export'].map((item,i)=>(
          <button key={item} className={`pos-nav-item${i===0?' active':''}`} style={{ width:'100%' }}>{item}</button>
        ))}
      </div>
      <div className="pos-card" style={{ padding:24 }}>
        <div style={{ fontWeight:800, fontSize:16, marginBottom:3 }}>Store Information</div>
        <div style={{ color:'var(--pos-t3)', fontSize:12, marginBottom:20 }}>Configure your store details and operating information</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, marginBottom:20 }}>
          {[
            {label:'Store Name',value:'RetailCore Main Store'},
            {label:'Store ID',value:'STR-001'},
            {label:'Address',value:'Kalverstraat 1, Amsterdam'},
            {label:'Phone',value:'+31 20 123 4567'},
            {label:'Email',value:'store@retailcore.com'},
          ].map(f=>(
            <div key={f.label}>
              <label className="pos-label">{f.label}</label>
              <input className="pos-input" defaultValue={f.value} />
            </div>
          ))}
          <div>
            <label className="pos-label">Currency</label>
            <select className="pos-input"><option>EUR (€)</option><option>USD ($)</option><option>GBP (£)</option></select>
          </div>
        </div>
        <div style={{ paddingTop:16, borderTop:'1px solid var(--pos-bd)', display:'flex', justifyContent:'flex-end', gap:10 }}>
          <button className="pos-btn ghost">Cancel</button>
          <button className="pos-btn primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
