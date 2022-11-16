from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import relationship
""" from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base() """

db = SQLAlchemy()


# ---------------------------User----------------------------

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }


class Dogs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    raza_dog = db.Column(db.String(120),unique=True, nullable=False)
    img_dog = db.Column(db.String(300),unique=True, nullable=False)
    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Dogs {self.raza_dog}>'

    def serialize(self):
        return {
            "id": self.id,
            "raza_dog": self.raza_dog,
            "img_dog": self.img_dog,
            # do not serialize the password, its a security breach
        }


class User_dogFavorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    dogs_id = db.Column(db.Integer, db.ForeignKey("dogs.id"))
    user = db.relationship(User)
    dogs = db.relationship(Dogs)
    

    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User_dogFavorite {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,

            # do not serialize the password, its a security breach
        }
# ---------------------------Dogs----------------------------


class Razas_dogs(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    descripcion = db.Column(db.String(1000), nullable=False)
    consejos = db.Column(db.String(1000), nullable=False)
    personalidad = db.Column(db.String(1000), nullable=False)
    origen = db.Column(db.String(1000), nullable=False)
    salud = db.Column(db.String(1000), nullable=False)
    ejercicio = db.Column(db.String(1000), nullable=False)
    nutricion = db.Column(db.String(1000), nullable=False)
    aseo = db.Column(db.String(1000), nullable=False)
    raza_nino = db.Column(db.String(1000), nullable=False)
    dog_id = db.Column(db.Integer, db.ForeignKey("dogs.id"))
    dog = db.relationship(Dogs)
    

    #is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<Razas_dogs {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "descripcion": self.descripcion,
            "consejos": self.consejos,
            "personalidad": self.personalidad,
            "origen": self.origen,
            "salud": self.salud,
            "ejercicio": self.ejercicio,
            "nutricion": self.nutricion,
            "aseo": self.aseo,
            "raza_nino": self.raza_nino,
            # do not serialize the password, its a security breach
        }
# ---------------------------Questios_Answer----------------------------


class Question(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(250), unique=True, nullable=False)
    #children = db.relationship("Answer")

    def __repr__(self):
        return f'<Question {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "question": self.question,
            # do not serialize the password, its a security breach
        }


class Answer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    answer1 = db.Column(db.String(100), nullable=False)# Falta hacerlo multilinestring
    #answer2 = db.Column(db.String(50))# Falta hacerlo multilinestring
    #answer3 = db.Column(db.String(50))# Falta hacerlo multilinestring
    #answer4 = db.Column(db.String(50))# Falta hacerlo multilinestring
    #answer5 = db.Column(db.String(50))# Falta hacerlo multilinestring
    question_id = db.Column(db.Integer, db.ForeignKey("question.id"))
    question = db.relationship(Question)

    def __repr__(self):
        return f'<Answer {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "answer1": self.answer1,
            # do not serialize the password, its a security breach
        }


