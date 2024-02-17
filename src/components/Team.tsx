import Person from "./Person";

export default function Team() {
  return (
    <div className="flex flex-col md:gap-10 mt-10 md:mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <Person />
        <Person />
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-medium text-xl">Team</p>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-center gap-5">
          <Person />
          <Person />
          <Person />
          <Person />
        </div>
      </div>
    </div>
  )
}
