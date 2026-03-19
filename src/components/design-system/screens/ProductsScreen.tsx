'use client';

import { useState } from 'react';

export function ProductsScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      name: 'Wireless Earbuds Pro',
      variants: '3 variants',
      sku: 'WEP-001',
      category: 'Electronics',
      price: '$49.99',
      stock: 284,
      status: 'Active',
    },
    {
      name: 'iPhone 15 Case — Black',
      variants: '1 variant',
      sku: 'CAS-072',
      category: 'Cases',
      price: '$19.99',
      stock: 2,
      status: 'Low stock',
      statusType: 'danger',
    },
    {
      name: 'USB-C Hub 7-in-1',
      variants: '1 variant',
      sku: 'HUB-019',
      category: 'Accessories',
      price: '$44.99',
      stock: 61,
      status: 'Active',
    },
  ];

  const getStatusClass = (status: string, type?: string) => {
    if (type === 'danger') {
      return 'bg-[var(--color-danger-50)] text-[var(--color-danger-400)]';
    }
    if (status === 'Low stock') {
      return 'bg-[var(--color-warning-50)] text-[var(--color-warning-400)]';
    }
    return 'bg-[var(--color-success-50)] text-[var(--color-success-400)]';
  };

  return (
    <div className="space-y-4">
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <div className="flex flex-wrap items-center gap-2.5 mb-3">
          <input
            type="text"
            placeholder="Search by name, SKU, barcode…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-[200px] max-w-[320px] px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-[var(--color-background-secondary)]"
          />
          <select className="px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white">
            <option>All categories</option>
            <option>Electronics</option>
            <option>Accessories</option>
          </select>
          <select className="px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white">
            <option>All status</option>
            <option>Active</option>
            <option>Low stock</option>
            <option>Inactive</option>
          </select>
          <div className="flex-1" />
          <button className="px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-ink-800)] transition-colors">
            + Add product
          </button>
        </div>

        {/* Product Table */}
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-[var(--color-border-tertiary)]">
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 pr-3 w-10">
                <input type="checkbox" />
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 pr-3">
                Product
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 pr-3">
                SKU
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 pr-3">
                Category
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 pr-3">
                Price
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 pr-3">
                Stock
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 pr-3">
                Status
              </th>
              <th className="py-2.5 w-20"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.sku}
                className="border-b border-[var(--color-border-tertiary)] last:border-0 hover:bg-[var(--color-background-secondary)] transition-colors"
              >
                <td className="py-2.5 pr-3">
                  <input type="checkbox" />
                </td>
                <td className="py-2.5 pr-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-md bg-[var(--color-background-secondary)] border border-[var(--color-border-tertiary)]" />
                    <div>
                      <div className="text-[13px] font-medium">{product.name}</div>
                      <div className="text-[11px] text-[var(--color-text-tertiary)]">
                        {product.variants}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-2.5 pr-3 text-[12px] font-mono text-[var(--color-text-secondary)]">
                  {product.sku}
                </td>
                <td className="py-2.5 pr-3 text-[12px]">{product.category}</td>
                <td className="py-2.5 pr-3 text-[13px] font-medium">{product.price}</td>
                <td className="py-2.5 pr-3">
                  <span
                    className={`text-[13px] ${
                      product.statusType === 'danger'
                        ? 'text-[var(--color-danger-400)] font-medium'
                        : ''
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>
                <td className="py-2.5 pr-3">
                  <span
                    className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${getStatusClass(
                      product.status,
                      product.statusType
                    )}`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="py-2.5">
                  <button className="px-2.5 py-1 text-[11px] rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[var(--color-border-tertiary)] text-[12px] text-[var(--color-text-secondary)]">
          <span>Showing 1–20 of 248 products</span>
          <div className="flex gap-1">
            <button className="px-2.5 py-1 rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
              Previous
            </button>
            <button className="px-2.5 py-1 rounded-md bg-[var(--color-ink-900)] text-white border-transparent">
              1
            </button>
            <button className="px-2.5 py-1 rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
              2
            </button>
            <button className="px-2.5 py-1 rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
              3
            </button>
            <button className="px-2.5 py-1 rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Product Form Pattern */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Product form pattern (slide-over panel, not full page)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
                Product name
              </label>
              <input
                type="text"
                defaultValue="Wireless Earbuds Pro"
                className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
                  Base price
                </label>
                <input
                  type="text"
                  defaultValue="$49.99"
                  className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
                  Tax rate
                </label>
                <input
                  type="text"
                  defaultValue="8.25%"
                  className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
                Category
              </label>
              <select className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white">
                <option>Electronics</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
                SKU
              </label>
              <input
                type="text"
                defaultValue="WEP-001"
                className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-[var(--color-text-secondary)] mb-1">
                Barcode (EAN/UPC)
              </label>
              <input
                type="text"
                placeholder="Scan or type…"
                className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white"
              />
            </div>
            <div className="flex gap-2.5 mt-auto pt-2">
              <button className="flex-1 px-4 py-2 text-[13px] font-medium rounded-md bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-ink-800)] transition-colors">
                Save product
              </button>
              <button className="flex-1 px-4 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
