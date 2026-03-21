'use client';
import { IconSearch, IconBell, IconRefresh } from '@/components/ui/Icons';

interface TopbarProps { title: string; subtitle?: string; actions?: React.ReactNode; }

export function Topbar({ title, subtitle, actions }: TopbarProps) {
  return (
    <header className="pos-topbar">
      <div style={{ flexShrink:0 }}>
        <div style={{ fontSize:14, fontWeight:800, color:'var(--pos-t1)', letterSpacing:'-.01em' }}>{title}</div>
        {subtitle && <div style={{ fontSize:10, color:'var(--pos-t3)', marginTop:1 }}>{subtitle}</div>}
      </div>

      <div className="pos-search" style={{ maxWidth:280 }}>
        <IconSearch size={14} />
        <input className="pos-input" placeholder="Search products, orders…" />
      </div>

      {actions && <div style={{ display:'flex', alignItems:'center', gap:8 }}>{actions}</div>}

      <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:8 }}>
        <button className="pos-btn ghost icon" title="Refresh"><IconRefresh size={14} /></button>
        <button className="pos-btn ghost icon" style={{ position:'relative' }} title="Notifications">
          <IconBell size={14} />
          <div className="pos-notif-badge">3</div>
        </button>
        <div style={{ width:1, height:20, background:'var(--pos-bd)' }} />
        <div className="pos-avatar" style={{ cursor:'pointer' }}>AM</div>
      </div>
    </header>
  );
}
