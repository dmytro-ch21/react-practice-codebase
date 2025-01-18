import Counter from './components/Counter'
import Like from './components/Like'
import Logo from './components/Logo';
import SampleComponent from './components/SampleComponent'

function App() {
  const cards = [
    {
      id: 1,
      title: 'Component 1',
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, error!",
      display: false
    },
    {
      id: 2,
      title: 'Component 2',
      description: "Lorem ipsum dolor sit amet.",
      display: false
    },
    {
      id: 3,
      title: 'Component 3',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia tempore neque asperiores placeat cum unde.",
      display: false
    }
  ]


  return (
    <>
      {/* One way is to use each component separately with different data
        <SampleComponent title={cards[0].title} description={cards[0].description}/>
        <SampleComponent title="Component 2" description="Description 2"/>
        <SampleComponent title="Component 3" description="Description 3"/> 
      */}
      {/* Or we can render them programatically with map function */}
      {cards.map((card) => (
        <SampleComponent key={card.id} title={card.title} description={card.description} display={card.display}/>
      ))}
      <Counter/>
      <Like/>
    </>
  );
}

export default App;
