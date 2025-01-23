import React from "react";

export default function Profile() {
  return (
    <>
    <div className="flex flex-col justify-start text-start gap-11">

      <div className=" w-full  border-[#20293A] bg-[#20293A] p-14 rounded-[80px]">
        <img
          className="w-full  rounded-[60px]"
          src="/public/Github.svg"
          alt=""
        />
      </div>
      <div>
        <p className="font-bold  text-6xl text-[#CDD5E0] ">Github</p>
        <p className="text-5xl text-[#CDD5E0]">How people build software</p>
      </div>
    </div>
    </>
  );
}
