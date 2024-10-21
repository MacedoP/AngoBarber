import BarberShopItem from "../components/barbershop-item";
import Header from "../components/header";
import Search from "../components/search";
import { db } from "../lib/prisma";

interface BarbershopPageSearchResultProps {
    searchParams:{
        title? : string,
        services: string,
    }
}

const BarbershopPageSearchResult = async ({searchParams}: BarbershopPageSearchResultProps) => {
    const barbershops = await db.barbershop.findMany({
        where: {
          OR:[
            //se eu passar um titulo busco um servico pelo seu titulo 
            searchParams?.title? {
              name:{
                contains: searchParams?.title,
                mode: "insensitive"
    
              },
            }: {},
            //se eu passa um servico procuro o serivo dentro de uma barbearia
           searchParams.services?{
            services:{
              some: {
                name: {
                  contains: searchParams?.services,
                  mode: "insensitive",
                } ,
                },
              },
            }: {},
          ],
        },
      })

    return (  
        <div >
                
                 <Header/>
                
            
            <div className="p-5 mt-4">
                <Search/>
            </div>

             <h2 
             className=" px-5 text-gray-400 uppercase font-bold text-xs mb-1 mt-2 gap-2">
                Resultado para
                <q>{searchParams?.title || searchParams?.services}</q>
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