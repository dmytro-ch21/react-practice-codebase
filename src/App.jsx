import Logo from './components/Logo';
import SampleComponent from './components/SampleComponent'

function App() {
  const cards = [
    {
      id: 1,
      title: 'Component 1',
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, error!"
    },
    {
      id: 2,
      title: 'Component 2',
      description: "Lorem ipsum dolor sit amet."
    },
    {
      id: 3,
      title: 'Component 3',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia tempore neque asperiores placeat cum unde."
    }
  ]


  return (
    <>
      {/* <Logo /> */}
      {/* <SampleComponent title={cards[0].title} description={cards[0].description}/>
      <SampleComponent title="Component 2" description="Description 2"/>
      <SampleComponent title="Component 3" description="Description 3"/> */}
      {cards.map((card) => (
        <SampleComponent key={card.id} title={card.title} description={card.description}/>
      ))}
    </>
  );
}

export default App;
