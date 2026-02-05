


export default function Product({ img, name, price }) {

  return (
    <>
      <div className="card">
        <img src={img} alt="" />
        <div className="overlay">
        <h2>
            {name}
        </h2>
        <p>
            {price}
        </p>
        </div>
      </div>
    </>
  )
}
