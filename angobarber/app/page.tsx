
import Header from "./_components/header"
import { db } from "./_lib/prisma"
import Banner from "./_components/banner"
import Agendamento from "./_components/banner-agendamento"
import BarberShopItem from "./_components/barbershop-item"
import Search from "./_components/search"
import Filter from "./_components/filter-service"


const Home = async () => {
  //Chamando o nosso banco de dados

  const barbershops = await db.barbershop.findMany({})
  const popularesBarbershop = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      <Header />

      {/*Input e o botao de pesquisa*/}
      <div className="mt-4 p-5">
        <Search />
      </div>

      {/*Filter component*/}

      <Filter />

      {/*Banner Principal*/}
      <div className="h=[100%] p-5">
        <Banner />
      </div>

      <div className="p-5">
        <Agendamento />

        {/*Abaixo estamos a rodar os nosso bancos  e mostrar as nossas imagens*/}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="[&:: -webkit-scrollbar]:hidden flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="[&:: -webkit-scrollbar]:hidden flex gap-4 overflow-auto">
          {popularesBarbershop.map((barbershop) => (
            <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
