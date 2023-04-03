import IllustrationWorking from "../images/illustration-working.svg"
import Link from "./Link"

function Introduction() {
    return <div className="flex flex-col mt-[30px] mb-[80px] md:flex-row-reverse md:mt-[100px] md:mb-[150px] lg:mt-[50px] lg:mb-[200px] xl:mt-[130px] xl:mb-[200px]">
        <div className="relative sm:flex sm:justify-center md:w-full">
            <img className="min-w-[600px] max-w-[733px] max-h-[394px] md:min-w-0 md:absolute md:left-[20px] md:w-[500px] lg:w-[733px] xl:left-[100px] xl:-[500px] xl:max-h-[482px]" src={IllustrationWorking} alt="illustrationg working" />
        </div>
        <div className="xl:w-full">
            <h1 className="mt-[40px] text-[46px] text-center font-bold md:text-left md:text-[38px] xl:text-[82px] xl:m-0">More than just shorter links</h1>
            <p className="mt-[10px] mb-[30px] text-[#9e9aa7] text-center text-[24px] md:text-left md:text-[20px]">
                Build your brand's recognition and get detailed insights on how your links are performing.
            </p>
            <div className="flex justify-center md:justify-start">
                <Link className="px-[50px] py-[10px] bg-[#2acfcf] text-white text-[20px] rounded-full cursor-pointer" href="/">Get Started</Link>
            </div>
        </div>
    </div>
}

export default Introduction