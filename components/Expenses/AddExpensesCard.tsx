"use client"

import { PlusIcon } from "@heroicons/react/24/outline";

interface AddExpensesCardProps {
    className?: string;
    userId: string;
}

export default function AddExpensesCard({ className, userId }: AddExpensesCardProps) {
    const idusr = parseInt(userId, 10);

    // const handleAddExpense = async () => {
    //     await createExpense({
    //         idusr: idusr,
    //         amount: 100,
    //         currency: 'ARS',
    //         type: 'EXPENSE'
    //     });
    //     triggerUpdate();
    // };

    return (
        <div className={`shadow-neomorphic transition duration-150 ease-in-out border-none rounded-xl bg-background ${className}`}>
            <div>
                <div className="p-6 flex flex-col h-full">
                    <h3 className="text-lg font-semibold mb-4" data-testid={idusr.toString()}>Agregar Gasto</h3>
                    <div className="flex-grow flex">
                        <button
                            className="h-10 w-10 flex items-center justify-center shadow-neomorphicBtn hover:shadow-neomorphicInset transition duration-150 ease-in-out border-none rounded-full bg-background rounded-md transition duration-300 ease-in-out"
                        >
                            <PlusIcon className="text-red-500 w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}