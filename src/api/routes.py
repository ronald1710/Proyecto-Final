"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user= User.query.filter_by(email=email,password=password).first()
    if not user:
        return jsonify({"msg": "Not exits user"}), 401
    
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)


@api.route('/signup', methods=['POST'])
def handle_Signup():
    
    email= request.json.get("email", None)
    password = request.json.get("password", None)
    name = request.json.get("name", None)

    user= User.query.filter_by(email=email).first()
    if user:
        return jsonify({"msg":"Este email ya existe"})
    user_new = User(email=email,password=password, name=name)
    db.session.add(user_new)
    db.session.commit()
    return jsonify({"msg":"Registrado existosamente"}), 200




