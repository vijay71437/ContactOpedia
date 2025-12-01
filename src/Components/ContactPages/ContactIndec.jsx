import { useState } from "react";
import FavoriteContact from "./FavoriteContact";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";

function ContactIndex() {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Ben Parker",
      phone: "666-666-7770",
      email: "ben@gmail.com",
      isFavorite: false,
    },
    {
      id: 2,
      name: "Kathy Patrick",
      phone: "666-666-7773",
      email: "Kathy@gmail.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "Paul Show",
      phone: "666-666-7771",
      email: "Paul@gmail.com",
      isFavorite: true,
    },
  ]);
  function handleToggleFavorite(contact) {
    setContactList((prevState) => {
      return prevState.map((obj) => {
        if (obj.id == contact.id) {
          return { ...obj, isFavorite: !obj.isFavorite };
        }
        return obj;
      });
    });
  }
  function handleDeleteContact(contactId) {
    setContactList((prevState) => {
      return prevState.filter((obj) => {
        return obj.id != contactId;
      });
    });
  }
  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="row py-3">
        <div className="row py-2">
          <div className="col-6 "> ADD CONTACT</div>
          <div className="col-6 "> REMOVE CONTACT</div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <AddContact />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <FavoriteContact
              favoriteClick={handleToggleFavorite}
              deleteClick={handleDeleteContact}
              contacts={contactList.filter((u) => u.isFavorite == true)}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <GeneralContacts
              favoriteClick={handleToggleFavorite}
              deleteClick={handleDeleteContact}
              contacts={contactList.filter((u) => u.isFavorite == false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactIndex;
