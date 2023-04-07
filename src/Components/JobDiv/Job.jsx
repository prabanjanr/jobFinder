import React from "react";

import { BiTimeFive } from "react-icons/bi";

import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo3.png";
import logo5 from "../../Assets/logo3.png";
import logo6 from "../../Assets/logo3.png";
import logo7 from "../../Assets/logo3.png";
import logo8 from "../../Assets/logo3.png";

const Data = [
  {
    id: 1,
    image: logo1,
    title: " Web Developer",
    time: "Now",
    location: "Japan",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    company: "Novac linus Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "UI/UX Designer",
    time: "15Hrs",
    location: "Dubai",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    company: "Liquid Accessments",
  },
  {
    id: 3,
    image: logo3,
    title: "Software Eng",
    time: "12Hrs",
    location: "New York",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    company: "IBM",
  },
  {
    id: 4,
    image: logo4,
    title: "Product Design",
    time: "5Hrs",
    location: "Austria",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    company: "AweMonk",
  },
  {
    id: 5,
    image: logo5,
    title: "Data Scientist",
    time: "5days",
    location: "Singapore",
    desc: "The description typically includes the person's main duties, responsibilities, and working conditions",
    company: "Web tech Agency",
  },
  {
    id: 6,
    image: logo6,
    title: "Researcher",
    time: "Now",
    location: "Canada",
    desc: "The description typically includes the person's main duties, responsibilities, and working conditions",
    company: "Intel Corporations",
  },
  {
    id: 7,
    image: logo7,
    title: "UI Design",
    time: "5Hrs",
    location: "Saudi Arabia",
    desc: "The description typically includes the person's main duties, responsibilities, and working conditions",
    company: "Sonoco",
  },
  {
    id: 8,
    image: logo8,
    title: "Artificial Int",
    time: "2days",
    location: "Germany",
    desc: "The description typically includes the person's main duties, responsibilities, and working conditions",
    company: "Eco lab",
  },
];

const Job = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(({ id, image, title, location, desc, company, time }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div>
                <div className="company flex items-center gap-2">
                  <img
                    src={image}
                    alt="Company-Logo"
                    className="w-[10%] rounded-full"
                  />
                  <span className="text-[14px] py-[1rem] block group-hover:text-white">
                    {company}
                  </span>
                </div>
                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor group-hover/item:text-textColor group-hover:text-white">
                  Apply Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;
