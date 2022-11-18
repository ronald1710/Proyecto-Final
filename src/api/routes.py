"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User, Dogs, User_dogFavorite, Razas_dogs, Favorites
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from flask_mail import Message

api = Blueprint('api', __name__)


@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"msg": "User not exists"}), 401
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route('/signup', methods=['POST'])
def handle_Signup():

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    name = request.json.get("name", None)
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg": "Este email ya existe"})
    user_new = User(email=email, password=password, name=name)
    db.session.add(user_new)
    db.session.commit()
    return jsonify({"msg": "Registrado existosamente"}), 200


@api.route('/user', methods=['GET'])
def get_user():
    users = User.query.filter().all()
    result = list(map(lambda user: user.serialize(), users))
    response_body = {
        "Usuarios": result,
        "msg": "Hello, this is your GET /user response "
    }
    return jsonify(response_body), 200


@api.route('/dogs', methods=['GET'])
def get_dogs():
    dogs = Dogs.query.filter().all()
    result = list(map(lambda dogs: dogs.serialize(), dogs))
    response_body = {
        "Usuarios": result,
        "msg": "Hello, this is your GET /dogs response "
    }
    return jsonify(response_body), 200


@api.route('/dogs/<int:dogs_id>', methods=['GET'])
def get_dog(dogs_id):
    dog = Dogs.query.get(dogs_id)
    if not dog:
        return jsonify({"msg": "Dog not exists"})
    response_body = {
        "Usuarios": dog
    }
    return jsonify(dog.serialize()), 200


""" @api.route('/user/<int:user_id>/addfavoritedog/<int:dogs_id>/', methods=['POST'])
def add_FavDog(user_id, dogs_id):
    user_query = User.query.get(user_id)
    fav_dog = User_dogFavorite(
        user_id=user_query.id, dogs_id=int(dogs_id))
    db.session.add(fav_dog)
    db.session.commit()
    response_body = {"msg": "Favorito agregado"}
    return jsonify(response_body), 200 """


@api.route('/add_favorite/<int:user_id>/<int:dogs_id>/', methods=['POST'])
def add_FavDog(user_id, dogs_id):
    user_id = int(user_id)
    dogs_id = int(dogs_id)
    new_favorite_dog = Favorites(user_id=user_id, dogs_id=dogs_id)
    db.session.add(new_favorite_dog)
    db.session.commit()
    response_body = {"msg": "Favorito agregado"}
    return jsonify(response_body), 200


@api.route('/sendEmail', methods=['POST'])
def send_email():
    email = request.json.get("email", None)
    isEmail = User.query.filter_by(email=email).first()
    if not isEmail:
        return jsonify({"msg": "este mail no es valido"}), 400
    msg = Message("Reset Password", recipients=[email])
    access_token = create_access_token(identity=email)
    msg.html = f"""<h1>Su contraseña ha sido cambiada. Este es su access token: {access_token} </h1>"""
    current_app.mail.send(msg)
    return jsonify({"msg": "Mail enviado correctamente"}), 200


@ api.route('/razas_dogs', methods=['GET'])
def get_razaDogs():
    raza_dogs = Razas_dogs.query.filter().all()
    result = list(map(lambda raza_dogs: raza_dogs.serialize(), raza_dogs))
    response_body = {
        "Usuarios": result,
        "msg": "Hello, this is your GET /raza_dogs response "
    }
    return jsonify(response_body), 200


@ api.route('/razas_dogs/<int:raza_dog_id>', methods=['GET'])
def get_raza_dog(raza_dog_id):
    raza_dog = Razas_dogs.query.get(raza_dog_id)
    if not raza_dog:
        return jsonify({"msg": "Dog not exists"})
    response_body = {
        "Dog": raza_dog
    }
    return jsonify(raza_dog.serialize()), 200


