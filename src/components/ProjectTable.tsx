import ProjectListRow from "./ProjectListRow";
import data from '../db/output.json'

export default function ProjectTable() {
  // const [value ,setValue] = useState<boolean>(true)
  

  return (
    <div className="mt-36 px-2 md:px-14">

      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-bold">Project List</h1>
        <div className="flex text-slate-500 text-sm md:text-base md:px-4 py-1 rounded-full md:w-36 px-2 bg-[#FFFFFF]">
          <select className="outline-none w-full" value={"2023-24"}>
            <option value="2023-24">2023-24</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <ProjectListRow celltype="heading" project={{index:0, title:"Project Title", domain:"Domain", guide:"Guide"}} />
      </div>

      <div className="mt-3 space-y-2">
        {/* <ProjectListRow celltype="" project={{index:1, title:"project 1", domain:"domain domain domain domain domain domain domain", guide:"guide guide guide guide"}} />
        <ProjectListRow celltype="" project={{index:2, title:"project 2 project 2 project 2 project 2 project 2 project 2 project 2 project 2 project 2 project 2", domain:"domain", guide:"guide"}} />
        <ProjectListRow celltype="" project={{index:3, title:"", domain:"domain", guide:"guide"}} />
        <ProjectListRow celltype="" project={{index:4, title:"project 1", domain:"", guide:"guide"}} />
        <ProjectListRow celltype="" project={{index:5, title:"project 1", domain:"domain", guide:""}} />
        <ProjectListRow celltype="" project={{index:7, title:"project 1", domain:"domain", guide:"guide"}} /> */}
        {data.map((project, index) => {
          if(index!==0)
            return (
              <ProjectListRow 
                key={project["A"]} 
                celltype="" 
                project={
                  {
                    index: project["A"] as number, 
                    title: project["B"], 
                    domain: project["L"] as string, 
                    guide:project["G"]}} />
            )
        } )}
      </div>

    </div>
  );
}
