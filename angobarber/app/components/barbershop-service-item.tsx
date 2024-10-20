import { BarbershopService } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface ServiceItemProps{
    service: BarbershopService
}

const ServiceItemBarber = ({service}: ServiceItemProps) => {
    return ( 
        <Card className="border-b border-solid">
            <CardContent className="flex gap-3  w-full  p-3">

            {/*Div que contem as imagens dos serviços*/}
            <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px] container_img ">
                <Image
                    src={service.imageUrl}
                    alt={service.name}
                    fill className="object-cover barber_img"
                />
            </div>

            <div className="space-y-3 w-full">
                <h2 className="font-semibold">{service.name}</h2>
                <p className="text-sm text-gray-400">{service.description}</p>



                <div className="flex justify-between items-center w-full ">

                    <p className="text-primary font-bold text-sm">{Intl.NumberFormat("pt-BR",{
                        style: "currency",
                        currency: 'AOA'
                    }).format(Number(service.price))}</p>

                    <Button className="flex items-center justify-end" variant="secondary" size="sm">
                        Reservar
                    </Button>

                </div>
            </div>
            </CardContent>
        </Card>
     );
}
 
export default ServiceItemBarber;