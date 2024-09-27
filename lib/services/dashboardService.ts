import { supabase } from "@/lib/supabaseClient";

export interface User {
  id: number;
  username: string;
  email: string;
  subscription_type: string;
  name: string;
  surname: string;
  usd_amount: number;
  ars_amount: number;
}

export interface UserTransaction {
    id: number;
    idusr: number;
    amount: number;
    currency: string;
    created_at: string; // Formato timestamptz en la base de datos
    description: string;
    type: string;
}

export const getUserAmounts = async (userId: string) => {
  const { data, error } = await supabase
    .from('user_currencies')
    .select('usd_amount, ars_amount')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error al obtener los montos del usuario:', error);
    return null;
  }
  
  return data as User;
};

export const getUserTotalArsAmounts = async (userId: string) => {
    const { data, error } = await supabase
    .from('user_currencies')
    .select('*')
    .eq('id', userId)
    .single();

    if (error) {
        console.error('Error al obtener los montos del usuario:', error);
        return null;
    }
    const user = data as User;
    let totalArs = 0;
    const detailedAmounts: { [key: string]: number } = {};

    for (const [key, value] of Object.entries(user)) {
        if (key !== 'id' && key.endsWith('_amount')) {
            const currency = key.slice(0, 3).toUpperCase();
            const amount = Number(value);
            
            if (currency === 'ARS') {
                totalArs += amount;
                detailedAmounts[currency] = amount;
            } else {
                const exchangeRate = await getCurrencyExchangeRate(currency, 'ARS');
                const amountInArs = amount * exchangeRate;
                totalArs += amountInArs;
                detailedAmounts[currency] = amountInArs;
            }
        }
    }    

    return totalArs;
}

// Función auxiliar para obtener la cotización (debes implementarla)
async function getCurrencyExchangeRate(from: string, to: string): Promise<number> {
    if(from === 'USD' && to === 'ARS') {
        return 1254;
    }
    return 1;
}

export const getUserMonthlyIncomeOrExpense = async (userId: string, type: string, actualMonth: number, actualYear: number) => {
    const { data, error } = await supabase
        .from('usr_transactions')
        .select('*')
        .eq('idusr', userId)
        .eq('type', type)
        .gte('created_at', `${actualYear}-${actualMonth.toString().padStart(2, '0')}-01`)
        .lt('created_at', `${actualYear}-${(actualMonth + 1).toString().padStart(2, '0')}-01`)
        
    if (error) {
        console.error('Error al obtener las transacciones del usuario:', error);
        return null;
    }

    const userTransactions = data as UserTransaction[];
    const monthlyIncome = await userTransactions.reduce(async (totalPromise, transaction) => {
        const total = await totalPromise;
        if (transaction.currency === 'ARS') {
            return total + transaction.amount;
        } else if (transaction.currency === 'USD') {
            const exchangeRate = await getCurrencyExchangeRate('USD', 'ARS');
            return total + transaction.amount * exchangeRate;
        }
        return total;
    }, Promise.resolve(0));

    return monthlyIncome;
}

export const getUserMonthlyChange = async (userId: string, type: string, actualMonth: number, actualYear: number) => {
    const previousMonth = actualMonth - 1;

    const previousMonthIncomeOrExpense = await getUserMonthlyIncomeOrExpense(userId, type, previousMonth, actualYear);
    const actualMonthIncomeOrExpense = await getUserMonthlyIncomeOrExpense(userId, type, actualMonth, actualYear);
    if(previousMonthIncomeOrExpense !== null && actualMonthIncomeOrExpense !== null) {
        const change = actualMonthIncomeOrExpense - previousMonthIncomeOrExpense;
        return change;
    }

    return 0;
}

export const getUserYearlyIncomeOrExpense = async (userId: string, type: string) => {
    const actualYear = new Date().getFullYear();

    const { data, error } = await supabase
        .from('usr_transactions')
        .select('*')
        .eq('idusr', userId)
        .eq('type', type)
        .gte('created_at', `${actualYear}-01-01`)
        .lt('created_at', `${actualYear + 1}-01-01}`);

    if (error) {
        console.error('Error al obtener las transacciones del usuario:', error);
        return null;
    }
    
    const userTransactions = data as UserTransaction[];

    return userTransactions;
}
