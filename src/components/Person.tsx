export default function Person({name}: {name: string}) {
  return (
    <div className="relative leading-tight px-14 md:px-0">
        <div className="w-32 h-32 block bg-slate-400 rounded-full absolute top-2 blur-[2px]"></div>
        <img className="max-w-32 max-h-32 bg-white border-white rounded-full border-2 drop-shadow-xl" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt="" />
        <div className="mt-5">
            <p className="font-semibold">D16AD</p>
            <p className="text-sm opacity-60">{name}</p>
        </div>
    </div>
  )
}
