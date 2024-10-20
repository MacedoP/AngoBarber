import Banner from "./components/banner"
import Header from "./components/header"
import Search from "./components/search"

const Home = () => {
  return (
    <div>
      <Header/>

      {/*Input e o botao de pesquisa*/}
      <div className="p-5">
        <Search/>
      </div>

     {/*Banner Principal*/}
      <div className="h=[100%] p-5">
          <Banner/>
      </div>



    </div>
  )
}

export default Home
