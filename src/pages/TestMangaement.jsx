import { Button } from "../components/Button";

const TestMangaement = () => {
  return (
    <div className=" px-[10px] md:px-[2rem]">
     
     <h1 className="text-primary text-center font-bold mt-[3rem]  text-3xl">Add/Edit Questions</h1> 
      

      
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
            className="w-full h-[200px]  resize-none px-4 py-2 bg-gray-100 border border-gray-300 rounded focus:outline focus:ring-blue-200  focus:border-blue-400"
            name="questionText"
            id="questionText"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        
      </form>
      <hr className="w-full h-[2px] flex bg-gray-400 mb-[2rem] md:hidden" />
      <div className="w-full pb-2 flex flex-col gap-3 md:flex-row md:gap-0 justify-between items-end">
      <div className="flex md:flex-row flex-col w-full  gap-2 ">
        <div className="flex-1 flex flex-col gap-3">
          <p className="font-medium text-primary">Answer Choices</p>
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
      
        <div className="flex md:w-[30%] w-full flex-col text-primary justify-center items-center gap-2">
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
      </div>
    
      </div>
      <div className="flex float-right pt-[3rem] gap-3">
        <Button text='CLEAR'/>
        <Button text='SAVE'/>
      </div>
    </div>
  );
};

export default TestMangaement;
