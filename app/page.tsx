import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const colors = ["red", "orange", 'blue', "white", "black", "cyan", "lemon", "gray"]

  return (
    <main className="p-24 min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="flex flex-col justify-center items-center space-y-5 w-full max-w-xl mx-auto">
        <span className="uppercase border border-yellow-500 bg-orange-500/25 px-4 rounded-xl ">url states!</span>
        <h2 className="md:text-3xl text-xl uppercase font-extrabold z-10">Hello World without useState!</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center py-10 w-full max-w-xl mx-auto ">
        <Image key={Number(searchParams.color)} src={`${`/shirts/shirt-${searchParams.color || "white"}.png`}`} className={cn("w-auto h-auto animate-bounce  rounded-xl")} alt="Vercel Logo" width={200} height={200} priority />
        <div className="space-y-3">
          <h2 className="text-center text-xl font-extrabold">Available colors</h2>
          <div className="grid grid-cols-2 gap-4 h-full w-lg">
            {colors.map((color, i) => (
              <Link
                key={i}
                href={{ pathname: '/', query: { color } }}
                scroll={false}
                className={cn(`w-24 h-10 uppercase flex items-center justify-center rounded-xl hover:bg-slate-50 hover:text-black border`,
                  { "bg-slate-50 text-black": color === searchParams.color })}
                style={{ borderColor: color, boxShadow: `0 1px 0 1px ${color}` }}
              >
                {color}</Link>
            ))}
          </div></div>
      </div>
    </main>
  )
}
