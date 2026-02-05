

export default function PropsDestructuring({ img, name, age, hobbies, isTuning }) {
  return (
    <>
      <section className="card">
    <img src={img} alt={name} />
    <div className="overlay">
        <h1>Name:  {name} 
        </h1>    
        <h2>
            Age: {age}
        </h2>
        <h3>
            Is Tuning: {isTuning}
        </h3>
        <h4>
            Hobbies: { hobbies }
        </h4>
    </div>
    </section>  
    </>
  )
}
