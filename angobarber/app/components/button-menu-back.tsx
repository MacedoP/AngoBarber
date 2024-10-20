import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeftIcon, MenuIcon } from "lucide-react";

const MenuArrowBack = () => {
    return (  
        <div>
             {/*Botao com seta para voltar a Home page*/}
             <Button className="absolute left-4 top-4" size="icon" variant="secondary" asChild>
               <Link href="/">
                <ChevronLeftIcon/>
               </Link>
            </Button>


            

            {/*Botap com o icon de menu para abrir o nosso menu lateral*/}
            <Button className="absolute right-4 top-4" size="icon" variant="secondary">
                <MenuIcon/>
            </Button>
        </div>
    );
}
 
export default MenuArrowBack;