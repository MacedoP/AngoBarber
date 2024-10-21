import Link from "next/link";
import BarberShopItem from "../components/barbershop-item";
import Header from "../components/header";
import Search from "../components/search";
import { db } from "../lib/prisma";

interface BarbershopPageSearchResultProps {
    searchParams:{
        search? : string
    }
}

const BarbershopPageSearchResult = async ({searchParams}: BarbershopPageSearchResultProps) => {
    const barbershops = await db.barbershop.findMany({
        where:{
            name:{
                contains: searchParams?.search,
                mode: "insensitive",
            }
        }
    })

    return (  
        <div >

            <Link href="/">
                 <Header/>
            </Link> 

            <div className="p-5 mt-4">
                <Search/>
            </div>

             <h2 
             className=" px-5 text-gray-400 uppercase font-bold text-xs mb-1 mt-2 gap-2">
                Resultado para
                <q>{searchParams.search}</q>
            </h2>

            <div className="grid grid-cols-2 gap-4 p-5 desktop">
                {barbershops.map((barbershop)=> (
                    <BarberShopItem 
                        key={barbershop.id} 
                        barbershop={barbershop}/>
                ))}
            </div>

        </div>
    );
}
 
export default BarbershopPageSearchResult;