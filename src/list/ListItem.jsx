import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../context/state";

function ListItem({ transaction }) {
    const sign = transaction.amount < 0 ? '-' : '+';
    const deleteTransaction = useContextSelector(TransactionContext, state => {
        console.log(state);
        return state.deleteTransaction;
    });

    return (
        <li className={`${transaction.amount < 0 ? "bg-red-400" : "bg-green-300"} flex justify-between mb-1 p-2 rounded-lg`}>
            {transaction.text}{" "}
            <span>
                {sign}
                {Math.abs(transaction.amount)}
            </span>
            <button className="font-bold text-zinc-700 text-lg" onClick={() => deleteTransaction(transaction.id)}>X</button>
        </li>
    );
}

export { ListItem };