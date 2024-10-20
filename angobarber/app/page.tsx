import Banner from "./components/banner"
import Header from "./components/header"
import Search from "./components/search"
import { Avatar, AvatarImage } from "./components/ui/avatar"
import { Badge } from "./components/ui/badge"
import { Card, CardContent } from "./components/ui/card"

const Home = () => {
  return (
    <div>
      <Header />

      {/*Input e o botao de pesquisa*/}
      <div className="p-5">
        <Search />
      </div>

      {/*Banner Principal*/}
      <div className="h=[100%] p-5">
        <Banner />
      </div>

      {/*Div com as datas dos agendamentos contendo o dia o mes e o nome da barbearia*/}
      <div className="p-5">
        <Card className="">
          <CardContent className="flex justify-between p-0">
            {/*Div a esquerda*/}
            <div className="flex flex-col gap-2 py-5 pl-4">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-bold">Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia Lumi Fino</p>
              </div>
            </div>

            {/*Div a direita*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Dezembro</p>
              <p className="text-2xl">12</p>
              <p className="tex-sm">20:00</p>
            </div>

          </CardContent>
        </Card>
      </div>

      
    </div>
  )
}

export default Home
