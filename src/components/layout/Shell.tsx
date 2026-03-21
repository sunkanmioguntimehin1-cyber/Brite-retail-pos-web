'use client';
import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface ShellProps {
  children: (activeTab: string) => React.ReactNode;
  defaultTab?: string;
}

const PAGE_META: Record<string, [string, string]> = {
  dashboard: ['Dashboard',   'Live overview of your store performance'],
  pos:       ['POS Terminal','Process sales and manage transactions'],
  orders:    ['Orders',      'View and manage all transactions'],
  products:  ['Products',    'Manage your product catalog'],
  inventory: ['Inventory',   'Track stock levels and movements'],
  customers: ['Customers',   'Customer database and purchase history'],
  reports:   ['Reports',     'Sales analytics and performance metrics'],
  settings:  ['Settings',    'Store configuration and preferences'],
};

export function Shell({ children, defaultTab = 'dashboard' }: ShellProps) {
  const [active, setActive] = useState(defaultTab);
  const [title, subtitle] = PAGE_META[active] ?? [active, ''];

  return (
    <div className="pos-app">
      <Sidebar active={active} onChange={setActive} />
      <main className="pos-main">
        <Topbar title={title} subtitle={subtitle} />
        <div className="pos-content">
          <div className="pos-fade-up" key={active}>
            {children(active)}
          </div>
        </div>
      </main>
    </div>
  );
}
