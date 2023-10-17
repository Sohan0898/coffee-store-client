import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCoffee),
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Coffee has been added',
                showConfirmButton: false,
                timer: 1500
              })
           
        }
    })
    
  };



  return (
    <div>
      <div className="text-center w-2/4 mx-auto">
        <h2 className="text-4xl font-bold pb-5">Add New Coffee</h2>
        <p className=" pb-5">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <form onSubmit={handleAddCoffee}>
        <div className="bg-base-200 py-12 mx-80">
          <div className="flex justify-center gap-10">
            <div className="form-control">
              <label className="label">
                <span>Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered "
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Chef</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="input input-bordered"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center gap-10">
            <div className="form-control">
              <label className="label">
                <span>Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered "
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input input-bordered"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center gap-10">
            <div className="form-control">
              <label className="label">
                <span>Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered "
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span>Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center gap-10">
            <div className="form-control">
              <label className="label">
                <span>Photo</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="input input-bordered "
                />
              </label>
            </div>
          </div>

          <div className="text-center pt-10">
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-warning w-2/4 "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
