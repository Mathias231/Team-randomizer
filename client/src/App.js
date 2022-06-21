// Importing components
import Randomize from './components/Form/RandomizeForm';


function App() {
  return (
    <div className="container mx-auto mt-5">
      <div className="grid grid-flow-col space-x-5">
        <div className="col-span-4 border-2 rounded-md border-rose-500">
          <h1 className="text-3xl text-center font-bold">Generate Team</h1>
          <Randomize />
        </div>
        <div className="col-span-2 border-2 rounded-md border-rose-500">
          <h1 className="text-3xl text-center font-bold">Information</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
