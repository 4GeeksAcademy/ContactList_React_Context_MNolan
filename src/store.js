//import EditContact from "./pages/EditContact";
//import AddContact from "./pages/AddContact";

export const initialStore = () => {


  return {
    /* message: null,
     todos: [
       {
         id: 1,
         title: "Make the bed",
         background: null,
       },
       {
         id: 2,
         title: "Do my homework",
         background: null,
       }
     ],*/
    contact: [
      {
        name: "Mauro Nolan",
        phone: "644153784",
        email: "mrnolan88@gmail.com",
        address: "Libertad 17",
        id: 20,
      }
    ],
    user: "cenicerolleno",
    agenda: "cenicerolleno",
    contactList: [],
    titleEdit: "Edit Contact",
    titleAdd: "Add Contact",
    URLPattern: "https://playground.4geeks.com/contact"
  }
}


export default function storeReducer(store, action = {}) {
  switch (action.type) {
   /* case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case "cambiar saludo":
      return {

      }
    //Vamos a crear una funcion que se llame modificar_saludo  
    // que va a cambiar a la variable saludo cambiado con boton
    case modificar_saludo:
      //Para cambiar una variable el case tiene que retornar todo el stor
      //con el saludo cambiado
      return {
        ...store,
        saludo: "Saludo cambiado con boton"
      }

    case 'modificar_saludo_con_imput':
      const { nuevoSaludo } = action.payload()
      return {
        ...store,
        saludo: nuevoSaludo
      }*/
     case "SETCONTACTS":
      return {
        ...store,
        contactList: action.payload
      };


    case "addContact":
      return {
        ...store,
        contactList: [...store.contactList, action.payload]
      };

    case "updateContact": {
      const { id, updatedContact } = action.payload;
      return {
        ...store,
        contactList: store.contactList.map(contact =>
          contact.id === id ? { ...contact, ...updatedContact } : contact
        )
      };
    }

    case "deleteContact": {
      const { idToDelete } = action.payload;
      return {
        ...store,
        contactList: store.contactList.filter(contact => contact.id !== idToDelete)
      };
    }

    default:
      throw Error('Unknown action.');
  }
}
