export default function MonthlyChangeText({ monthlyChange, type }: { monthlyChange: number, type: "INCOME" | "EXPENSE" }) {
    const previousMonthName = new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString('es-ES', { month: 'long' }).replace(/^\w/, c => c.toUpperCase());
    return (
        <p className="text-sm opacity-80">
            <span className={type === "INCOME" ? `${monthlyChange >= 0 ? "text-green-500" : "text-red-500"}` : `${monthlyChange >= 0 ? "text-red-500" : "text-green-500"}`}>
                {monthlyChange >= 0 ? `+$${monthlyChange} ` : `-$${monthlyChange >=0 ? monthlyChange : monthlyChange * -1 } `}
            </span>
            comparado con {previousMonthName}
        </p>
    )
}