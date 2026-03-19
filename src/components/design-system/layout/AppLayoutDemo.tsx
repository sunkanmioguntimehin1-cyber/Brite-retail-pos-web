'use client';

import { useState } from 'react';

export function AppLayoutDemo() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navItems = [
    { icon: '📊', label: 'Dashboard', active: true },
    { icon: '🧾', label: 'Orders' },
    { icon: '📦', label: 'Products' },
    { label: 'Operations', section: true },
    { icon: '📋', label: 'Inventory' },
    { icon: '👥', label: 'Customers' },
    { icon: '📈', label: 'Reports' },
    { label: 'Config', section: true },
    { icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className="space-y-4">
      {/* Layout Rules Card */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Layout rules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px]">
          <div className="flex flex-col gap-1.5">
            <div>
              <strong className="font-medium">Sidebar</strong> — 220px fixed, collapses to 56px
              (icon-only) on ≤ 1280px. Always visible on desktop, drawer on mobile.
            </div>
            <div>
              <strong className="font-medium">Topbar</strong> — 56px tall, sticky. Contains: page
              title, global search, notifications, user avatar.
            </div>
            <div>
              <strong className="font-medium">Content area</strong> — fluid, max-width 1400px,
              24px padding. Page-level scroll only.
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div>
              <strong className="font-medium">Breakpoints</strong> — 1280px (sidebar collapses),
              1024px (2-col → 1-col grids), 768px (mobile layout).
            </div>
            <div>
              <strong className="font-medium">Grid system</strong> — 12-column grid with 24px
              gutters. Use Tailwind&apos;s <code className="text-[11px] bg-[var(--color-background-secondary)] px-1 py-0.5 rounded">grid-cols-12</code>.
            </div>
            <div>
              <strong className="font-medium">Z-index layers</strong> — content (0), sticky headers
              (10), dropdowns (100), modals (200), toasts (300).
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Shell Demo */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-tertiary)]">
          <h3 className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider">
            Interactive Shell Demo
          </h3>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="px-3 py-1 text-[11px] bg-[var(--color-background-secondary)] hover:bg-[var(--color-border-tertiary)] rounded-md transition-colors"
          >
            {sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          </button>
        </div>

        <div className="flex h-[400px] border-t border-[var(--color-border-tertiary)]">
          {/* Sidebar */}
          <div
            className={`
              bg-[var(--color-background-secondary)] border-r border-[var(--color-border-tertiary)]
              flex flex-col sidebar-transition
              ${sidebarCollapsed ? 'w-14' : 'w-[200px]'}
            `}
          >
            {/* Logo */}
            <div className="p-3 flex items-center gap-2 border-b border-[var(--color-border-tertiary)]">
              <div className="w-7 h-7 rounded-lg bg-[var(--color-ink-900)] flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 rounded bg-white" />
              </div>
              {!sidebarCollapsed && (
                <span className="text-[14px] font-medium">RetailCore</span>
              )}
            </div>

            {/* Navigation */}
            <div className="flex-1 py-2 overflow-y-auto">
              {navItems.map((item, i) =>
                item.section ? (
                  !sidebarCollapsed && (
                    <div
                      key={i}
                      className="px-4 py-2 text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-wider font-medium"
                    >
                      {item.label}
                    </div>
                  )
                ) : (
                  <div
                    key={i}
                    className={`
                      flex items-center gap-2.5 px-4 py-2.25 cursor-pointer transition-colors
                      ${item.active
                        ? 'bg-white text-[var(--color-text-primary)] font-medium border-r-2 border-[var(--color-brand-400)]'
                        : 'text-[var(--color-text-secondary)] hover:bg-white hover:text-[var(--color-text-primary)]'
                      }
                    `}
                  >
                    <span className="text-sm">{item.icon}</span>
                    {!sidebarCollapsed && (
                      <span className="text-[13px]">{item.label}</span>
                    )}
                  </div>
                )
              )}
            </div>

            {/* User */}
            <div className="p-3 border-t border-[var(--color-border-tertiary)] flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-400)] flex items-center justify-center text-[11px] font-medium flex-shrink-0">
                AM
              </div>
              {!sidebarCollapsed && (
                <div>
                  <div className="text-[12px] font-medium">Admin User</div>
                  <div className="text-[10px] text-[var(--color-text-tertiary)]">Store Manager</div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            {/* Topbar */}
            <div className="h-14 px-4 flex items-center gap-3 border-b border-[var(--color-border-tertiary)] bg-white">
              <div className="text-[14px] font-medium">Dashboard</div>
              <div className="flex-1 max-w-[280px]">
                <input
                  type="text"
                  placeholder="Search products, orders…"
                  className="w-full px-3 py-1.5 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-[var(--color-background-secondary)]"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="relative cursor-pointer p-1">
                  <span className="text-lg">🔔</span>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[var(--color-danger-400)] rounded-full border border-white" />
                </div>
                <div className="w-7 h-7 rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-400)] flex items-center justify-center text-[11px] font-medium">
                  AM
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 bg-[var(--color-background-secondary)] overflow-y-auto">
              <div className="grid grid-cols-4 gap-2.5 mb-3">
                {[
                  { title: 'Revenue today', value: '$4,821', delta: '+12.4%', up: true },
                  { title: 'Orders', value: '127', delta: '+8 this hour', up: true },
                  { title: 'Avg. basket', value: '$37.96', delta: '-3%', up: false },
                  { title: 'Low stock', value: '14', delta: '3 critical', warning: true },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-white rounded-lg p-3 border border-[var(--color-border-tertiary)]"
                  >
                    <div className="text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
                      {card.title}
                    </div>
                    <div
                      className="text-[26px] font-medium leading-none mb-1"
                      style={{ color: card.warning ? 'var(--color-warning-400)' : undefined }}
                    >
                      {card.value}
                    </div>
                    <div
                      className="text-[12px]"
                      style={{ color: card.up ? 'var(--color-success-400)' : card.warning ? 'var(--color-warning-400)' : 'var(--color-danger-400)' }}
                    >
                      {card.delta}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="bg-white rounded-lg p-3 border border-[var(--color-border-tertiary)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[13px] font-medium">Sales today by hour</div>
                  <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[var(--color-brand-50)] text-[var(--color-brand-400)]">
                    Live
                  </span>
                </div>
                <SalesChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SalesChart() {
  const hours = [
    { label: '9am', value: 30 },
    { label: '10', value: 55 },
    { label: '11', value: 80 },
    { label: '12', value: 95 },
    { label: '1pm', value: 70 },
    { label: '2', value: 60 },
    { label: '3', value: 45 },
    { label: '4', value: 72 },
    { label: '5', value: 88 },
    { label: '6', value: 50 },
  ];

  return (
    <div className="flex items-end gap-2 h-28 px-1">
      {hours.map((h, i) => (
        <div key={h.label} className="flex-1 flex flex-col items-center gap-1">
          <div
            className="w-full rounded-t-sm bg-[var(--color-brand-400)] opacity-80 hover:opacity-100 transition-opacity chart-bar"
            style={{
              height: `${h.value}%`,
              animationDelay: `${i * 50}ms`,
            }}
          />
          <div className="text-[10px] text-[var(--color-text-tertiary)]">{h.label}</div>
        </div>
      ))}
    </div>
  );
}
