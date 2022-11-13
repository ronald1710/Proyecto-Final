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
      question: [
        {
          question1: "¿Has tenido perro alguna vez?"
        },
        {
          question2: "¿Que nivel de adiestramiento estás dispuesto a ofrecerle?"
        }

    ],
      answer: [
        {
          answer1: "No importa",
          answer2: "No, este será mi primer perro y tengo ganas de aprender",
          answer3: "He cuidado perros antes, asi que tengo algo de experiencia",
          answer4: "Si. Soy un dueño con mucha experiencia"
        },
        {
          answer1: "No importa",
          answer2: "Preferiria que no necesitara mucho adiestramiento",
          answer3: "Me gusta las razas que necesitan algo de adiestramiento", 
          answer4: "Tengo experiencia con el adiestramiento y me siento cómodo con cualquier raza"
        }
      ]
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
      loadSomeData: () => {
        fetch(process.env.BACKEND_URL + "/razas_dogs")
          .then((resp) => resp.json())
          .then((resp) => {
            console.log(resp);
            setStore({ biblioteca: resp.Usuarios });
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
  };
};

export default getState;
