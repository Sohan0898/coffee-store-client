import { Link, useLoaderData} from "react-router-dom";
import Cards from "./Cards";
import { useState } from "react";



const CoffeeCards = () => {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees); 


  return (
    <div>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Our Popular Products
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              --- Sip & Savor ---
            </p>
           <Link to={'/addCoffee'}><p className="btn max-w-xl  mx-auto mt-4">Add Coffee</p></Link>
          </div>

          <div className=" text-center my-5 "><h2 className="text-2xl font-semibold">Coffee : {coffees.length}</h2></div>
          <div className="mt-8 grid md:grid-cols-2 justify-center gap-10">
           {
            coffees.map(coffee => 
              <Cards key={coffee._id} coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
              ></Cards>
            )
           }
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default CoffeeCards;
