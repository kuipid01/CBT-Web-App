import { Button } from "../components/Button";

const TestMangaement = () => {
  return (
    <div className=" px-[10px] md:px-[2rem]">
      <div className=" flex mt-3 justify-end  gap-6">
        <Button text="Save Test" />
        <Button text="Manage Test" />
      </div>
      <div className=" h-[1px]  my-3 mx-auto relative">
        <div className="w-full h-full bg-primary  "></div>
        <div className="flex absolute top-1/2 items-center  -transform -translate-y-1/2 w-full justify-evenly">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="flex items-center mt- flex-col gap-1" key={item}>
              {" "}
              <div className="w-[20px] cursor-pointer hover:bg-white hover:border transition-all hover:border-primary hover:text-primary z-[5555] h-[20px] rounded-full flex text-sm text-white items-center justify-center font-bold bg-primary">
                {" "}
                {item}
              </div>{" "}
              {/* <p>Test Text</p> */}
            </div>
          ))}
        </div>
        <div className="flex items-center mt-3 font-semibold text-primary w-full justify-evenly">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div className="flex text-xs md:text-base items-center  flex-col gap-1" key={item}>
              {" "}
              <p>Test</p>
            </div>
          ))}
        </div>
      </div>
      <p className="md:text-3xl  text-xl font-bold text-primary my-[2rem] md:my-[5rem] ">
        Test Configuration
      </p>
      <form className="w-1/2  h-fit gap-3 flex flex-col" action="">
        <div className="flex items-center gap-5 w-full">
          <label className="font-bold text-primary" htmlFor="title">
            Title:
          </label>
          <input
            className="border flex-1 px-2 py-1 border-primary placeholder:text-primary outline-none"
            type="text"
            placeholder="Enter Paper Name"
          />
        </div>
        <div className="flex md:flex-row flex-col justiify-between gap-3">
          <div className="flex items-center gap-2 w-full">
            <label className="font-bold  text-primary" htmlFor="title">
              Marks:
            </label>
            <input
              className="border flex-1 px-2 py-1 border-primary placeholder:text-primary outline-none"
              type="text"
              placeholder="Enter Paper Name"
            />
          </div>
          <div className="flex items-center gap- w-full">
            <label className="font-bold text-primary" htmlFor="title">
              Duration:
            </label>
            <input
              className="border flex-1 px-2 py-1 border-primary placeholder:text-primary outline-none"
              type="number"
              placeholder="Duration"
            />
          </div>
        </div>
      </form>
      <p className="md:text-3xl  text-xl font-bold text-primary my-[1rem] md:my-[2rem] ">
        Quetions Details
      </p>
      <form
        className=" mb-[2rem] w-full justify-between flex md:flex-row flex-col h-fit"
        action=""
      >
        <div className="flex md:flex-row flex-col w-full md:w-1/2 gap-2 items-start text-primary">
          <label htmlFor="Qusetion">Question Text:</label>
          <textarea
            className="flex-1 h-[200px]  resize-none px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline focus:ring-blue-200  focus:border-blue-400"
            name="questionText"
            id="questionText"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="flex flex-col text-primary justify-center items-center gap-2">
          <p>Answer Type</p>
          <div className="border flex  justify-center items-center gap-2 border-primary p-3">
            <div className="flex gap-2  items-center ">
              {" "}
              <input type="radio" name="a" id="a" /> <span>Short Answer</span>
            </div>
            <div className="flex gap-2  items-center ">
              {" "}
              <input type="radio" name="a" id="a" /> <span>True/False</span>
            </div>
          </div>
          <div className="flex gap-3 items-center outline-none mt-[2rem]">
            <p>Correct Option</p>
            <input type="text" className="w-[200px] h-[35px] border border-primary"  />
          </div>
        </div>
      </form>
      <hr className="w-full h-[2px] flex bg-gray-400 mb-[2rem] md:hidden" />
      <div className="w-full pb-2 flex flex-col gap-3 md:flex-row md:gap-0 justify-between items-end">
      <div className="flex w-full  gap-2 flex-col">
        {[1, 2, 3, 4].map((item) => (
          <div className="flex items-center gap-2" key={item}>
            <div className="w-[30px] h-[30px] rounded-full bg-gray-400"></div>
            <span>A.</span>
            <div className="md:w-[500px] flex-1 bg-red-500 h-[40px] border border-primary">
              <input className="w-full px-2 outline-none h-full" type="text " />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <Button text='CLEAR'/>
        <Button text='ADD'/>
      </div>
      </div>
     
    </div>
  );
};

export default TestMangaement;
