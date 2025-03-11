'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Element from "../Element/element";
import Modal from "./modal";

interface Hero {
    nama: string;
}

interface detail {
    sprites: {
        back_default: string;
        back_female: string | null; // Jika nilai dapat berupa null
        back_shiny: string;
        back_shiny_female: string | null; // Jika nilai dapat berupa null
        front_default: string;
        front_female: string | null; // Jika nilai dapat berupa null
        front_shiny: string;
        front_shiny_female: string | null; // Jika nilai dapat berupa null
        other: {
            showdown : {
                front_default: string | null;
                back_default: string | null;
            },
            "official-artwork": {
                front_default: string;
            }
        }
    },
    stats: stats[];
    weight: number;
    height: number;
    types: types[];
}

interface types {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}
interface stats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

const Hero: React.FC<Hero> = ({ nama }) => {

    const [Data, setData] = useState<detail | null>(null);
    const [LoadingDetail, setLoadingDetail] = useState<boolean>(false);

    const [OpenModal, setOpenModal] = useState<boolean>(false);

    useEffect(() => {
        const fetchDetailPokemon = async () => {
            try {
                setLoadingDetail(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nama}`);
                const result = await response.json();
                if (response.ok) {
                    setData(result);
                } else {
                    setData(null);
                    console.log("error response not ok di pokemon : ", nama);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoadingDetail(false);
            }
        }
        fetchDetailPokemon();
    }, [nama]);

    const handleModal = () => {
        if(OpenModal){
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
    }

    return (
        <>
            <div 
                className={`flex flex-col w-[200px] h-[250px] text-white rounded-2xl p-5 cursor-pointer ${LoadingDetail ? "animate-pulse bg-gray-500" : "bg-red-400 hover:bg-red-600"}`}
                onClick={handleModal}
            >
                <div className="flex justify-center items-end text-black rounded-full h-full bg-white">
                    {Data?.sprites.other.showdown.front_default ?
                        LoadingDetail ?
                            // return null 
                            <></>
                            :
                            <div className="hover:scale-150 hover:mb-5 duration-100">
                                <Image
                                    src={Data?.sprites.other.showdown.front_default}
                                    alt={Data?.sprites.other.showdown.front_default}
                                    objectFit="cover"
                                    width={50}
                                    height={50}
                                    unoptimized
                                />
                            </div>
                        :
                        <>
                            <p className="mb-5">no image front</p>
                        </>
                    }
                </div>
                <div className="flex flex-col justify-center items-center px-3 py-2 bg-white rounded-xl">
                    <p className={`font-bold text-lg text-center uppercase ${LoadingDetail ? "text-gray-500" : "text-red-400"}`}>{nama}</p>
                    <div className="flex items-center justify-center gap-2 text-red-400">
                        {Data?.types.length != 0 &&
                            Data?.types.map((type: types, index: number) => (
                                <React.Fragment key={index}>
                                    {LoadingDetail ?
                                        <Element
                                            nama={"loading"}
                                        />
                                    :
                                        <Element
                                            nama={type.type.name}
                                        />
                                    }
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* MODAL */}
            <Modal 
                isOpen={OpenModal}
                onClose={handleModal}
                img={Data?.sprites.other["official-artwork"].front_default ? Data?.sprites.other["official-artwork"].front_default : ''}
                gif_back={Data?.sprites.other.showdown.back_default ? Data?.sprites.other.showdown.back_default : ''}
                gif_front={Data?.sprites.other.showdown.front_default ? Data?.sprites.other.showdown.front_default : ''}
                name={nama}
                weight={Data?.weight ? Data?.weight : 0}
                height={Data?.height ? Data.height : 0}
                type={Data?.types ? Data.types : []}
                stats={Data?.stats ? Data.stats : []}
            />
        </>
    )
}

export default Hero;