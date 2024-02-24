export default function ProjectListRow() {
  return (
    <div className="flex items-center justify-between bg-[#FFFFFF] py-2 rounded-sm">
      <div
        className={
          //   value === "tail"
          // ?
          "flex items-center space-x-8 ml-8"
          // : "flex items-center space-x-8 ml-8 font-semibold"
        }
      >
        <p>#</p>
        <p>Project Name</p>
      </div>
      <div
        className={
          //   value === "header"
          // ?
          "flex items-center space-x-20 mr-48"
          // : "flex items-center space-x-20 mr-48 font-semibold"
        }
      >
        <div>
          <p>Domain</p>
        </div>
        <p>Guide</p>
      </div>
    </div>
  );
}
