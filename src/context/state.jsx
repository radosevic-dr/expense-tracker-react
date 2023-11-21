import { createContext } from "use-context-selector";
import { useReducer } from "react";
import { reducer } from "./reducers";


const initialState = {
    transactions: []
};

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function deleteTransaction(id) {
        dispatch({ type: "DELETE_TRANSACTION", payload: id });
    }

    function addTransaction(transaction) {
        dispatch({ type: "ADD_TRANSACTION", payload: transaction });
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    );
};