
const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animals.map((animal) => <li key={animal.toString()}>Hello, {animal}</li>)}
      </ul>
    </>
  );
};

export default Example;
