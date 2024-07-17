import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative top-34 ml-2 text-5xl font-bold font-sans">
        <h1>
          Buy and Sell your
          <br />
          <span className="text-orange-500"> Motorcycle </span>Easy
          <br /> and Safe Way
        </h1>
      </div>
      <div className="absolute left-2/4 bg-red-300">
        <Image src={"/boxer.jpeg"} width={800} height={800} alt="boxer 150" />
      </div>
      <div className="space-x-4 relative mt-96 ml-2">
        <button className="bg-emerald-400 rounded-lg py-4 px-4 text-xl">
          Buy A Motorcycle
        </button>
        <button className="bg-emerald-400 rounded-lg py-4 px-4 text-xl">
          Sell Your Motorcycle
        </button>
      </div>
    </>
  );
}
