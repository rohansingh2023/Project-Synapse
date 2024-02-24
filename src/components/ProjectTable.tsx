import ProjectListRow from "./ProjectListRow";

export default function ProjectTable() {
  // const [value ,setValue] = useState<boolean>(true)

  return (
    <div className=" px-14">
      <div className="flex items-center justify-between">
        <h1 className="text-[50px] font-bold">Project List</h1>
        <div className="rounded-full bg-[#FFFFFF] p-2 font-semibold w-[162px]">
          <p>2023-24</p>
          <img src="" alt="" />
        </div>
      </div>
      <div className="mt-8">
        <ProjectListRow />
      </div>
      <div className="mt-7 space-y-2">
        <ProjectListRow />
        <ProjectListRow />
        <ProjectListRow />
        <ProjectListRow />
        <ProjectListRow />
        <ProjectListRow />
        <ProjectListRow />
      </div>
    </div>
  );
}
