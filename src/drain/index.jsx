import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../context/state";

function Drain() {
    const transactions = useContextSelector(TransactionContext, state => state.transactions);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    // how much money we spent
    const drain = (amounts.filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);
    return (
        <div className='flex justify-between mt-4 px-2'>
            <div>
                <h3 className="font-bold text-green-600 mb-2">Income</h3>
                <p>{income}</p>
            </div>

            <div>
                <h3 className="font-bold text-orange-600 mb-2">Drain</h3>
                <p>{drain}</p>
            </div>
        </div>
    );
}

export { Drain };