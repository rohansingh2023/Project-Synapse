import ProjectListRow from "./ProjectListRow";
import data from '../data/output.json'

export default function ProjectTable() {
  // const [value ,setValue] = useState<boolean>(true)

  return (
    <div className="mt-36 px-14">

      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Project List</h1>
        <div className="flex text-slate-500 rounded-full w-36 py-1 px-4 bg-[#FFFFFF]">
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
        {data.map((project) => (
          <ProjectListRow 
            key={project["Group No."]} 
            celltype="" 
            project={
              {
                index: project["Group No."], 
                title: project["Project Title"], 
                domain: project["Project Domain"], 
                guide:project["Guide"]}} />
        ))}
      </div>

    </div>
  );
}
