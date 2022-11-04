"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Dogs, User_dogFavorite, Razas_dogs
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

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
        "Dogs": result,
        "msg": "Hello, this is your GET /dogs response "
    }
    return jsonify(response_body), 200


@api.route('/dogs/<int:dogs_id>', methods=['GET'])
def get_dog(dogs_id):
    dog = Dogs.query.get(dogs_id)
    if not dog:
        return jsonify({"msg": "Dog not exists"})
    response_body = {
        "Dog": dog
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


@api.route('/razas_dogs', methods=['GET'])
def get_razaDogs():
    raza_dogs = Razas_dogs.query.filter().all()
    result = list(map(lambda raza_dogs: raza_dogs.serialize(), raza_dogs))
    response_body = {
        "Usuarios": result,
        "msg": "Hello, this is your GET /raza_dogs response "
    }
    return jsonify(response_body), 200


@api.route('/razas_dogs/<int:raza_dog_id>', methods=['GET'])
def get_raza_dog(raza_dog_id):
    raza_dog = Razas_dogs.query.get(raza_dog_id)
    if not raza_dog:
        return jsonify({"msg": "Dog not exists"})
    response_body = {
        "Dog": raza_dog
    }
    return jsonify(raza_dog.serialize()), 200
