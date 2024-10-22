"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { ptBR} from "date-fns/locale";
import { BarbershopService } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import AvailableTime from "./barber-time-free";


interface ResumoReversa{
  service: BarbershopService
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

const CalendarMenu = ( {service}: ResumoReversa) => {
    const[selectDay, setSelectDay] = useState <Date | undefined>(undefined);

    const [selectTime, setTime] =useState<string | undefined>(undefined)

    const handleTimeSelect = (time: string) =>{
        setTime(time);
    }
 
    const handleDaySelect = (date: Date | undefined)=>{
        setSelectDay(date)

    }

    return ( 
        <Sheet>
            <SheetTrigger asChild>
                <Button className="flex items-center justify-end" 
                    variant="secondary" 
                     size="sm">
                    Reservar
                </Button>
            </SheetTrigger>

            <SheetContent className="px-0">
                <SheetHeader>
                    <SheetTitle className="p-1 border-b border-solid">Fazer Reserva</SheetTitle>
                </SheetHeader>

                {/*Div que contem o nosso calendario*/}
{/*                 
                <div className=" border-b border-solid py-5">
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

                 {/*Div que contem os horaios disponiveis para os serviços, as horas so seram mostrados apos ter uma uma selecionada*/}
                {/* {selectDay &&(
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
                )} */}

                {/* {selectTime && (
                  <Card>
                    <CardContent>
                      <div>
                        <AvailableTime service={service}/>
                      </div>
                    </CardContent>
                  </Card>
                )} */}

              
                
            </SheetContent>
        </Sheet>
     );
}
 
export default CalendarMenu;