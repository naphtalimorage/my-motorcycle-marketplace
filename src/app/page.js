import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative  ml-2 text-5xl font-bold font-sans">
        <h1>
          Buy and Sell your
          <br />
          <span className="text-orange-500"> Motorcycle </span>Easy
          <br /> and Safe Way
        </h1>
      </div>
      <div className="ml-96">
        <Image src={"/boxer.jpeg"} width={800} height={600} alt="boxer 150"/>
      </div>
      <div className="space-x-4  ml-2">
        <Link href="/components/buymotorcycle">
          <button className="bg-emerald-400 rounded-lg py-4 px-4 text-xl">
            Buy A Motorcycle
          </button>
        </Link>
        <Link href="/components/sellmotorcycle">
          <button className="bg-emerald-400 rounded-lg py-4 px-4 text-xl">
            Sell Your Motorcycle
          </button>
        </Link>
      </div>
    </>
  );
}
