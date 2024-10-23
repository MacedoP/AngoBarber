import { signIn } from "next-auth/react"
import Image from "next/image"
import { Button } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

const SignDialog = () => {

  const handleLoginWithGoogle = async () => {
    await signIn("google")
  }

  return (

    <DialogContent className="w-[90%] rounded-xl">
      <DialogHeader>
        <DialogTitle>Faça seu login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do google
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-2 text-lg font-bold"
        onClick={handleLoginWithGoogle}
      >
        <Image src="/google.svg" width={18} height={18} alt="Google icon " />
        Google
      </Button>
    </DialogContent>
    
  )
}

export default SignDialog
