"use client"
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const CalendarMenu = () => {
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
            </SheetContent>
        </Sheet>
     );
}
 
export default CalendarMenu;