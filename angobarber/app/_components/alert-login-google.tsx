"use client";

import { LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

const LoginDialog = () => {
    const handleLoginWithGoogle = async () =>{
         await signIn("google")
    }

    return (  
        <Dialog>

            <DialogTrigger>
                <Button size="icon" >
                    <LogIn/>
                </Button>
            </DialogTrigger>

            <DialogContent className="w-[90%] rounded-xl">

                <DialogHeader>
                    <DialogTitle>Faça seu login na plataforma</DialogTitle>
                    <DialogDescription>
                        Conecte-se usando sua conta do google
                    </DialogDescription>
                </DialogHeader>

                <Button variant="outline" className="font-bold gap-2 text-lg" 
                        onClick={handleLoginWithGoogle}>

                    <Image src="/google.svg" width={18} height={18} alt="Google icon "/>
                    Google
                </Button>

            </DialogContent>

        </Dialog>
    );
}
 
export default LoginDialog;
