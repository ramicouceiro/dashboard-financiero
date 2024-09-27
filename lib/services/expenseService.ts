import { supabase } from "@/lib/supabaseClient";
import { getUserAmounts, User } from "@/lib/services/dashboardService";

 export interface Expense {
    id: number;
    idusr: number;
    amount: number;
    currency: string;
    created_at: string;
    description: string;
    type: string;
}

export const createExpense = async (expense: Pick<Expense, 'idusr' | 'currency' | 'amount' | 'type'>) => {
    const { data, error } = await supabase
        .from('usr_transactions')
        .insert({
            idusr: expense.idusr,
            currency: expense.currency,
            amount: expense.amount,
            type: expense.type
        })
        .select();

    const user: User | null = await getUserAmounts(expense.idusr.toString());

    if (user) {
        if (expense.currency === 'ARS') {
            user.ars_amount -= expense.amount;
        } else if (expense.currency === 'USD') {
            user.usd_amount -= expense.amount;
        }
    }

    substractMoney(expense, user);

    if (error) {
        console.error('Error al agregar el gasto:', error);
        return null;
    }

    return data ? data[0] : null;
}

export const substractMoney = async (expense: Pick<Expense, 'idusr' | 'currency' | 'amount' | 'type'>, user: User | null) => {
    if (user) {
        const { data, error } = await supabase
        .from('user_currencies')
        .update({
            ars_amount: user.ars_amount,
            usd_amount: user.usd_amount
        })
        .eq('id', expense.idusr)
        .select();

        if (error) {
            console.error('Error al restar el dinero:', error);
            return null;
        }
        return data ? data[0] : null;
    }
    return null;
}


