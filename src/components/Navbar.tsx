export default function Navbar() {
  return (
    <div className="w-full bg-green-900 flex justify-between">
      <span className="ml-20 m-auto font-bold text-white uppercase tracking-widest">creandum</span>
      <ul className="m-4">
        <li className="inline-block p-2 text-grey hover:text-white cursor-pointer transition ease-in-out delay-10 mx-2 uppercase tracking-widest text-xs">Team</li>
        <li className="inline-block p-2 text-grey hover:text-white cursor-pointer mx-2 uppercase tracking-widest text-xs">Commitments</li>
        <li className="inline-block p-2 text-grey hover:text-white cursor-pointer mx-2 uppercase tracking-widest text-xs">Stories</li>
        <li className="inline-block p-2 text-grey hover:text-white cursor-pointer mx-2 mr-14 uppercase tracking-widest text-xs">Contact</li>
      </ul>
    </div>
  )
}

