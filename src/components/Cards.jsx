import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cards = ({coffee}) => {

     const {
        _id,
        name,
        chef,
        supplier,
        taste,
        category,
        details,
        photo,
      } = coffee;

      const handleDelete = _id => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to delete this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`, {
              method: "DELETE",
              
            })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.deletedCount > 0){
                Swal.fire(
                  'Deleted!',
                  'Your Coffee has been deleted.',
                'success'
                )
              }
              
            })
          }
        })
      }

  return (
    <div>
      <div className="w-">
      <div className="card card-side  bg-base-100 shadow-xl">
        <figure >
          <img src={photo} alt="coffee" />
        </figure>
        <div className="flex justify-between items-center gap-10">
          <div>
            <h2 className="">Name: {name}</h2>
            <h2 className="">Chef: {chef}</h2>
            <h2 className="">Taste: {taste}</h2>
          </div>
          <div>
            <div className="btn-group  gap-5 btn-group-vertical">
              <button className="btn btn-warning">View</button>
              <Link to={'/updateCoffee'}><button className="btn btn-">Update</button></Link>
              <button onClick={()=> handleDelete(_id)}  className="btn btn-error">X</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cards;
