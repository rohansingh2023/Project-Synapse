import homeLogo from "../assets/images/home_logo.png";
import { ProjectTable } from "../components";
import airobo from "../assets/images/ai-robo.png"
import airoboshadow from "../assets/images/ai-robo-shadow.png"

export default function Home() {
  return (
    <div>
      {/* Info */}
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-8 p-10 mt-5">
          <img src={homeLogo} alt="" className="w-[36vh]" />
          <div className="text-3xl md:text-5xl font-bold">
            <p>Vivekanand Education Society's</p>
            <p>Institute of Technology</p>
          </div>

          <div className="text-lg md:text-2xl font-semibold opacity-60">
            <p>
              An 
              <span className="opacity-100 bg-gradient-to-r text-transparent bg-clip-text from-blue-700 via-indigo-500 to-purple-700"> Automomous Institute </span>
              Affiliated to University of Mumbai, Approved by
            </p>
            <p>AICTE & Recognized by Govt. of Maharashtra</p>
          </div>
        </div>

        <div className="w-[150px] border-[3px] border-[#FFFFFF] rounded-lg"></div>

        <div className="flex flex-col items-center justify-center gap-8 p-10">
          <p className="text-xl md:text-3xl font-semibold italic opacity-70">Department of Artificial Intelligence & Data Science</p>
          <div className="leading-6">
            <p className="font-bold pb-4 text-3xl md:text-5xl bg-gradient-to-r from-[#1D4EFE] to-[#1A8DF7] inline-block text-transparent bg-clip-text">
              Project Prakalpa
            </p>
            <p className="opacity-60 text-sm font-medium">BE Major Projects, Academic Year 2023-34</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center mb-10">
          <img
            src={airobo}
            alt=""
            className="w-[220.6px] animate-bounce"
          />
          <img
            src={airoboshadow}
            alt=""
            className="w-[220.6px] animate-pulse"
          />
        </div>
      </div>

      {/* ProjectList */}
      <ProjectTable />
    </div>
  );
}
