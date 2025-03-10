import Image from "next/image";

interface Element {
    nama: string;
}

const Element: React.FC<Element> = ({ nama }) => {
    if(nama === "grass"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/0/08/Battrio_Grass_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/0/08/Battrio_Grass_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "fire"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/8/8a/Battrio_Fire_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/8/8a/Battrio_Fire_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "poison"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/2/20/Battrio_Poison_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/2/20/Battrio_Poison_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "water"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/2/29/Battrio_Water_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/2/29/Battrio_Water_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "flying"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/9/97/Battrio_Flying_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/9/97/Battrio_Flying_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "bug"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/5/57/Battrio_Bug_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/5/57/Battrio_Bug_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "normal"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/7/75/Battrio_Normal_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/7/75/Battrio_Normal_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "ice"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/0/01/Battrio_Ice_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/0/01/Battrio_Ice_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "rock"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/7/77/Battrio_Rock_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/7/77/Battrio_Rock_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "steel"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/5/59/Battrio_Steel_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/5/59/Battrio_Steel_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "dark"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/0/0f/Battrio_Dark_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/0/0f/Battrio_Dark_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "ghost"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/2/28/Battrio_Ghost_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/2/28/Battrio_Ghost_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "psychic"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/6/61/Battrio_Psychic_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/6/61/Battrio_Psychic_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "dragon"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/5/51/Battrio_Dragon_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/5/51/Battrio_Dragon_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "electric"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/0/02/Battrio_Electric_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/0/02/Battrio_Electric_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "fighting"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/1/1b/Battrio_Fighting_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/1/1b/Battrio_Fighting_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "ground"){
        return(
            <div className="flex justify-center items-center gap-1">
                <Image 
                    src='https://archives.bulbagarden.net/media/upload/f/f1/Battrio_Ground_type.png'
                    alt="https://archives.bulbagarden.net/media/upload/f/f1/Battrio_Ground_type.png"
                    width={20}
                    height={20}
                />
                <p>{nama}</p>
            </div>
        );
    } else if(nama === "loading"){
        return(
            <div className="flex justify-center items-center gap-1 bg-gray-500 py-1 px-5 rounded-xl animate-pulse">
            </div>
        );
    } else {
        return(
            <div className="flex justify-center items-center gap-1">
                <div className="flex text-sm p-2 bg-black rounded-full"></div>
                <p>{nama}</p>
            </div>
        );
        
    }
}

export default Element;