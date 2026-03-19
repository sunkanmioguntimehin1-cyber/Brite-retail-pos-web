export function OrdersScreen() {
  const orders = [
    { order: '#ORD-00127', customer: 'Walk-in', cashier: 'Sarah M.', items: 3, payment: 'Cash', total: '$89.99', time: '14:32', status: 'Paid', statusType: 'success' },
    { order: '#ORD-00126', customer: 'James H.', cashier: 'James K.', items: 1, payment: 'Card', total: '$34.50', time: '14:27', status: 'Paid', statusType: 'success' },
    { order: '#ORD-00125', customer: 'Maria L.', cashier: 'Maria L.', items: 4, payment: 'Card', total: '$156.00', time: '14:21', status: 'Refunded', statusType: 'warning' },
    { order: '#ORD-00124', customer: 'Walk-in', cashier: 'Sarah M.', items: 2, payment: 'Cash', total: '$67.50', time: '14:15', status: 'Paid', statusType: 'success' },
    { order: '#ORD-00123', customer: 'Robert K.', cashier: 'James K.', items: 1, payment: 'Card', total: '$49.99', time: '14:08', status: 'Voided', statusType: 'danger' },
  ];

  const getPaymentClass = (payment: string) => {
    if (payment === 'Cash') {
      return 'bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)]';
    }
    return 'bg-[var(--color-brand-50)] text-[var(--color-brand-400)]';
  };

  const getStatusClass = (type?: string) => {
    if (type === 'danger') {
      return 'bg-[var(--color-danger-50)] text-[var(--color-danger-400)]';
    }
    if (type === 'warning') {
      return 'bg-[var(--color-warning-50)] text-[var(--color-warning-400)]';
    }
    return 'bg-[var(--color-success-50)] text-[var(--color-success-400)]';
  };

  return (
    <div className="space-y-4">
      {/* Filter Bar */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <input
            type="text"
            placeholder="Search by order #, customer…"
            className="flex-1 min-w-[200px] max-w-[280px] px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-[var(--color-background-secondary)]"
          />
          <select className="px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white">
            <option>All status</option>
            <option>Completed</option>
            <option>Refunded</option>
            <option>Voided</option>
          </select>
          <select className="px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] bg-white">
            <option>Today</option>
            <option>This week</option>
            <option>This month</option>
            <option>Custom…</option>
          </select>
          <div className="flex-1" />
          <button className="px-3 py-2 text-[13px] rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
            Export
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-[var(--color-background-secondary)]">
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Order
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Customer
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Cashier
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Items
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Payment
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Total
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Time
              </th>
              <th className="text-[11px] font-medium text-[var(--color-text-secondary)] uppercase tracking-wider py-2.5 px-3">
                Status
              </th>
              <th className="py-2.5 px-3 w-20"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.order}
                className="border-t border-[var(--color-border-tertiary)] last:border-0 hover:bg-[var(--color-background-secondary)] transition-colors"
              >
                <td className="py-2.5 px-3">
                  <span className="text-[12px] text-[var(--color-brand-400)] font-medium">
                    {order.order}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[12px]">{order.customer}</td>
                <td className="py-2.5 px-3 text-[12px]">{order.cashier}</td>
                <td className="py-2.5 px-3 text-[12px]">{order.items}</td>
                <td className="py-2.5 px-3">
                  <span
                    className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${getPaymentClass(
                      order.payment
                    )}`}
                  >
                    {order.payment}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-[13px] font-medium">{order.total}</td>
                <td className="py-2.5 px-3 text-[11px] text-[var(--color-text-tertiary)]">
                  {order.time}
                </td>
                <td className="py-2.5 px-3">
                  <span
                    className={`px-2 py-0.5 text-[11px] font-medium rounded-full ${getStatusClass(
                      order.statusType
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="py-2.5 px-3">
                  <button className="px-2.5 py-1 text-[11px] rounded-md border border-[var(--color-border-secondary)] hover:bg-[var(--color-background-secondary)] transition-colors">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Detail Pattern */}
      <div className="bg-white rounded-xl border border-[var(--color-border-tertiary)] p-4">
        <h3 className="text-[var(--color-text-secondary)] text-[11px] font-medium uppercase tracking-wider mb-3">
          Order detail view pattern
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-3 rounded-lg border border-[var(--color-border-tertiary)]">
            <div className="text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
              Order
            </div>
            <div className="text-[15px] font-medium text-[var(--color-brand-400)]">#ORD-00127</div>
          </div>
          <div className="p-3 rounded-lg border border-[var(--color-border-tertiary)]">
            <div className="text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
              Customer
            </div>
            <div className="text-[15px] font-medium">Walk-in</div>
          </div>
          <div className="p-3 rounded-lg border border-[var(--color-border-tertiary)]">
            <div className="text-[11px] text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
              Cashier
            </div>
            <div className="text-[15px] font-medium">Sarah M.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
