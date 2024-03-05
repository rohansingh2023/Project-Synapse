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
            </div>
          </div>

          <div>
            <div className="flex text-start items-start space-x-8">
              <p className="w-[15vw] line-clamp-1">
                {project.domain || "unspecified"}
              </p>
              <p className="w-[15vw] line-clamp-1">
                {project.guide || "unknown"}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
