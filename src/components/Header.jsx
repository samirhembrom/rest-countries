import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <header className="shadow-xl flex justify-between px-20 py-5 bg-white">
        <Link to="/"><b className="text-xl">Where in the world?</b></Link>
        <button className="font-semibold">Dark Mode</button>
      </header>
    </>
  )
}