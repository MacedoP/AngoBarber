import Banner from "./components/banner"
import Agendamento from "./components/banner-agendamento"
import BarberShopItem from "./components/barbershop-item"
import Filter from "./components/filter-service"
import Header from "./components/header"
import Search from "./components/search"
import { db } from "./lib/prisma"

const Home = async () => {
  //Chamando o nosso banco de dados

  const barbershops = await db.barbershop.findMany({})
  const popularesBarbershop = await db.barbershop.findMany({
    orderBy: {
      name: "desc"
    }
  })
  

  return (
    <div>
     
        <Header />
    

      {/*Input e o botao de pesquisa*/}
      <div className="p-5 mt-4">
        <Search />
      </div>


        {/*Filter component*/}
      
        <Filter/>

      {/*Banner Principal*/}
      <div className="h=[100%] p-5">
        <Banner />
      </div>

    
      
     
      <div className="p-5">
        <Agendamento/>

              {/*Abaixo estamos a rodar os nosso bancos  e mostrar as nossas imagens*/}
              <h2 className="text-gray-400 uppercase font-bold text-xs mb-3 mt-6">Recomendados</h2>
              <div className="gap-4 flex  overflow-auto [&:: -webkit-scrollbar]:hidden">
                {barbershops.map((barbershop)=>(
                  <BarberShopItem key={barbershop.id} barbershop ={barbershop} 
                  />
                ))}
              </div>

              <h2 className="text-gray-400 uppercase font-bold text-xs mb-3 mt-6">Populares</h2>
              <div className="gap-4 flex  overflow-auto [&:: -webkit-scrollbar]:hidden">
                {popularesBarbershop.map((barbershop)=>(
                  <BarberShopItem key={barbershop.id} barbershop ={barbershop} 
                  />
                ))}
              </div>

      </div>

    </div>
  )
}

export default Home
