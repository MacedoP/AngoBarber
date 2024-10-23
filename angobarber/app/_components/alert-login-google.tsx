"use client";

import { LogIn } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { signIn } from "next-auth/react";
import SignDialog from "./sign-in-dialog";

const LoginDialog = () => {
    const handleLoginWithGoogle = async () =>{
         await signIn("google")
    }

    return (  
        <Dialog>

            <DialogTrigger>
                <Button size="icon"  onClick={handleLoginWithGoogle}>
                    <LogIn/>
                </Button>
            </DialogTrigger>

            <SignDialog/>
{/* 
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

            </DialogContent> */}

        </Dialog>
    );
}
 
export default LoginDialog;
