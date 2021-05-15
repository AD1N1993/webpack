import {useState} from "react";

const car = {
  name: "Tesla",
  speed: 28,
  color: "red"
}

const superCar = {
  ...car,
  nitro: true,
  color: "blue"
}

console.log(car)
console.log(superCar)

const Cars = () => {
  // debugger
  const [currentCar, setCar] = useState({});
  return (
	<div>
	  <h3>Current Cars</h3>
	  <button onClick={()=>setCar(car)}>Car</button>
	  <button onClick={()=>setCar(superCar)}>SuperCar</button>
	  <ul>
		{Object.keys(currentCar).map(key=><li key={key}>
		  {key}: {car[key]}
		</li>)}
	  </ul>
	</div>
  )
}

export default Cars