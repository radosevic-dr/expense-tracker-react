import { useState } from 'react';
import { useContextSelector } from "use-context-selector";
import { TransactionContext } from "../context/state";

function AddTransaction() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const addTransaction = useContextSelector(TransactionContext, (state) => state.addTransaction);

    const handleChange = (e, control) => {
        control(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        };
        addTransaction(newTransaction);
        setText("");
        setAmount("");
    };
    return (
        <div className="mt-4">
            <h3 className="font-bold mb-4 text-sky-700 text-center">
                Add a new transaction
            </h3>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-3">
                    <label
                        className="text-xs mb-2 pl-2 font-bold text-sky-800"
                        htmlFor="text"
                    >
                        Item
                    </label>
                    <input
                        className="py-3 px-2 rounded-xl border border-slate-500"
                        type="text"
                        name="text"
                        value={text}
                        onChange={(e) => handleChange(e, setText)}
                    />
                </div>

                <div className="flex flex-col">
                    <label
                        className="text-xs mb-2 pl-2 font-bold text-sky-800"
                        htmlFor="amount"
                    >
                        Amount <span className="text-slate-800">(- prefix for loss )</span>
                    </label>
                    <input
                        className="py-3 px-2 rounded-xl border border-slate-500"
                        type="number"
                        name="amount"
                        value={amount}
                        onChange={(e) => handleChange(e, setAmount)}
                    />
                </div>

                <button
                    className="w-[100%] text-center font-bold uppercase mt-4 bg-sky-500 rounded-xl py-2 text-white"
                    type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export { AddTransaction };
