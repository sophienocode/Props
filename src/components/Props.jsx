

/*
    Use destructuring 
    for cleaner code. 

    export default function Props({ name }) {
    return (
        <section>
        <h1>Name: {name}</h1>
        </section>
    );
    }


*/


export default function Props(props){
    


  return (
    <>
    <section className="card">
    <img src={props.img} alt={props.name} />
    <div className="overlay">
        <h1>Name:  {props.name} 
        </h1>    
        <h2>
            Age: {props.age}
        </h2>
        <h3>
            Is Tuning: {props.isTuned}
        </h3>
        <h4>
            Hobbies: { props.hobbies }
        </h4>
    </div>
    </section>  
    </>
  )
}
