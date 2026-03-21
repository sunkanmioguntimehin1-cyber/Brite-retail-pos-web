'use client';
import { Shell } from '@/components/layout/Shell';
import { DashboardScreen } from '@/components/dashboard/DashboardScreen';
import { POSTerminalScreen } from '@/components/pos/POSTerminalScreen';
import { ProductsScreen } from '@/components/products/ProductsScreen';
import { InventoryScreen } from '@/components/inventory/InventoryScreen';
import { OrdersScreen } from '@/components/orders/OrdersScreen';
import { CustomersScreen, ReportsScreen, SettingsScreen } from '@/components/screens/OtherScreens';

export default function DashboardPage() {
  return (
    <Shell defaultTab="dashboard">
      {(active) => {
        switch (active) {
          case 'dashboard':  return <DashboardScreen />;
          case 'pos':        return <POSTerminalScreen />;
          case 'products':   return <ProductsScreen />;
          case 'inventory':  return <InventoryScreen />;
          case 'orders':     return <OrdersScreen />;
          case 'customers':  return <CustomersScreen />;
          case 'reports':    return <ReportsScreen />;
          case 'settings':   return <SettingsScreen />;
          default:           return <DashboardScreen />;
        }
      }}
    </Shell>
  );
}
