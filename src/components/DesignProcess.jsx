import designProcessImage from "../assets/images/designprocess.png";
const DesignProcess = () => {
  return (
    <div className="container  mx-auto">
      <h2 className="text-2xl font-bold mt-4">Design Process</h2>
      <p>Your design process description.</p>
      <img
        src={designProcessImage}
        alt="Design Process"
        className="rounded-md"
      />
    </div>
  );
};

export default DesignProcess;