@api.route('/question', methods=['GET'])
def get_question():
    question = Question.query.filter().all()
    result = list(map(lambda question: question.serialize(), question))
    response_body = {
        "Usuarios": result,
        "msg": "Hello, this is your GET /question response "
    }
    return jsonify(response_body), 200


@api.route('/question/<int:question_id>', methods=['GET'])
def get_questionid(question_id):
    questionid = Question.query.get(question_id)
    if not questionid:
        return jsonify({"msg": "Question not exists"})
    response_body = {
        "Usuarios": questionid
    }
    return jsonify(questionid.serialize()), 200


@api.route('/answer', methods=['GET'])
def get_answer():
    answer = Answer.query.filter().all()
    result = list(map(lambda answer: answer.serialize(), answer))
    response_body = {
        "Usuarios": result,
        "msg": "Hello, this is your GET /answer response "
    }
    return jsonify(response_body), 200


@api.route('/answer/<int:answer_id>', methods=['GET'])
def get_answerid(answer_id):
    answerid = Answer.query.get(answer_id)
    if not answerid:
        return jsonify({"msg": "Answer not exists"})
    response_body = {
        "Usuarios": answerid
    }
    return jsonify(answerid.serialize()), 200


@api.route('/results', methods=['GET'])
def get_result():
    results = Results.query.filter().all()
    result = list(map(lambda results: results.serialize(), results))
    response_body = {
        "Usuarios": result,
        "msg": "Hello, this is your GET /answer response "
    }
    return jsonify(response_body), 200


@api.route('/results/<int:results_id>', methods=['GET'])
def get_resultsid(results_id):
    resultsid = Results.query.get(results_id)
    if not resultsid:
        return jsonify({"msg": "Result not exists"})
    response_body = {
        "Usuarios": resultsid
    }
    return jsonify(resultsid.serialize()), 200


@api.route('/user/<int:user_id>/addresult/<int:answer_id>/', methods=['POST'])
def add_result(user_id, answer_id):
    usuario_query = User.query.get(user_id)
    result_answer = Results(
        user_id=usuario_query.id, answer_id=int(answer_id))
    db.session.add(result_answer)
    db.session.commit()
    response_body = {"msg": "Resultado agregado"}
    return jsonify(response_body), 200


@api.route('/sabias_que', methods=['GET'])
def get_sabias_que():
    sabias_que = Sabias_que.query.filter().all()
    result = list(map(lambda sabias_que: sabias_que.serialize(), sabias_que))
    response_body = {
        "Usuarios": result,
        "msg": "Hello, this is your GET /sabias_que response "
    }
    return jsonify(response_body), 200


@api.route('/sabias_que/<int:sabias_que_id>', methods=['GET'])
def get_sabias_queid(sabias_que_id):
    sabias_queid = Sabias_que.query.get(sabias_que_id)
    if not sabias_queid:
        return jsonify({"msg": "Sabias Que not exists"})
    response_body = {
        "Usuarios": answerid
    }
    return jsonify(sabias_queid.serialize()), 200


@api.route('/resp_sabiasque', methods=['GET'])
def get_resp_sabiasque():
    resp_sabiasque = Resp_SabiasQue.query.filter().all()
    result = list(
        map(lambda resp_sabiasque: resp_sabiasque.serialize(), resp_sabiasque))
    response_body = {
        "Usuarios": result,
        "msg": "Hello, this is your GET /Resp_sabiasque response "
    }
    return jsonify(response_body), 200


@api.route('/resp_sabiasque/<int:resp_sabiasque_id>', methods=['GET'])
def get_resp_sabiasqueid(resp_sabiasque_id):
    resp_sabiasqueid = Resp_SabiasQue.query.get(resp_sabiasque_id)
    if not resp_sabiasqueid:
        return jsonify({"msg": "resp_sabias_ue not exists"})
    response_body = {
        "Usuarios": resp_sabiasqueid
    }
    return jsonify(resp_sabiasqueid.serialize()), 200
