"use client";
import { Calendar1Icon, HomeIcon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../file_item_filter/item-search"
import Image from "next/image"
import ButtonOut from "./ button-logout";
import Link from "next/link";
import LoginDialog from "./alert-login-google";


const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>


        <div className="py-5 border-b border-solid flex items-center  justify-between gap-2">
          <h2 className="font-bold text-md">Olá, faça seu login</h2>
          <LoginDialog/>
            {/* <Avatar>
                <AvatarImage src="/banner04.jpg"/>
            </Avatar>

            <div className="text-sm ">
                <p className="font-bold">Miguel Paulo</p>
                <p className="text-gray-400">lumibarber53@gmail.com</p>
            </div> */}

        </div>

        <div className="flex flex-col gap-2 py-5 border-b border-solid">

          <SheetClose asChild>
            <Button className="flex items-center justify-start gap-2" asChild>
                <Link href="/">
                    <HomeIcon size={18} />
                    Ínicio
                </Link>
            </Button>
          </SheetClose>

          <Button
            className="flex items-center justify-start gap-2"
            variant="ghost"
          >
            <Calendar1Icon />
            Agendamento
          </Button>
        </div>

          {/*Div que guarda os nosso itens de busca rapida com os respectivos icon*/}
        <div className="flex flex-col  items-start  gap-2 border-b border-solid  mb-4 py-5">
            {quickSearchOptions.map((filter)=>(
                <Button key={filter.title} variant="ghost"  
                className="gap-3 text-white text-md w-full flex justify-start">
                    <Image 
                        src={filter.imageUrl} 
                        alt={filter.title}
                        width={18}
                        height={18}
                    />
                    {filter.title}

                </Button>
            ))}
        </div>


        <ButtonOut/>

      </SheetContent>
    </Sheet>
  )
}

export default SideBar
