"use client"

import Hero from "./components/Product/hero";
import { useState, useEffect } from "react";

interface Data {
  count: number;
  next: string;
  previous: string;
  results: results[];
}
interface results {
  name: string;
  url: string;
}

export default function Home() {

  const [Data, setData] = useState<Data | null>(null);
  const [Page, setPage] = useState<number>(0);
  const [PageNumber, setPageNumber] = useState<number>(1);
  const [LoadingPage, setLoadingPage] = useState<boolean>(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoadingPage(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${Page}&limit=18`);
        const result = await response.json();
        // console.log(result);
        if (response.ok) {
          setData(result);
        } else {
          setData(null)
        }
      } catch (err) {
        console.error("error saat fetch data pokemon awal", err);
      } finally {
        setLoadingPage(false);
      }
    }
    fetchPokemon();
  }, [Page]);

  return (
    <>
      {/* SCREEN */}
      <h1 className="absolute font-bold text-4xl ml-3 mt-3 text-white">{PageNumber}</h1>
      <div className="flex flex-wrap gap-2 items-center justify-center min-h-screen p-5 bg-[#1D1616]">
        {Data?.results.map((item: results, index: number) => (
          <div className="flex gap-1" key={index}>
            <Hero
              nama={item.name}
            />
          </div>
        ))}
      </div>
      {/* FOOTER NEXT PREV */}
      <div className={`flex bottom-0 top-0 left-0 right-0 sticky justify-between items-center w-full rounded-4xl p-5 text-white ${LoadingPage ? 'animate-pulse bg-red-900' : 'bg-red-400'}`}>
        <div className="pl-4">
          {Data?.previous &&
            <button
              onClick={() => {
                setPage((prev) => prev - 18);
                setPageNumber((prev) => prev - 1);
              }}
              type="button"
              disabled={LoadingPage}
              className="uppercase font-bold border rounded-xl border-white px-5 py-2 hover:bg-white hover:text-red-400 cursor-pointer"
            >
              prev
            </button>
          }
        </div>
        <div className="pr-4">
          {Data?.next &&
            <button
              onClick={() => {{
                setPage((prev) => prev + 18);
                setPageNumber((prev) => prev + 1);
              }}}
              type="button"
              disabled={LoadingPage}
              className="uppercase font-bold border rounded-xl border-white px-5 py-2 hover:bg-white hover:text-red-400 cursor-pointer"
            >
              next
            </button>
          }
        </div>
      </div>
    </>
  );
}
