import { Star } from "lucide-react"


const AboutUs = () => {
  return (
    <div className="flex items-center justify-center pb-30 md:pb-60 pt-20 md:pt-0" id="about">
        <div className="flex flex-col gap-5 items-center">
            <div className="flex w-fit px-4 py-1 text-sm items-center gap-1 rounded-full bg-linear-to-br from-gray-50 via-gray-100 to-gray-50 shadow">
                <Star size={14}/><span> About us</span>
            </div>
            <div className="md:text-5xl text-3xl max-w-[1000px] text-center font-normal bg-linear-to-r from-gray-500 via-gray-950 to-gray-500 bg-clip-text text-transparent">
                CoEdify is an AI automation agency helping modern businesses streamline operations, boost productivity, and scale smarter.
            </div>
        </div>
    </div>
  )
}

export default AboutUs