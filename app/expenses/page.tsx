export default function ExpensesPage() {
    return (
            <div className="p-6 h-screen text-foreground select-none">
            <div className="p-6">
            <h1 className="text-2xl font-bold">Gastos</h1>
            </div>
            <div className="">
                <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
                    {/* <AddExpensesCard className="col-span-1" userId="1"/>
                    <DashboardExpenseCard className="col-span-1" userId="1"/>
                    <DashboardExpenseCard className="col-span-1" userId="1"/> */}
                </div>
            </div>
        </div>
    )
}