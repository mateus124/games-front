import Header from "../../components/utils/Header/Header";
import Link from "../../components/utils/Link/Link";
import Card from "../../components/utils/Card/Card";
import { BsSearch, BsFillGridFill, BsFillFunnelFill } from "react-icons/bs";

function Home() {
  return (
    <div className="main">
      <Header></Header>
      <div>
        <h1>Produtos disponíveis</h1>
        <Link text="Adicionar Produto" link="/add-product"></Link>
      </div>
      <form>
        <BsSearch />
        <input type="text" name="search" id="search" placeholder="Pesquisar" />
      </form>
      <div>
        <button>
          <BsFillGridFill /> Visualização
        </button>
        <button>
          <BsFillFunnelFill /> Filtrar
        </button>
      </div>
      <ul>
        <Card
          title="Super Nitendo"
          desc="Capacidade para dois jogadores. Acompanha um controle"
          price={500}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/SNES-Mod1-Console-Set.jpg/1200px-SNES-Mod1-Console-Set.jpg"
        />
      </ul>
    </div>
  );
}

export default Home;
