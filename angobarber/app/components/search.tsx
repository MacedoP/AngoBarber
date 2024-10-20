import { SearchIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Search = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Olá Fracisco</h2>
      <p>Domingo, 20 de outubro</p>

      <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Faça sua busca..." />
        <Button>
          <SearchIcon />
        </Button>
      </div>
    </div>
  )
}

export default Search
