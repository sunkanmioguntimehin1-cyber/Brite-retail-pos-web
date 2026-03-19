'use client';

import { useState } from 'react';
import { TabNavigation, TabId } from '@/components/design-system/TabNavigation';
import { ColorPalette } from '@/components/design-system/tokens/ColorPalette';
import { AppLayoutDemo } from '@/components/design-system/layout/AppLayoutDemo';
import { DashboardScreen } from '@/components/design-system/screens/DashboardScreen';
import { ProductsScreen } from '@/components/design-system/screens/ProductsScreen';
import { POSTerminalScreen } from '@/components/design-system/screens/POSTerminalScreen';
import { InventoryScreen } from '@/components/design-system/screens/InventoryScreen';
import { OrdersScreen } from '@/components/design-system/screens/OrdersScreen';
import { ComponentsLibrary } from '@/components/design-system/components/ComponentsLibrary';
import { UXPatterns } from '@/components/design-system/patterns/UXPatterns';

const tabContent: Record<TabId, React.ReactNode> = {
  tokens: <ColorPalette />,
  layout: <AppLayoutDemo />,
  dashboard: <DashboardScreen />,
  products: <ProductsScreen />,
  pos: <POSTerminalScreen />,
  inventory: <InventoryScreen />,
  orders: <OrdersScreen />,
  components: <ComponentsLibrary />,
  patterns: <UXPatterns />,
};

const tabTitles: Record<TabId, { title: string; subtitle: string }> = {
  tokens: {
    title: 'Design Tokens',
    subtitle: 'The foundation of every UI decision',
  },
  layout: {
    title: 'App Layout',
    subtitle: 'Shell, sidebar navigation, and topbar anatomy',
  },
  dashboard: {
    title: 'Dashboard Screen',
    subtitle: 'Overview, KPIs, charts, and alert widgets',
  },
  products: {
    title: 'Products Screen',
    subtitle: 'Catalog list view, filters, and add/edit flows',
  },
  pos: {
    title: 'POS Terminal Screen',
    subtitle: 'Mobile app screen — split layout: product grid + cart',
  },
  inventory: {
    title: 'Inventory Screen',
    subtitle: 'Stock levels, adjustments, and movement log',
  },
  orders: {
    title: 'Orders Screen',
    subtitle: 'Transaction history, detail view, refund flow',
  },
  components: {
    title: 'Component Library',
    subtitle: 'Every badge, button, form control, and notification style',
  },
  patterns: {
    title: 'UX Patterns',
    subtitle: 'Empty states, skeletons, confirmations, and interaction rules',
  },
};

export default function UIDesignPage() {
  const [activeTab, setActiveTab] = useState<TabId>('tokens');

  return (
    <div className="min-h-screen bg-[var(--color-background-secondary)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-border-tertiary)] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-widest mb-0.5">
                RetailCore POS — Next.js UI Design System
              </div>
              <h1 className="text-[22px] font-medium leading-tight">UI Standards & Component Guide</h1>
              <p className="text-[14px] text-[var(--color-text-secondary)] mt-0.5">
                A complete design system covering tokens, layouts, screens, and interaction patterns.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="px-2 py-1 text-[11px] rounded-full bg-[var(--color-success-50)] text-[var(--color-success-400)] font-medium">
                v1.0.0
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Section Header */}
        <div className="flex items-baseline gap-2.5 mb-4">
          <h2 className="text-[20px] font-medium">{tabTitles[activeTab].title}</h2>
          <span className="text-[13px] text-[var(--color-text-secondary)]">
            {tabTitles[activeTab].subtitle}
          </span>
        </div>

        {/* Tab Content */}
        <div key={activeTab} className="tab-content">
          {tabContent[activeTab]}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 py-4 border-t border-[var(--color-border-tertiary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-[11px] text-[var(--color-text-tertiary)]">
            <span>RetailCore POS — Next.js UI Design System</span>
            <span>Built with Tailwind CSS + Next.js</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
