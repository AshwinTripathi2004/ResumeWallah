import { Link } from "react-router-dom"
import { LayoutTemplate } from "lucide-react"
import { ProfileInfoCard } from "./Cards"
import { landingPageStyles } from "../assets/dummystyle"

const Navbar = () => {
  return (
    <div className="h-16 bg-white/70 backdrop-blur-xl border-b border-violet-100/50 py-2.5 px-4 md:px-0 
    sticky top-0 z-50">
      <div className="max-w-6xl mx-auto  flex items-center justify-between gap-5">

        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center pb-6 gap-3">


             <img
              src="/logo.svg"
              alt="ResumeBhai Logo"
              className="h-12 sm:h-14"
            />

          </div>
        </Link>
        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar