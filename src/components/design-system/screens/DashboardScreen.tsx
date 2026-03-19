export function DashboardScreen() {
  const topSellers = [
    { name: 'Wireless Earbuds Pro', category: 'Electronics · SKU 001', sold: 48, revenue: '$2,400' },
    { name: 'USB-C Hub 7-in-1', category: 'Accessories · SKU 019', sold: 36, revenue: '$1,620' },
    { name: 'Phone Case Premium', category: 'Cases · SKU 072', sold: 29, revenue: '$580' },
  ];

  const staffPerformance = [
    { name: 'Sarah M.', amount: '$1,840', percent: 85 },
    { name: 'James K.', amount: '$1,420', percent: 65 },
    { name: 'Maria L.', amount: '$1,100', percent: 50 },
  ];

  const lowStockAlerts = [
    { name: 'iPhone 15 Case — Black', left: 2, reorder: 10, critical: true },
    { name: 'USB-C Cable 2m', left: 7, reorder: 15, critical: false },
    { name: 'Wireless Charger Pad', left: 9, reorder: 20, critical: false },
  ];

  const recentTransactions = [
    { order: '#ORD-00127', cashier: 'Sarah M.', time: '2m ago', total: '$89.99', status: 'Paid' },
    { order: '#ORD-00126', cashier: 'James K.', time: '5m ago', total: '$34.50', status: 'Paid' },
    { order: '#ORD-00125', cashier: 'Maria L.', time: '11m ago', total: '$156.00', status: 'Refunded' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        {/* Top Sellers */}
        <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
          <div className="text-[13px] font-medium mb-3">Top sellers today</div>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider pb-2">
                  Product
                </th>
                <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider pb-2">
                  Sold
                </th>
                <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider pb-2">
                  Revenue
                </th>
              </tr>
            </thead>
            <tbody>
              {topSellers.map((item) => (
                <tr key={item.name} className="border-t border-[var(--color-border-tertiary)]">
                  <td className="py-2.5">
                    <div className="text-[13px] font-medium">{item.name}</div>
                    <div className="text-[11px] text-[var(--color-text-tertiary)]">{item.category}</div>
                  </td>
                  <td className="text-[13px] py-2.5">{item.sold}</td>
                  <td className="text-[13px] font-medium py-2.5">{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Staff Performance */}
        <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
          <div className="text-[13px] font-medium mb-3">Staff performance today</div>
          <div className="flex flex-col gap-3">
            {staffPerformance.map((staff) => (
              <div key={staff.name}>
                <div className="flex justify-between text-[12px] mb-1">
                  <span>{staff.name}</span>
                  <span className="font-medium">{staff.amount}</span>
                </div>
                <div className="h-1.5 bg-[var(--color-border-tertiary)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[var(--color-brand-400)] transition-all duration-500"
                    style={{ width: `${staff.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        {/* Low Stock Alerts */}
        <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[13px] font-medium">Low stock alerts</div>
            <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-[var(--color-warning-50)] text-[var(--color-warning-400)]">
              14 items
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {lowStockAlerts.map((item) => (
              <div
                key={item.name}
                className="flex items-start gap-2.5 p-3 rounded-lg border border-[var(--color-border-tertiary)]"
              >
                <div
                  className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                  style={{
                    backgroundColor: item.critical
                      ? 'var(--color-danger-400)'
                      : 'var(--color-warning-400)',
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium truncate">{item.name}</div>
                  <div className="text-[11px] text-[var(--color-text-secondary)]">
                    {item.left} units left · Reorder point: {item.reorder}
                  </div>
                </div>
                <button className="px-2.5 py-1 text-[11px] rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
                  Order
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
          <div className="text-[13px] font-medium mb-3">Recent transactions</div>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider pb-2">
                  Order
                </th>
                <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider pb-2">
                  Cashier
                </th>
                <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider pb-2">
                  Time
                </th>
                <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider pb-2">
                  Total
                </th>
                <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider pb-2">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr key={tx.order} className="border-t border-[var(--color-border-tertiary)]">
                  <td className="py-2.5">
                    <span className="text-[12px] text-[var(--color-brand-400)] font-medium">
                      {tx.order}
                    </span>
                  </td>
                  <td className="text-[12px] py-2.5">{tx.cashier}</td>
                  <td className="text-[12px] text-[var(--color-text-tertiary)] py-2.5">{tx.time}</td>
                  <td className="text-[12px] font-medium py-2.5">{tx.total}</td>
                  <td className="py-2.5">
                    <span
                      className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${
                        tx.status === 'Paid'
                          ? 'bg-[var(--color-success-50)] text-[var(--color-success-400)]'
                          : 'bg-[var(--color-warning-50)] text-[var(--color-warning-400)]'
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
