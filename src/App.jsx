import Card from "./component/Card";
import SupervisorIcon from "./assets/icon-supervisor.svg";
import TeamBuilderIcon from "./assets/icon-team-builder.svg";
import KarmaIcon from "./assets/icon-karma.svg";
import CalculatorIcon from "./assets/icon-calculator.svg";

export default function App() {
  return (
    <div>
      <h1 className="text-4xl font-extralight text-center text-zinc-500">
        Reliable, efficient delivery
      </h1>
      <h1 className="text-4xl font-bold text-center my-4 text-zinc-800">
        Powered by Technology
      </h1>
      <div className="max-w-[450px] mx-auto">
        <p className="text-center font-thin text-zinc-500">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div className="card-container grid grid-cols-3 gap-7 grid-rows-4 mt-11 max-w-[1000px] mx-auto max-[700px]:grid-cols-1">
        <Card
          classValue="card1 shadow-lg border-t-4 border-teal-500 min-[701px]:row-start-2 min-[701px]:row-span-2 rounded-md"
          cardTitle="Supervisor"
          icon={SupervisorIcon}
        >
          Monitors activity to identify project roadblocks
        </Card>
        <Card
          classValue="card2 shadow-lg border-t-4 border-red-500 min-[701px]:col-start-2  min-[701px]:row-span-2 rounded-md"
          cardTitle="Team Builder"
          icon={TeamBuilderIcon}
        >
          Scans our talent network to create the optimal team for your project
        </Card>
        <Card
          classValue="card3 shadow-lg border-t-4 border-yellow-500 min-[701px]:row-start-3 min-[701px]:row-span-2 min-[701px]:col-start-2 rounded-md"
          cardTitle="Karma"
          icon={KarmaIcon}
        >
          Regularly evaluates our talent to ensure quality
        </Card>
        <Card
          classValue="card4 shadow-lg border-t-4 border-blue-500  min-[701px]:row-start-2 min-[701px]:row-span-2 min-[701px]:col-start-3 min-[701px]:col-span-2 rounded-md"
          cardTitle="Calculator"
          icon={CalculatorIcon}
        >
          Uses data from past projects to provide better delivery estimates
        </Card>
      </div>
    </div>
  );
}
