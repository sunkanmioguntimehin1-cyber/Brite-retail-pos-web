'use client';

import { useState } from 'react';

const tabs = [
  { id: 'tokens', label: 'Design Tokens', icon: '🎨' },
  { id: 'layout', label: 'App Layout', icon: '📐' },
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'products', label: 'Products', icon: '📦' },
  { id: 'pos', label: 'POS Terminal', icon: '💳' },
  { id: 'inventory', label: 'Inventory', icon: '📋' },
  { id: 'orders', label: 'Orders', icon: '🧾' },
  { id: 'components', label: 'Components', icon: '🧩' },
  { id: 'patterns', label: 'UX Patterns', icon: '✨' },
] as const;

type TabId = typeof tabs[number]['id'];

interface TabNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="flex flex-wrap gap-1.5 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-3.5 py-1.5 rounded-md text-[13px] font-medium transition-all duration-150
            border border-[var(--color-border-secondary)]
            ${activeTab === tab.id
              ? 'bg-[var(--color-ink-900)] text-white border-transparent'
              : 'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-text-primary)]'
            }
          `}
        >
          <span className="mr-1.5">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export type { TabId };