class Results(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    result_0 = db.Column(db.String(50), nullable=False)
    result_1 = db.Column(db.String(50), nullable=False)
    result_2 = db.Column(db.String(50), nullable=False)
    result_3 = db.Column(db.String(50), nullable=False)
    result_4 = db.Column(db.String(50), nullable=False)
    result_5 = db.Column(db.String(50), nullable=False)
    result_6 = db.Column(db.String(50), nullable=False)
    result_7 = db.Column(db.String(50), nullable=False)
    result_8 = db.Column(db.String(50), nullable=False)
    result_9 = db.Column(db.String(50), nullable=False)
    result_10 = db.Column(db.String(50), nullable=False)
    result_11 = db.Column(db.String(50), nullable=False)
    answer_id = db.Column(db.Integer, db.ForeignKey("answer.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    answer = db.relationship(Answer)
    user = db.relationship(User)

    def __repr__(self):
        return f'<Results {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "result_0": self.result_0,
            "result_1": self.result_1,
            "result_2": self.result_2,
            "result_3": self.result_3,
            "result_4": self.result_4,
            "result_5": self.result_5,
            "result_6": self.result_6,
            "result_7": self.result_7,
            "result_8": self.result_8,
            "result_9": self.result_9,
            "result_10": self.result_10,
            "result_11": self.result_11,
            # do not serialize the password, its a security breach
        }


# ---------------------------Logica----------------------------
class Sabias_que(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    experiencia = db.Column(db.String(50))
    adiestramiento = db.Column(db.String(50))
    paseos = db.Column(db.String(50))
    tiempo_paseo = db.Column(db.String(50))
    tamano = db.Column(db.String(50))
    babeo = db.Column(db.String(50))
    aseo = db.Column(db.String(50))
    hipoalergenica = db.Column(db.String(50))
    ladrador = db.Column(db.String(50))
    guardian = db.Column(db.String(50))
    entre_otroPerros = db.Column(db.String(50))
    perro_familiar = db.Column(db.String(50))
    results_id = db.Column(db.Integer, db.ForeignKey("results.id"))
    dog_id = db.Column(db.Integer, db.ForeignKey("dogs.id"))
    results = db.relationship(Results)
    dogs = db.relationship(Dogs)
    

    def __repr__(self):
        return f'<Sabias_que {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "experiencia": self.experiencia,
            "adiestramiento": self.adiestramiento,
            "paseos": self.paseos,
            "tiempo_paseo": self.tiempo_paseo,
            "tamano": self.tamano,
            "babeo": self.babeo,
            "aseo": self.aseo,
            "hipoalergenica": self.hipoalergenica,
            "ladrador": self.ladrador,
            "guardian": self.guardian,
            "entre_otroPerros": self.entre_otroPerros,
            "perro_familiar": self.perro_familiar,
            "dog_id": self.dog_id
            

            # do not serialize the password, its a security breach
        }


class Resp_SabiasQue(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    resp_boolean0 = db.Column(db.Boolean(), nullable=False)
    resp_boolean1 = db.Column(db.Boolean(), nullable=False)
    resp_boolean2 = db.Column(db.Boolean(), nullable=False)
    resp_boolean3 = db.Column(db.Boolean(), nullable=False)
    resp_boolean4 = db.Column(db.Boolean(), nullable=False)
    resp_boolean5 = db.Column(db.Boolean(), nullable=False)
    resp_boolean6 = db.Column(db.Boolean(), nullable=False)
    resp_boolean7 = db.Column(db.Boolean(), nullable=False)
    resp_boolean8 = db.Column(db.Boolean(), nullable=False)
    resp_boolean9 = db.Column(db.Boolean(), nullable=False)
    resp_boolean10 = db.Column(db.Boolean(), nullable=False)
    resp_boolean11 = db.Column(db.Boolean(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    dog_id = db.Column(db.Integer, db.ForeignKey("dogs.id"))
    sabiasque_id = db.Column(db.Integer, db.ForeignKey("sabias_que.id"))
    user = db.relationship(User)
    dogs = db.relationship(Dogs)
    sabiasque= db.relationship(Sabias_que)

    def __repr__(self):
        return f'<Resp_SabiasQue {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "resp_boolean0": self.resp_boolean0,
            "resp_boolean1": self.resp_boolean1,
            "resp_boolean2": self.resp_boolean2,
            "resp_boolean3": self.resp_boolean3,
            "resp_boolean4": self.resp_boolean4,
            "resp_boolean5": self.resp_boolean5,
            "resp_boolean6": self.resp_boolean6,
            "resp_boolean7": self.resp_boolean7,
            "resp_boolean8": self.resp_boolean8,
            "resp_boolean9": self.resp_boolean9,
            "resp_boolean10": self.resp_boolean10,
            "resp_boolean11": self.resp_boolean11,

            # do not serialize the password, its a security breach
        }
