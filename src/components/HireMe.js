import Link from "next/link";
import CircleTextMe from "./Icons";


export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden lg:right-8 lg:left-auto lg:top-2 lg:bottom-auto lg:absolute">
        <div className="w-30 h-auto flex items-center justify-center relative md:w-24">
          	<CircleTextMe className={"fill-dark animate-spin-slow dark:fill-light h-24"} />
		  	<Link href="mailto:adevlin.booth@gmail.com"
			className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2
			-translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-14 h-14 text-[12px]
			rounded-full font-semibold hover:bg-light hover:text-dark 
			dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light">
				Hire Me
			</Link>
        </div>
    </div>
  )
}
  