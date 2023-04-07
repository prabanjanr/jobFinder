import React from "react";
import design from "../../Assets/design.png";
import source from "../../Assets/source.png";
import comp from "../../Assets/comp.png";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px block]">
        The value that holds us true and to account
      </h1>
      <div className="grid gap-[10rem] grid-cols-3 item-center">
        <div className="singlerGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={design} alt="" className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[17px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity.[.7] py-[1rem] font-semibold">
            The quality of having no decoration or unnecessary extra things do.
          </p>
        </div>

        <div className="singlerGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
              <img src={source} alt="" className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[17px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity.[.7] py-[1rem] font-semibold">
            I am confident that everything will come out right in time.
          </p>
        </div>
        <div className="singlerGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
              <img src={comp} alt="" className="w-[70%]" />
            </div>
            <span className="font-semibold text-textColor text-[17px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity.[.7] py-[1rem] font-semibold">
            The purpose of the work as it relates to the organization's mission
            and goals.
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-textColor text-[30px] font-bold">
            Ready to switch a carrer
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Let's get started
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-white border-blueColor">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
