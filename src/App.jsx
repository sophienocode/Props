
/*

 * Props / Properties are argumetns passed into React components.

 * Props allows us to pass data from parent component to a child component.

 * Props are passed to components via HTML attributes.

*/

import Card from "./components/Card"
import Person from "./components/Challenge/Person"
import Product from "./components/Challenge/Product"
import Props from "./components/Props"
import PropsDestructuring from "./components/PropsDestructuring"


function App() {


  return (
    <>
      <Props 
      img="/images/Porsche 911 GTS.jfif"
      name="Porsche 991 GTS "
      age={2026}
      isTuned={true}
      hobbies={["Drift, ", "Cut up Traffic, ", "Chase players two, ", "swin like squeeze benz"]}
      />

      <hr />

      <PropsDestructuring 
      img="/images/Porsche Taycan 4S.jfif"
      name="Porsche 991 GTS "
      age={2026}
      isTuning={false}
      hobbies={["Chasing BMWs and Mercedes, ", "Cut up Traffic, ", ]}
      />

      <hr />
      <Person 
      img="/images/sueca.png"
      name="Emma"
      age={23}
      
      />

      <hr />

      <Product 
      img="/images/iphone16.webp"
      name="Iphone"
      price={3000}
      
      />

      <Card>
        <h1>My Card 1</h1>
        <p>This is some content for card 1</p>
      </Card>

      <Card>
        <h1>My Card 2</h1>
        <p>This is some content for card 1</p>
      </Card>

      <Card>
        <h1>My Card 3</h1>
        <p>This is some content for card 1</p>
      </Card>

    </>
  )
}

export default App
