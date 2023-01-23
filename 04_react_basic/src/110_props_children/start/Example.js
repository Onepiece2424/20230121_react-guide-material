import Profile from "./components/Profile";
import Container from "./components/Container";
import WelcomeDialog from "./components/WelcomeDialog";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "blue" },
  { name: "Jane", age: 28, country: "UK", color: "red" },
];

// スプレッド構文から0番目のオブジェクトを出力
console.log({...profile[0]})

const Example = () => {
  return (
    <div>
      <Container title="順番通り渡す" children={
        [
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[1].name} {...profile[1]} />
        ]
      } />
      <Container title="個別に渡す" >
        <Profile  {...profile[1]} />
        <Profile {...profile[0]} />
      </Container>
      <WelcomeDialog />
    </div>
  );
};

export default Example;
