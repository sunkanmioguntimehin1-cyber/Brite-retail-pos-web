'use client';

import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  sku: string;
  price: number;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

export function POSTerminalScreen() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: 'Earbuds Pro', sku: 'WEP-001', price: 49.99, quantity: 1 },
    { id: 2, name: 'USB-C Hub', sku: 'HUB-019', price: 44.99, quantity: 2 },
  ]);

  const products: Product[] = [
    { id: 1, name: 'Earbuds Pro', price: 49.99 },
    { id: 2, name: 'USB-C Hub', price: 44.99 },
    { id: 3, name: 'Phone Case', price: 19.99 },
    { id: 4, name: 'Charger Pad', price: 29.99 },
  ];

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.0825;
  const total = subtotal + tax;

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, sku: `${product.name.slice(0, 3).toUpperCase()}-${product.id.toString().padStart(3, '0')}`, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left: Product Catalog */}
        <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
          <div className="text-[13px] font-medium mb-2.5">Product catalog</div>
          <input
            type="text"
            placeholder="Search or scan barcode…"
            className="w-full px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-[var(--color-background-secondary)] mb-2.5"
          />
          <div className="grid grid-cols-2 gap-2">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                className="bg-white rounded-lg p-2.5 border border-[var(--color-border-tertiary)] text-center cursor-pointer hover:border-[var(--color-brand-400)] hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 bg-[var(--color-background-secondary)] rounded-lg mx-auto mb-1.5 border border-[var(--color-border-tertiary)]" />
                <div className="text-[12px] font-medium leading-tight">{product.name}</div>
                <div className="text-[13px] font-medium text-[var(--color-brand-400)] mt-1">
                  ${product.price.toFixed(2)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Cart */}
        <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4 flex flex-col">
          <div className="text-[13px] font-medium mb-2.5">
            Cart · {cart.reduce((sum, item) => sum + item.quantity, 0)} items
          </div>

          {/* Cart Items */}
          <div className="flex-1 flex flex-col gap-2 mb-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 p-2 bg-[var(--color-background-secondary)] rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-medium truncate">{item.name}</div>
                  <div className="text-[11px] text-[var(--color-text-tertiary)]">{item.sku}</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-5.5 h-5.5 rounded-full border border-[var(--color-border-secondary)] bg-white flex items-center justify-center text-[14px] hover:bg-[var(--color-background-secondary)] transition-colors"
                  >
                    −
                  </button>
                  <span className="text-[13px] font-medium w-4 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-5.5 h-5.5 rounded-full border border-[var(--color-border-secondary)] bg-white flex items-center justify-center text-[14px] hover:bg-[var(--color-background-secondary)] transition-colors"
                  >
                    +
                  </button>
                </div>
                <div className="text-[13px] font-medium w-12 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            {cart.length === 0 && (
              <div className="flex-1 flex items-center justify-center text-[var(--color-text-tertiary)] text-[13px]">
                Cart is empty
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-[var(--color-border-tertiary)] my-3" />

          {/* Totals */}
          <div className="flex flex-col gap-1.5 text-[12px] mb-3">
            <div className="flex justify-between">
              <span className="text-[var(--color-text-secondary)]">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-text-secondary)]">Tax (8.25%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[15px] font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Payment Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button className="px-3 py-2.5 text-[12px] rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
              Cash
            </button>
            <button className="px-3 py-2.5 text-[12px] font-medium rounded-md bg-[var(--color-ink-900)] text-white hover:bg-[var(--color-ink-800)] transition-colors">
              Charge ${total.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
