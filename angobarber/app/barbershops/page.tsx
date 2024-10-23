
import Header from "../_components/header"
import { db } from "../_lib/prisma"
import BarberShopItem from "../_components/barbershop-item"
import Search from "../_components/search"


interface BarbershopPageSearchResultProps {
  searchParams: {
    title?: string
    services: string
  }
}

const BarbershopPageSearchResult = async ({
  searchParams,
}: BarbershopPageSearchResultProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        //se eu passar um titulo busco um servico pelo seu titulo
        searchParams?.title
          ? {
              name: {
                contains: searchParams?.title,
                mode: "insensitive",
              },
            }
          : {},
        //se eu passa um servico procuro o serivo dentro de uma barbearia
        searchParams.services
          ? {
              services: {
                some: {
                  name: {
                    contains: searchParams?.services,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  })

  return (
    <div>
      <Header />

      <div className="mt-4 p-5">
        <Search />
      </div>

      <h2 className="mb-1 mt-2 gap-2 px-5 text-xs font-bold uppercase text-gray-400">
        Resultado para
        <q>{searchParams?.title || searchParams?.services}</q>
      </h2>

      <div className="desktop grid grid-cols-2 gap-4 p-5">
        {barbershops.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPageSearchResult
