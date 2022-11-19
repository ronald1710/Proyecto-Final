
import os
from flask_admin import Admin
from .models import db, User, Dogs, User_dogFavorite, Razas_dogs, Question, Answer, Results, Sabias_que, Resp_SabiasQue, Favorites
from flask_admin.contrib.sqla import ModelView


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Dogs, db.session))
    admin.add_view(ModelView(User_dogFavorite, db.session))
    admin.add_view(ModelView(Razas_dogs, db.session))
    admin.add_view(ModelView(Question, db.session))
    admin.add_view(ModelView(Answer, db.session))
    admin.add_view(ModelView(Results, db.session))
    admin.add_view(ModelView(Sabias_que, db.session))
    admin.add_view(ModelView(Resp_SabiasQue, db.session))
    admin.add_view(ModelView(Favorites, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))
