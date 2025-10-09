
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link
  to="/"
  className="group text-3xl font-extrabold tracking-tighter transition-all duration-300 hover:text-cyan-600"
>
  <span className="hidden lg:inline">
    TATO
    <span className="relative text-cyan-600 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-cyan-600 before:transition-all before:duration-300 group-hover:before:w-full">
      RESILIENT
    </span>
  </span>

  <span className="lg:hidden">
    <span className="text-cyan-600">T</span>R
  </span>
</Link>

  )
}

export default Logo