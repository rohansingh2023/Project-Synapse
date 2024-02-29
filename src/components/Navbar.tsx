import navbarLogo from "../assets/images/navbar_logo.jpg";

export default function Navbar() {
  return (
    <div className="bg-white flex items-center justify-between py-2 px-10 shadow-lg">
      {/* Logo */}
      <div>
        <img src={navbarLogo} alt="" className="h-[44.4px] w-[181.2px]" />
      </div>

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#E0E7FF] px-5 py-2 rounded-full hover:opacity-80 active: outline-none placeholder:text-black opacity-60"
        />
      </div>
    </div>
  );
}
