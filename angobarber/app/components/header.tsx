import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Sheet, SheetTrigger } from "./ui/sheet"
import Image from "next/image";

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        {/*Div que contem a  nossa logo*/}
        <div className="logo_container flex">
          <Image src="/scissor.svg"  alt="Scisssor picture"  width={18} height={18}/>
          <h1 className="logo">
            <span>Lm Barber</span> Shop
          </h1>
        </div>

        {/*BOTAO DO MENU LATERAL A DIREITA COM ICON DO MENU NO HEADER*/}
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon/>
            </Button>
          </SheetTrigger>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
