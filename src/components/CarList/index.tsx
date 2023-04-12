import Card from "../../components/Card";
import { Section } from "./styled";

function CarList() {
  
    const mycar = {
      image: {
        main_image:
          "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/novo-cruze-nb.jpg?imwidth=960",
      },
      model: "Masserati - Ghibli",
      description: "Lorem Ipsum is simply a dummy text of the printing and typesetting industry.",
      user: {
        name: "Anderson",
        image_url: "",
      },
      km: 21000,
      launch_year: 2019,
      price: 25477.5,
    };
      
    return (
      <Section>
        <Card car={mycar}></Card>
        <Card car={mycar}></Card>
        <Card car={mycar}></Card>
        <Card car={mycar}></Card>
        <Card car={mycar}></Card>
      </Section>
    );
  }
  
  export default CarList;
  
