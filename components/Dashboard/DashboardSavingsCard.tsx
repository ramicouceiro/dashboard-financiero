import { PlaneIcon, UtensilsIcon, CarIcon } from "lucide-react";
import DashboardCard from "./DashboardCard";

interface DashboardCardProps {
    className?: string;
}

interface DashboardSavingsCardCategoryProps {
    icon: React.ElementType;
    title: string;
    amount: number;
    total: number;
}


export function DashboardSavingsCard({ className } : DashboardCardProps) {
    return(
        <DashboardCard className={`${className}`}>
            <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col justify-center gap-4 mb-4">
                    <h3 className="text-lg font-semibold">Ahorros</h3>
                </div>
                <DashboardSavingsCardCategory icon={PlaneIcon} title="Viajes" amount={150} total={500} />
                <DashboardSavingsCardCategory icon={UtensilsIcon} title="Comida" amount={1200} total={2400} />
                <DashboardSavingsCardCategory icon={CarIcon} title="Transporte" amount={400} total={2400} />
                {/* <DashboardSavingsCardCategory icon={PackageIcon} title="Otros" amount={100} total={2400} /> */}
            </div>
        </DashboardCard>
    )
}

export function DashboardSavingsCardCategory({ icon: Icon, title, amount, total }: DashboardSavingsCardCategoryProps) {
    return(
        <div className="flex flex-col justify-around text-center w-full shadow-neomorphicInset rounded-xl p-4 gap-4">
            <div className="flex justify-between">
                <div className="flex justify-center items-center gap-4">
                    <div className="bg-primary text-white rounded-full p-2">
                        <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left">
                        <p className="text-md font-semibold text-primary">{title}</p>
                    </div>
                </div>
            </div>
            <div className="flex-grow ml-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{width: `${((amount / total) * 100) > 100 ? 100 : (amount / total) * 100}%`}} 
                    />
                </div>
                <p className="text-xs mt-1 text-right"><b>${amount?.toLocaleString()} / ${total?.toLocaleString()} </b></p>
            </div>
        </div>
    )
}