import DashboardCard from "@/components/Dashboard/DashboardCard";

interface DashboardCardProps {
    className?: string;
}

export default function DashboardTotalAmountCard({ className }: DashboardCardProps) {
    return (
        <DashboardCard className={`${className}`}>
            <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold">Balance Actual</h3>
                </div>
                <div className="mt-auto">
                    <p className="text-3xl font-bold mb-1">$25,912</p>
                    <p className="text-sm opacity-80">+15% que el mes pasado</p>
                </div>
            </div>
        </DashboardCard>
    )
}