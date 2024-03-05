import { Link } from "react-router-dom";

type ProjectProps = {
  index: number;
  title: string;
  domain: string;
  guide: string;
};

export default function ProjectListRow({
  celltype,
  project,
}: {
  celltype: string;
  project: ProjectProps;
}) {
  return (
    // <<<<<<< HEAD
    <div>
      <Link to={celltype === "heading" ? "/" : `/project/${project.index}`}>
        <div
          className={`flex items-start justify-start space-x-8 bg-[#FFFFFF] ${
            celltype === "heading"
              ? "font-semibold py-1 cursor-default"
              : "py-2 text-slate-500"
          } px-5 rounded-sm`}
        >
          <div>
            <div
              className={`flex justify-start w-[50vw] items-start space-x-8 ${
                celltype === "heading" && "font-semibold"
              }"`}
            >
              <p>{celltype === "heading" ? "#" : project.index}</p>
              <p className="line-clamp-1">
                {project.title || "untitled project"}
              </p>
              {/* =======
    <div className="text-xs md:text-base">
      <Link to={celltype==="heading" ? '/' : `/project/${project.index}`}>
        <div className={`flex items-start justify-start space-x-6 md:space-x-8 bg-[#FFFFFF] ${celltype==="heading" ? "font-semibold py-1 cursor-default": "py-2 text-slate-500"} px-2 md:px-5 rounded-sm`}>
          <div>
            <div className={`flex justify-start w-[50vw] items-start space-x-3 md:space-x-8 ${celltype === "heading" && "font-semibold"}"`}>
              <p>{celltype==="heading" ? "#" : project.index }</p>
              <p className=" text-start line-clamp-1">{project.title || "untitled project"}</p>
>>>>>>> e9cd2bb59708b261eeab3a4e59132a967da1e477 */}
            </div>
          </div>

          <div>
            {/* <<<<<<< HEAD */}
            <div className="flex text-start items-start space-x-8">
              <p className="w-[15vw] line-clamp-1">
                {project.domain || "unspecified"}
              </p>
              <p className="w-[15vw] line-clamp-1">
                {project.guide || "unknown"}
              </p>
              {/* =======
            <div className="flex text-start items-start space-x-2 md:space-x-8">
              <p className=" md:w-[15vw] line-clamp-1">{project.domain || "___"}</p>
              <p className="md:w-[15vw] line-clamp-1 hidden md:contents">{project.guide || "unknown"}</p>
            </div>
>>>>>>> e9cd2bb59708b261eeab3a4e59132a967da1e477 */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
