import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mb-8  bg-gray-100">
      <div className="sm:w-[30rem] md:w-[60rem] lg:w-[90rem] shadow-lg h-[40rem] ml-7 mt-8">
        <div className="ml-4 mt-2 text-5xl  font-bold font-sans">
          <h1>
            Buy and Sell your
            <br />
            <span className="text-orange-500"> Motorcycle </span>Easy
            <br /> and Safe Way
          </h1>
        </div>

        <div className="ml-2 sm:mt-[20rem] lg:mt-[25rem]">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2  lg:grid-cols-4">
          <Link  href="/buymotorcycle">
            <button className="border border-gray-400 shadow-md rounded-lg h-[70px] text-lg w-[350px]">
              Motorcycle to Buy
            </button>
          </Link>
          <Link  href="/sellmotorcycle">
            <button className="border border-gray-400 shadow-md rounded-lg w-[350px] sm:mr-20 h-[70px] text-lg">
              Sell Your Motorcycle
            </button>
          </Link>
          <Link  href="/buymotorcycle">
            <button className="border border-gray-400 shadow-md rounded-lg h-[70px] text-lg w-[350px]">
              Buy A Spare
            </button>
          </Link>
          <Link  href="/sellmotorcycle">
            <button className="border border-gray-400 shadow-md rounded-lg  h-[70px] text-lg w-[350px]">
              Bike Clothing
            </button>
          </Link>
          </div>
          
        </div>
        {/* <div className="relative lg:bottom-[200px] sm:left-[350pxpx] lg:left-[700px] bg-red-500 sm:w-[300px] sm:h-[300px] lg:h-[600px] lg:w-[800px]">
          <Image
            className="relative lg:bottom-[200px] sm:left-[350pxpx] lg:left-[700px] bg-red-500 sm:w-[300px] sm:h-[300px] lg:h-[600px] lg:w-[800px]"
            src={"/boxer.jpeg"}
            width={800}
            height={600}
            alt="boxer 150 "
            priority
          />
        </div> */}
      </div>
    </div>
  );
}
