const TestPage = () => {
  return (
    <div className="w-full relative">
      <h1 className=" text-center text-3xl font-extrabold text-primary">
        CS2: COMPUTER PROGRAMMING
      </h1>
      <div className=" w-[90%] mt-[2rem]  mx-auto flex justify-between items-center">
        <div className="flex flex-col gap-3 text-primary">
          <p className="text-lg font-semibold">Name: John Doe</p>
          <p className="text-lg font-semibold">Duration: 1 hour 30 Minutes</p>
        </div>
        <div className="w-[100px] h-[100px] p-1 bg-primary overflow-hidden rounded border md:w-[150px] md:h-[150px]">
          <img
            src="/assets/books.jpg"
            className="object-cover h-full w-full"
            alt=""
          />
        </div>
      </div>
      <p className="my-3 text-center text-primary ">Time : 00:05:29</p>
      <div className="w-[95%] my-3 min-h-[100px] h-fit border-2 mx-auto border-primary p-3">
        <p className="text-black text-medium">
          Which of the following is the correct format of declaring a string
          variable named ‘user’ in java
        </p>
      </div>
      <div className="flex ml-[2.5%] flex-col gap-3">
        <div>
          <input type="radio" className="cursor-pointer" name="a" id="a" />{" "}
          <span>A. String User</span>
        </div>
        <div>
          <input type="radio" className="cursor-pointer" name="a" id="a" />{" "}
          <span>B. Int User</span>
        </div>
        <div>
          <input type="radio" className="cursor-pointer" name="a" id="a" />{" "}
          <span>C. string User</span>
        </div>
        <div>
          <input type="radio" className="cursor-pointer" name="a" id="a" />{" "}
          <span>D. Strings User</span>
        </div>
      </div>

      <div className="input flex gap-[1px] ml-[2.5%]">
        {[1,2,3,4,5,6,7,8,].map(item => <div className="py-1 hover:bg-primary hover:text-white transition-all px-2 cursor-pointer mt-[4rem]  border-2 border-black" key={item}> {item} </div>)}
      </div>
      <div className="flex justify-between  w-full h-fit px-[2.5%] my-[3rem]">
        <div className="flex gap-3">
            <button className="px-3 bg-primary hover:bg-white hover:border-2 hover:border-primary transition-all hover:text-primary text-white font-bold py-2">Preious</button>
            <button className="px-3 bg-primary hover:bg-white hover:border-2 hover:border-primary transition-all hover:text-primary text-white font-bold py-2">Next</button>
        </div>
        <button className="px-3 bg-primary hover:bg-white hover:border-2 hover:border-primary transition-all hover:text-primary text-white font-bold py-2">Submit</button>
      </div>
    </div>
  );
};

export default TestPage;
