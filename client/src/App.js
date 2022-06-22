// Importing components
import Randomize from './Components/Form/RandomizeForm';
import InfoBox from './Components/InfoBox/InfoBox';

function App() {
  return (
    <div className="container mx-auto px-0 xl:px-5 mt-5">
      <div className="grid grid-flow-col space-x-5">
        <div className="col-span-4 border-2 rounded-md border-rose-500">
          <h1 className="text-3xl text-center font-bold">Generate Team</h1>
          <InfoBox />
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
