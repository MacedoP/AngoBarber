import ServiceItemBarber from "@/app/components/barbershop-service-item";
import MenuArrowBack from "@/app/components/button-menu-back";
import Contactos from "@/app/components/footer-number-contact";
import { db } from "@/app/lib/prisma";
import { MapPin, StarIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";


interface BarberShopPageProps {
    params:{
        id: string
    }
}

const BarbershopDetailPage =  async ({params}: BarberShopPageProps) => {
    const barbershop = await db.barbershop.findUnique({
        where:{
            id: params.id
        },
        include:{
            services: true
        }
    })

    if(!barbershop){
        return notFound
    }

    

    return ( 
        <div>
            {/*Div que exibe uma foto das barbearia tecnicamente um dos serviços*/}
            <div className="relative w-full h-[250px]">
                <Image 
                    src={barbershop?.imageUrl} 
                    fill className="object-cover" 
                    alt={barbershop?.name}
                />
                {/*Componente que contem os icone para voltar a home pahe e o icon menu*/}
                <MenuArrowBack/>
            </div>

            {/*Div que contem o nome da barbearia o endereço*/}
            <div className="p-5  border-b border-solid mb-3">
                <h1 className="font-bold text-xl  mb-6">{barbershop?.name}</h1>

                <div className="flex items-center gap-1 mt-2 ">
                    <MapPin className="text-primary" size={18}/>
                    <p className="text-sm">{barbershop?.address}</p>

                </div>

                <div className="flex items-center gap-1 mt-2">
                    <StarIcon className="fill-primary  text-primary"  size={18}/>
                    <p className="text-sm">5,0 (889 avaliaçoes)</p>
                </div>
            </div>

            {/*Descricao das barbearias*/}
            <div className="p-5 border-d border-solid space-y-4">
                    <h2 className="uppercase text-gray-400 font-bold text-xs">Sobre nós</h2>
                    <p className="w-full text-justify text-sm">{barbershop?.description}</p>
            </div>

            {/*Div que contem os serviços e os preços do component barbershop-serive-item*/}
            <div className="p-5  space-y-4 border-b border-solid">
                <h2 className="uppercase text-gray-400 font-bold text-xs mb-3">Serviços</h2>
                <div className="space-y-3">
                    {barbershop.services.map((service)=>(
                        <ServiceItemBarber service={service} key={service.id} />
                    ))}
                </div>
            </div>


            
            <div className="p-5">
                <h2  className="uppercase text-gray-400 font-bold text-xs mb-3">contactos</h2>
                {barbershop.phones.map((phone)=>(
                    <Contactos phones={phone} key={phone}/>
                ))}
            </div>
        </div>
     );
}
 
export default BarbershopDetailPage;