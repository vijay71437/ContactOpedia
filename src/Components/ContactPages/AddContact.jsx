function AddContact() {
  function handleAddContact(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      newsletter: formData.get("newsletter") === "on",
      contactMethod: formData.get("contactMethod"),
    };
    console.log(contactData);
  }
  return (
    <div className="border col-12 text-white p-2">
      <form onSubmit={handleAddContact}>
        <div className="row p-2">
          <div className="col-12 text-white-50 text-center h5">
            Add a new Contact
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="name"
              type="text"
              placeholder="Name..."
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="email"
              type="text"
              placeholder="Email..."
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="phone"
              type="text"
              placeholder="Phone..."
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 p-1">
            Contact Method:
            <div>
              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  defaultChecked
                />
                Email
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="contactMethod" value="phone" />
                Phone
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="contactMethod" value="none" />
                None
              </label>
            </div>
          </div>

          <div className="col-12 p-1">
            <label>
              <input type="checkbox" name="newsletter" />
              Subscrible to newsletter
            </label>
          </div>
          <div className="col-12 text-center text-success">Success Message</div>
          <div className="col-12 text-center text-danger">Error Message</div>
          <div className="col-6">
            <button className="btn btn-primary btn-sm form-control">
              Create
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-danger btn-sm form-control">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
