import navbarLogo from "../assets/images/navbar_logo.jpg";

export default function Navbar() {
  return (
    <div className="bg-white flex items-center justify-between py-3 px-10 shadow-2xl">
      {/* Logo */}
      <div>
        <img src={navbarLogo} alt="" className="h-[44.4px] w-[181.2px]" />
      </div>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#E0E7FF] px-5 py-2 rounded-full placeholder:text-black"
        />
      </div>
    </div>
  );
}
