import Statistic from "./Statistic"
import BrandRecognition from "../images/icon-brand-recognition.svg"
import DetailedRecords from "../images/icon-detailed-records.svg"
import FullyCustomizable from "../images/icon-fully-customizable.svg"

function Statistics() {
    return <div className="flex flex-col items-center mt-[100px] pb-[100px] md:pb-[200px] md:mt-0">
        <div className="mb-[80px] text-center xl:mx-[320px]">
            <h2 className="mb-[20px] text-[36px] font-bold">Advanced Statistics</h2>
            <p className="text-[20px] text-gray-400">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="relative flex flex-col items-center md:flex-row">
            <Statistic
                className="lg:h-[350px] xl:items-start"
                icon={BrandRecognition}
                title="Brand Recognition">
                Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.
            </Statistic>
            <div className="h-[100px] w-0 border-4 border-[#2acfcf] md:h-0 md:w-[50px] md:relative md:top-[30px]"></div>
            <Statistic
                className="lg:h-[350px] xl:items-start md:relative md:top-[60px]"
                icon={DetailedRecords}
                title="Detailed Records">
                Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
            </Statistic>
            <div className="h-[100px] w-0 border-4 border-[#2acfcf] md:h-0 md:w-[50px] md:relative md:top-[30px]"></div>
            <Statistic
                className="lg:h-[350px] xl:items-start md:relative md:top-[120px]"
                icon={FullyCustomizable}
                title="Fully Customizable">
                Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
            </Statistic>
        </div>
    </div >
}

export default Statistics