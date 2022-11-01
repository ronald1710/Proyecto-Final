import React from "react";
import { Link } from "react-router-dom";
import logo2ImageUrl from "../../img/logo2.png";

export const Card = () => {
  return (
    <div className="card mt-3" style={{ maxWidth: 1500 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://www.purina.es/sites/default/files/styles/nppe_breed_selector_500/public/breed_library/bergamasco.jpg?itok=kZ2r4AgW"
            className="img-fluid rounded-start text-center"
            alt="Bergamasco"
          />
          <h4 className="card-title text-center">Bergamasco</h4>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Descripcion
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    El pelaje del Bergamasco es la característica más notable de
                    este perro, ya que es largo, abundante, graso y le cuelga en
                    una maraña. Puede ser gris, negro, marrón con manchas o
                    marrón claro. Es un perro grande y fuerte que en la edad
                    adulta alcanza de 58 a 62 cm en el caso de los machos y de
                    54 a 58 cm en el de las hembras. Los machos tienen un peso
                    de 32 a 38 kg y las hembras, de 26 a 32 kg.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Consejos
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    Perro apto para dueños con experiencia. Se requiere un
                    adiestramiento extra. Le gustan los paseos enérgicos. Le
                    gusta pasear una o dos horas al día. Perro grande. Babeo
                    mínimo. Requiere aseo cada dos días. Raza hipoalergénica.
                    Perro muy ladrador. Perro guardián. Ladra y está alerta.
                    Puede necesitar entrenamiento para vivir con otras mascotas.
                    Puede necesitar entrenamiento para vivir con niños.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Personalidad
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    Las raíces del Bergamasco como guardián de la raza siguen
                    presentes hoy: es precavido y se muestra alerta por
                    naturaleza, además de tener un fuerte instinto protector.
                    Por lo tanto, la socialización temprana es esencial, junto
                    con un manejo experimentado. No es una raza adecuada para
                    quien no haya tenido perro nunca; le encanta entrenar y
                    siempre tiene muchas ganas de complacer.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Origen
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    Se cree que el Bergamasco, una antigua raza de perro pastor
                    y guardián, se originó en Persia miles de años atrás, donde
                    acompañaba a granjeros nómadas, ayudaba a trasladar los
                    rebaños, a menudo en duras condiciones, y los protegía de
                    los depredadores. Algunos nómadas se establecieron en los
                    Alpes italianos y los perros tomaron el nombre de la región
                    donde fueron descubiertos: Bergamasco. La raza estuvo a
                    punto de desaparecer con el descenso de la producción de
                    lana en Italia en la posguerra, pero la recuperaron
                    criadores especializados.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Salud
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    Es una raza muy sana y no parece que tenga ningún problema
                    específico reconocido.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Ejercicio
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    Necesita una hora de ejercicio al día, aunque esta raza tan
                    llena de energía tiene mucha resistencia y aceptará
                    felizmente más tiempo de ejercicio si se lo puedes ofrecer.
                    Al volver a casa del paseo, retírale la suciedad del pelaje.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Nutrición
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    Los perros de razas grandes, además de tener un gran
                    apetito, requieren un equilibrio de nutrientes diferente,
                    incluyendo los minerales y las vitaminas, al de los perros
                    de menor tamaño. Algunas razas grandes, como el Bergamasco,
                    son propensos a sufrir distensión del estómago y otros
                    problemas estomacales; unas comidas más reducidas y
                    frecuentes podrían minimizar el riesgo.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    Aseo
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    Tiene un pelaje muy especial que requiere cuidados distintos
                    en las diferentes fases de su desarrollo Al principio, el
                    cachorro necesitará un cepillado semanal. Pero desde los
                    diez meses hasta los tres años, el pelaje del adulto
                    empezará a sustituir el pelo suave del cachorro y necesitará
                    un cepillado diario para ayudar a que se formen las rastas.
                    A partir de los tres años, ya estarán formados todos esos
                    mechones enmarañados y el pelaje requerirá poca atención,
                    solo un par de cepillados al mes y un baño una o dos veces
                    al año. Le llegará al suelo cuando el perro tenga unos cinco
                    años.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    Mejores razas de perros para niños
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body text-center">
                    Aunque tradicionalmente la mayoría de perros son buenos con
                    los niños, todos los perros y niños necesitan que se les
                    enseñe a llevarse bien y a respetarse mutuamente para estar
                    seguros. Aun así, los perros y los niños pequeños nunca
                    deberían quedarse solos y los adultos deben supervisar todas
                    las interacciones entre ellos.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
