const Swal = require("sweetalert2");
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      biblioteca: [],
      raza: [],
      razaIndividual: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/login", opts);
          if (resp.status !== 200) {
            alert("There has been some error");
            return false;
          }

          const data = await resp.json();
          console.log("There has been some error", data);
          localStorage.setItem("token", data.access_token);
          return true;
        } catch (error) {
          console.error("There has been an error login in");
        }
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      signup: (body) => {
        fetch(process.env.BACKEND_URL + "/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((resp) => resp.json())
          .then(() => {
            Swal.fire("Registro exitoso", "Gracias por elegirnos", "success");
          });
      },
      reset_password: (body) => {
        fetch(process.env.BACKEND_URL + "/resetpassword", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((resp) => resp.json())
          .then(() => {
            Swal.fire("Registro exitoso", "Gracias por elegirnos", "success");
          });
      },

      loadSomeData: () => {
        fetch(process.env.BACKEND_URL + "/razas_dogs")
          .then((resp) => resp.json())
          .then((resp) => {
            console.log(resp);
            setStore({ biblioteca: resp.Usuarios });
          })
          .catch((err) => console.error(err));
      },
      loadSomeData: () => {
        fetch(process.env.BACKEND_URL + "/dogs")
          .then((resp) => resp.json())
          .then((resp) => {
            console.log(resp);
            setStore({ raza: resp.Usuarios });
          })
          .catch((err) => console.error(err));
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
    informacionIndividualPeople: (id) => {
      fetch(process.env.BACKEND_URL + "/biblioteca_individual/" + id)
        .then((resp) => resp.json())
        .then((resp) => setStore({ razaIndividual: resp.Usuarios }))
        .catch((err) => console.error(err));
    },
  };
};

export default getState;
