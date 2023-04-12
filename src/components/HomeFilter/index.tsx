import { Div } from "./styled";


const HomeFilter = () => {

  return(
    <Div className="advertisement-filter">
       <section>
          <h3>Marca</h3>
          <p>General Motors</p>
          <p>Fiat</p>
          <p>Ford</p>
          <p>Honda</p>
          <p>Porsche</p>
          <p>Volswagen</p>					
      </section>
      <section>
          <h3>Modelo</h3>
          <p>Civic</p>
          <p>Corolla</p>
          <p>Cruze</p>
          <p>Fit</p>
          <p>Gal</p>
          <p>Ka</p>	
          <p>Onix</p>
          <p>Porsche 718</p>	
      </section>
      <section>
          <h3>Cor</h3>
          <p>Azu</p>
          <p>Branca</p>
          <p>Cinza</p>
          <p>Prata</p>
          <p>Preta</p>
          <p>Verde</p>					
      </section>
      <section>
          <h3>Ano</h3>
          <p>2022</p>
          <p>2021</p>
          <p>2018</p>
          <p>2015</p>
          <p>2013</p>
          <p>2012</p>
          <p>2010</p>
      </section>
      <section>
          <h3>Combustível</h3>
          <p>Diesel</p>
          <p>Etanol</p>
          <p>Gasolina</p>
          <p>Flex</p>					
      </section>
      <section>
          <h3>Km</h3>
          <div>								
              <input type="text" placeholder="Mínima"/>							
              <input type="text" placeholder="Máxima"/>	
          </div>
      </section>
      <section>
          <h3>Preço</h3>
          <div>
              <input type="text" placeholder="Mínima"/>
              <input type="text" placeholder="Máxima"/>	
          </div>
      </section>
    </Div>
  )
}

export default HomeFilter;