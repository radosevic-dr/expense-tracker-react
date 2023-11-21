import { TransactionProvider } from './context/state';
import { Balance } from "./balance";
import { Drain } from "./drain";
import { List } from "./list";
import { AddTransaction } from "./transaction/AddTransaction";

function App() {

  return (
    <TransactionProvider>
      <main className="w-[300px] mx-auto mt-10 flex flex-col bg-slate-200 p-2 rounded-lg">
        <h1 className="text-center font-bold uppercase mb-6 tracking-widest">
          Expense Tracker
        </h1>
        <Balance />
        <Drain />
        <List />
        <AddTransaction />
      </main>
    </TransactionProvider>
  );
}

export default App;
