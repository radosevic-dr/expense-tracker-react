import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../context/state";

function Balance() {
    const transactions = useContextSelector(TransactionContext, (state) => {
        return state.transactions;

    });


    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <div className='px-2'>
            <h3 className='font-bold text-red-600 mb-2'>Current Balance:</h3>
            <h3 className='font-bold text-lg'>{total}</h3>
        </div>
    );
}

export { Balance };
