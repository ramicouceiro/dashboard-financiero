import BalanceChart from "@/components/Dashboard/BalanceChart";
import DashboardCard from "@/components/Dashboard/DashboardCard";
import DashboardExpenseCard from "@/components/Dashboard/DashboardExpenseCard";
import DashboardIncomeCard from "@/components/Dashboard/DashboardIncomeCard";
import DashboardTotalAmountCard from "@/components/Dashboard/DashboardTotalAmountCard";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Dashboard Financiero',
  description: 'Visualiza y gestiona tus finanzas personales con nuestro dashboard interactivo.',
  keywords: ['finanzas personales', 'dashboard', 'gestión financiera', 'ingresos', 'gastos'],
  authors: [{ name: 'Tu Nombre' }],
  creator: 'Tu Nombre o Nombre de tu Empresa',
  publisher: 'Nombre de tu Empresa',
  openGraph: {
    title: 'Dashboard Financiero',
    description: 'Gestiona tus finanzas personales de manera eficiente',
    url: 'https://tudominio.com',
    siteName: 'Nombre de tu Aplicación',
    images: [
      {
        url: 'https://tudominio.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard Financiero',
    description: 'Gestiona tus finanzas personales de manera eficiente',
    creator: '@tuhandledetwitter',
    images: ['https://tudominio.com/twitter-image.jpg'],
  },
};

export default function Home() {
  return (
    <div className="p-6 h-screen text-foreground select-none">
      <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {/* Tarjeta de Balance Financiero */}
          <DashboardTotalAmountCard className="col-span-1" />

          {/* Tarjeta de Ingresos Generales */}
          <DashboardIncomeCard className="col-span-1"/>
          <DashboardIncomeCard className="col-span-1"/>

          {/* Tarjeta de Total Insight */}
          <DashboardExpenseCard className="col-span-1"/>

          <BalanceChart className="col-span-2"/>
          <BalanceChart className="col-span-2"/>
        </div>
      </div>
    </div>
  );
}