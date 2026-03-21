'use client';
import {
  IconDashboard, IconOrders, IconProducts, IconInventory,
  IconCustomers, IconReports, IconSettings, IconPOS, IconStore,
} from '@/components/ui/Icons';

const nav = [
  { id: 'dashboard', label: 'Dashboard',    Icon: IconDashboard },
  { id: 'pos',       label: 'POS Terminal', Icon: IconPOS,       live: true },
  { id: 'orders',    label: 'Orders',       Icon: IconOrders },
  { id: 'products',  label: 'Products',     Icon: IconProducts },
  { section: 'Operations' },
  { id: 'inventory', label: 'Inventory',    Icon: IconInventory },
  { id: 'customers', label: 'Customers',    Icon: IconCustomers },
  { id: 'reports',   label: 'Reports',      Icon: IconReports },
  { section: 'Config' },
  { id: 'settings',  label: 'Settings',     Icon: IconSettings },
] as const;

interface SidebarProps { active?: string; onChange?: (id: string) => void; }

export function Sidebar({ active = 'dashboard', onChange }: SidebarProps) {
  return (
    <aside className="pos-sidebar">
      {/* Logo */}
      <div style={{ padding:'14px 16px 12px', borderBottom:'1px solid var(--pos-bd)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <div className="pos-logo-mark">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4M6 9h.01M9 9h6"/>
            </svg>
          </div>
          <div>
            <div style={{ fontWeight:800, fontSize:14, color:'var(--pos-t1)', letterSpacing:'-.02em' }}>RetailCore</div>
            <div style={{ fontSize:9, color:'var(--pos-t3)', fontWeight:600, letterSpacing:'.04em' }}>POS v2.0</div>
          </div>
        </div>
      </div>

      {/* Store pill */}
      <div style={{ margin:'10px 8px 4px', background:'var(--pos-s2)', border:'1px solid var(--pos-bd)', borderRadius:8, padding:'8px 10px', display:'flex', alignItems:'center', gap:8 }}>
        <div style={{ width:28, height:28, borderRadius:6, background:'var(--pos-blue-dim)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <IconStore size={13} style={{ color:'var(--pos-blue)' } as React.CSSProperties} />
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:11, fontWeight:700, color:'var(--pos-t1)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>Main Store</div>
          <div style={{ fontSize:9, color:'var(--pos-t3)' }}>Amsterdam, NL</div>
        </div>
        <div className="pos-live-dot" />
      </div>

      {/* Nav */}
      <nav style={{ flex:1, overflowY:'auto', padding:'4px 0' }}>
        {nav.map((item, i) => {
          if ('section' in item) return <div key={i} className="pos-nav-section">{item.section}</div>;
          const { id, label, Icon } = item as { id:string; label:string; Icon:React.ComponentType<{size?:number}>; live?:boolean };
          return (
            <button
              key={id}
              className={`pos-nav-item${active === id ? ' active' : ''}`}
              onClick={() => onChange?.(id)}
            >
              <Icon size={14} />
              <span>{label}</span>
              {(item as any).live && (
                <span style={{ marginLeft:'auto', background:'var(--pos-blue)', color:'#fff', fontSize:8, fontWeight:800, padding:'1px 5px', borderRadius:3, letterSpacing:'.04em' }}>
                  LIVE
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div style={{ padding:'12px 16px', borderTop:'1px solid var(--pos-bd)', display:'flex', alignItems:'center', gap:10 }}>
        <div className="pos-avatar" style={{ width:28, height:28, fontSize:10 }}>AM</div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontSize:11, fontWeight:700, color:'var(--pos-t1)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>Admin Manager</div>
          <div style={{ fontSize:9, color:'var(--pos-t3)' }}>Store Admin</div>
        </div>
        <div style={{ width:7, height:7, borderRadius:'50%', background:'var(--pos-green)', flexShrink:0, boxShadow:'0 0 6px var(--pos-green)' }} />
      </div>
    </aside>
  );
}
