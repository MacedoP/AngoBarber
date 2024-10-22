"use client"
import { Barbershop, BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Calendar } from "./ui/calendar"
import { ptBR} from "date-fns/locale";
import { format, set, setHours, setMinutes } from "date-fns"
import { useState } from "react"
import { createBooking } from "../_actions/create-booking"
import { useSession } from "next-auth/react"
import { toast } from "sonner"



interface ServiceItemProps {
  service: BarbershopService
  barbershop:Pick< Barbershop, 'name'>
}
const TIME_LIST = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
]
const ServiceItemBarber = ({ service, barbershop }: ServiceItemProps) => {
  const {data} = useSession()
    const[selectDay, setSelectDay] = useState <Date | undefined>(undefined);

    const [selectTime, setTime] =useState<string | undefined>(undefined)

    const handleTimeSelect = (time: string) =>{
        setTime(time);
    }
 
    const handleDaySelect = (date: Date | undefined)=>{
        setSelectDay(date)

    }

    const handleCreateBooking = async () =>{
      if(!selectDay || !selectTime) return;
      try{
  
          const hour = Number(selectTime.split(":")[0]);
          const minute = Number(selectTime.split(":")[1]);
        
          const newDate = set(selectDay,{
              minutes: minute,
              hours: hour,
          })
      
          await createBooking({
              serviceId: service.id,
              date: newDate,
              userId: "cm2iwz9jm0000ih6h0ync3xdz"
          })
  
          toast.success("Reserva criada com sucesso!")
      }catch(error){
          console.error(error)
          toast.error("Erro ao criar reserva!")
  
      };
      
  }


  return (
    <Card className="border-b border-solid">
      <CardContent className="flex w-full gap-3 p-3">
        {/*Div que contem as imagens dos serviços*/}
        <div className="container_img relative max-h-[110px] min-h-[110px] min-w-[110px] max-w-[110px]">
          <Image
            src={service.imageUrl}
            alt={service.name}
            fill
            className="barber_img object-cover"
          />
        </div>

        <div className="w-full space-y-3">
          <h2 className="font-semibold">{service.name}</h2>
          <p className="text-sm text-gray-400">{service.description}</p>

          <div className="flex w-full items-center justify-between">
            <p className="text-sm font-bold text-primary">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "AOA",
              }).format(Number(service.price))}
            </p>

            {/*Component que guarda o botao reservar no lado direito do preço*/}
            {/****************************************************************/}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  className="flex items-center justify-end"
                  variant="secondary"
                  size="sm"
                >
                  Reservar
                </Button>
              </SheetTrigger>

              <SheetContent className="px-0">
                <SheetHeader>
                  <SheetTitle className="border-b border-solid p-1 text-center">
                    Fazer Reserva
                  </SheetTitle>
                </SheetHeader>

                 {/********************** CALENDARIO ****************************************/}
                  <div className=" border-b border-solid py-5 flex items-center justify-center">
                      <Calendar 
                          mode="single" 
                          locale={ptBR}
                          selected={selectDay}
                          onSelect={handleDaySelect}
                          styles={{
                              head_cell: {
                                width: "100%",
                                textTransform: "capitalize",
                              },
                              cell: {
                                width: "100%",
                              },
                              // button:{
                              //     width: "100%",
                              // },
                              nav_button_previous: {
                                width: "32px",
                                height: "32px",
                              },
                              caption: {
                                textTransform: "capitalize",
                              },
                          }}/>
                  </div>

                   {/************************** HORARIOS ********************************/}
                   {selectDay && (
                    <div 
                          className="flex items-center gap-3  p-5 overflow-x-auto relative border-b border-solid">
                        {TIME_LIST.map((time)=>(
                            <Button 
                                key={time} 
                                variant={selectTime === time? "default" : "outline"} 
                                className="rounded-full"
                                onClick={ () => handleTimeSelect(time)}>
                                {time}
                            </Button>
                        ))}
                    </div>
                   )}

                    {/************************** RESUMO DA RESERVA ********************************/}
                     {selectTime && selectDay && (
                        <div className="p-5">
                          <Card>
                            <CardContent className="p-3 space-y-3">
                              {/************************** Preço e o tipo de serviço ********************************/}
                              <div className="flex justify-between items-center ">
                                <h2 className="font-bold">{service.name}</h2>
                                <p className="text-sm font-bold">
                                  {Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "AOA",
                                  }).format(Number(service.price))}
                                </p>
                              </div>

                              {/************************** Data e o dia da Reserva ********************************/}
                              <div className="flex justify-between items-center ">
                                <h2 className="text-sm text-gray-400">Data</h2>
                                <p className="text-sm">
                                  {format(selectDay, "d 'de' MMMM", {locale: ptBR})}
                                </p>
                              </div>

                              {/************************** HORAROIO DA RESERVA ********************************/}
                              <div className="flex justify-between items-center ">
                                <h2 className="text-sm text-gray-400">Hora</h2>
                                <p className="text-sm">
                                  {selectTime}
                                </p>
                              </div>
                              {/************************** NOME DA BARBEARIA ONDE FOI FEITO A RESERVA ********************************/}
                              <div className="flex justify-between items-center ">
                                <h2 className="text-sm text-gray-400">Barbearia</h2>
                                <p className="text-sm">
                                {barbershop.name}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      )}
                        {/************************** BOTAO DE CONFIRMAR A RESERVA ********************************/}
                        <SheetFooter className="px-5">
                          <SheetClose asChild>
                            <Button onClick={handleCreateBooking} className="font-bold">Confirmar</Button>
                          </SheetClose>
                        </SheetFooter>
                      
              </SheetContent>
            </Sheet>
            {/****************************************************************/}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItemBarber
