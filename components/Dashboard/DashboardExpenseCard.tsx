import DashboardCard from "@/components/Dashboard/DashboardCard";
import { getUserMonthlyChange, getUserMonthlyIncomeOrExpense } from "@/lib/services/dashboardService";
import { DocumentMinusIcon } from "@heroicons/react/24/outline";
import MonthlyChangeText from "./MonthlyChangeText";

interface DashboardCardProps {
    className?: string;
}

export default async function DashboardExpenseCard({ className }: DashboardCardProps) {
    const actualMonthName = new Date().toLocaleString('es-ES', { month: 'long' }).replace(/^\w/, c => c.toUpperCase());
    const actualMonth = new Date().getMonth() + 1;
    const actualYear = new Date().getFullYear();
    const monthlyExpense = await getUserMonthlyIncomeOrExpense("1", "EXPENSE", actualMonth, actualYear);
    const monthlyChange = await getUserMonthlyChange("1", "EXPENSE", actualMonth, actualYear);
    return (
        <DashboardCard className={`${className}`}>
            <div className="p-6 flex flex-col h-full">
                <div className="flex flex-col justify-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                        <DocumentMinusIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold">Gastos de {actualMonthName}</h3>
                </div>
                <div className="mt-auto">
                    <p className="text-3xl font-bold mb-1">${monthlyExpense?.toLocaleString()}</p>
                    <MonthlyChangeText type="EXPENSE" monthlyChange={monthlyChange} />
                </div>
            </div>
        </DashboardCard>
    )
}