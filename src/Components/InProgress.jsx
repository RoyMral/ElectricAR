import InConstruction from "../assets/img/InConstruction.jpg";

function InProgress() {
  return (
    <div className="text-center mx-auto w-[1024px]">
      <h2 className="text-center text-4xl font-bold py-7">En Construcción</h2>
      <img className="mx-auto" src={InConstruction} alt="in construction" />
    </div>
  );
}

export default InProgress;
