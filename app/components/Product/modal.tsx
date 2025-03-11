"use client"

import Image from "next/image";
import Element from "../Element/element";
import React from "react";
import { TbFavicon, TbHeart, TbShield, TbShieldCheckeredFilled, TbSword, TbSwords, TbWind } from "react-icons/tb";

interface Modal {
    isOpen: boolean;
    onClose: () => void;
    img: string;
    gif_front: string;
    gif_back: string;
    name: string;
    height: number;
    weight: number;
    type: types[];
    stats: stats[];
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

const Modal: React.FC<Modal> = ({ isOpen, onClose, img, gif_back, gif_front, name, height, weight, type, stats }) => {
    if (!isOpen) {
        return null;
    } else {
        return (
            <div
                className="flex-wrap fixed inset-0 flex items-center justify-evenly mx-2 bg-black/85"
            >
                <Image
                    src={img}
                    alt={img}
                    objectFit="cover"
                    width={600}
                    height={600}
                    unoptimized
                />
                <div className="bg-[#1D1616] p-6 rounded-4xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-out scale-100 opacity-100 h-[90vh] border-4 border-double border-white">
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white">
                        <p className="text-2xl uppercase font-bold text-white">{name}</p>
                        <button onClick={onClose} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                            <svg className="h-6 w-6 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-evenly text-white">
                        <div className="flex items-center justify-center p-2 rounded-xl border border-white hover:bg-white hover:text-black">
                            <h1 className="uppercase">height : {height} M</h1>
                        </div>
                        <div className="flex items-center justify-center p-2 rounded-xl border border-white hover:bg-white hover:text-black">
                            <h1 className="uppercase">weight : {weight} KG</h1>
                        </div>
                    </div>
                    <div className="flex flex-col w-full rounded-2xl py-4 mt-5 border border-white text-white justify-center">
                        <h1 className="font-bold text-lg text-center mb-3">STATS</h1>
                        <div className="flex flex-col gap-2 justify-start items-center my-1 px-5">
                            {stats.map((stat: stats, index) => (
                                <div
                                    key={index}
                                    className={`flex w-full items-center font-bold justify-between p-2 rounded-xl border
                                        ${stat.stat.name === "hp" && "border-red-400 hover:bg-red-400"}    
                                        ${stat.stat.name === "attack" && "border-sky-400 hover:bg-sky-400"}    
                                        ${stat.stat.name === "defense" && "border-green-400 hover:bg-green-400"}    
                                        ${stat.stat.name === "special-attack" && "border-violet-600 hover:bg-violet-600"}    
                                        ${stat.stat.name === "special-defense" && "border-stone-600 hover:bg-stone-600"}    
                                        ${stat.stat.name === "speed" && "border-slate-300 hover:bg-slate-300 hover:text-black"}    
                                    `}
                                >
                                    <div className="flex items-center gap-2 w-full">
                                        {stat.stat.name === "hp" ?
                                            <TbHeart />
                                            :
                                            stat.stat.name === "attack" ?
                                                <TbSword />
                                                :
                                                stat.stat.name === "defense" ?
                                                    <TbShield />
                                                    :
                                                    stat.stat.name === "special-attack" ?
                                                        <TbSwords />
                                                        :
                                                        stat.stat.name === "special-defense" ?
                                                            <TbShieldCheckeredFilled />
                                                            :
                                                            stat.stat.name === "speed" ?
                                                                <TbWind />
                                                                :
                                                                <TbFavicon />
                                        }
                                        <p className="uppercase">{stat.stat.name}</p>
                                    </div>
                                    <div className="w-full text-end">{stat.base_stat}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-6 items-center">
                        <p className="text-white font-bold text-lg">ELEMENT</p>
                        <div className="flex flex-wrap justify-evenly items-center gap-5">
                            {type.map((item: types, index: number) => (
                                <div className="p-2 rounded-xl bg-white" key={index}>
                                    <Element
                                        nama={item.type.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-evenly gap-2">
                        <div className="flex items-center justify-center p-2 rounded-full hover:scale-150 hover:mb-6">
                            <Image
                                src={gif_front}
                                alt={gif_front}
                                width={60}
                                height={60}
                                unoptimized
                            />
                        </div>
                        <div className="flex items-center justify-center p-2 rounded-full hover:scale-150 hover:mb-6">
                            <Image
                                src={gif_back}
                                alt={gif_back}
                                width={60}
                                height={60}
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Modal;