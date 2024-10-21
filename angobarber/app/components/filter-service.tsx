import Image from "next/image"
import { quickSearchOptions } from "../file_item_filter/item-search"
import { Button } from "./ui/button"

const Filter = () => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-wrap justify-center gap-3 p-2">
      {/*[&:: -webkit-scrollbar]:hidden mb-[0px] mt-[-10px] flex scroll-mx-0 gap-3 overflow-scroll p-5*/}

      {quickSearchOptions.map((options) => (
        <Button
          variant="secondary"
          key={options.title}
          className="gap-2 text-white"
        >
          <Image
            src={options.imageUrl}
            alt={options.title}
            width={16}
            height={16}
          />
          {options.title}
        </Button>
      ))}
    </div>
  )
}

export default Filter
