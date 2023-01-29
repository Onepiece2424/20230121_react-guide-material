import AnimalItem from "./AnimalItem";

const AnimalList = ({animals}) => {
  return (
    <ul>
      {animals.map((animal) => {
        return <AnimalItem animal={animal} />; 
      })}
    </ul>
  )
}

export default AnimalList;
