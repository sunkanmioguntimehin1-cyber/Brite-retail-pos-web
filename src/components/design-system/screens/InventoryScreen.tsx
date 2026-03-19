'use client';

import { useState } from 'react';

export function InventoryScreen() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const inventory = [
    { name: 'Wireless Earbuds Pro', sku: 'WEP-001', onHand: 284, reserved: 12, available: 272, reorder: 20, status: 'In stock', statusType: 'success' },
    { name: 'iPhone 15 Case — Black', sku: 'CAS-072', onHand: 2, reserved: 0, available: 2, reorder: 10, status: 'Critical', statusType: 'danger' },
    { name: 'USB-C Hub 7-in-1', sku: 'HUB-019', onHand: 61, reserved: 5, available: 56, reorder: 15, status: 'In stock', statusType: 'success' },
    { name: 'Wireless Charger Pad', sku: 'CHR-044', onHand: 9, reserved: 0, available: 9, reorder: 20, status: 'Low stock', statusType: 'warning' },
  ];

  const getStatusClass = (type?: string, status?: string) => {
    if (type === 'danger') {
      return 'bg-[var(--color-danger-50)] text-[var(--color-danger-400)]';
    }
    if (type === 'warning') {
      return 'bg-[var(--color-warning-50)] text-[var(--color-warning-400)]';
    }
    return 'bg-[var(--color-success-50)] text-[var(--color-success-400)]';
  };

  const getStockClass = (type?: string) => {
    if (type === 'danger') {
      return 'text-[var(--color-danger-400)] font-medium';
    }
    if (type === 'warning') {
      return 'text-[var(--color-warning-400)] font-medium';
    }
    return '';
  };

  return (
    <div className="space-y-4">
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <input
            type="text"
            placeholder="Search product or SKU…"
            className="flex-1 min-w-[200px] max-w-[280px] px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-[var(--color-background-secondary)]"
          />
          <select className="px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white">
            <option>All stock status</option>
            <option>Low stock</option>
            <option>Out of stock</option>
            <option>In stock</option>
          </select>
          <div className="flex-1" />
          <button className="px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
            Export CSV
          </button>
          <button
            onClick={() => setDrawerOpen(true)}
            className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-ink-800)] transition-colors"
          >
            + Adjust stock
          </button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-[var(--color-background-secondary)]">
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Product
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                SKU
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                On hand
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Reserved
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Available
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Reorder point
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Status
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Last updated
              </th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr
                key={item.sku}
                className={`border-t border-[var(--color-border-tertiary)] ${
                  item.statusType !== 'success' ? 'bg-[var(--color-danger-50)]/30' : ''
                }`}
              >
                <td className="py-2.5 px-3 text-[13px] font-medium">{item.name}</td>
                <td className="py-2.5 px-3 text-[11px] font-mono text-[var(--color-text-secondary)]">
                  {item.sku}
                </td>
                <td className={`py-2.5 px-3 text-[13px] ${getStockClass(item.statusType)}`}>
                  {item.onHand}
                </td>
                <td className="py-2.5 px-3 text-[13px] text-[var(--color-text-secondary)]">
                  {item.reserved}
                </td>
                <td className={`py-2.5 px-3 text-[13px] font-medium ${getStockClass(item.statusType)}`}>
                  {item.available}
                </td>
                <td className="py-2.5 px-3 text-[12px] text-[var(--color-text-tertiary)]">
                  {item.reorder}
                </td>
                <td className="py-2.5 px-3">
                  <span
                    className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${getStatusClass(
                      item.statusType,
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[11px] text-[var(--color-text-tertiary)]">
                  {item.sku === 'CAS-072' ? '14m ago' : item.sku === 'HUB-019' ? '1h ago' : item.sku === 'CHR-044' ? '3h ago' : '2m ago'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stock Adjustment Drawer */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Stock adjustment drawer pattern
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
                Adjustment type
              </label>
              <select className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white">
                <option>Add stock (receive)</option>
                <option>Remove stock (damage)</option>
                <option>Correction (count)</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
                Quantity
              </label>
              <input
                type="number"
                defaultValue={50}
                className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
                Reason / note
              </label>
              <input
                type="text"
                placeholder="e.g. Received PO-2024-012"
                className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white"
              />
            </div>
            <button className="mt-auto px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-ink-800)] transition-colors">
              Apply adjustment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
