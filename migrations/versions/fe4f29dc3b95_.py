"""empty message

Revision ID: fe4f29dc3b95
Revises: bb02bc8ea808
Create Date: 2022-11-15 02:31:42.978287

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fe4f29dc3b95'
down_revision = 'bb02bc8ea808'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('sabias_que_adiestramiento_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_aseo_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_babeo_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_entre_otroperros_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_experiencia_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_guardian_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_hipoalergenica_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_ladrador_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_paseos_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_perro_familiar_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_tamano_key', 'sabias_que', type_='unique')
    op.drop_constraint('sabias_que_tiempo_paseo_key', 'sabias_que', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('sabias_que_tiempo_paseo_key', 'sabias_que', ['tiempo_paseo'])
    op.create_unique_constraint('sabias_que_tamano_key', 'sabias_que', ['tamano'])
    op.create_unique_constraint('sabias_que_perro_familiar_key', 'sabias_que', ['perro_familiar'])
    op.create_unique_constraint('sabias_que_paseos_key', 'sabias_que', ['paseos'])
    op.create_unique_constraint('sabias_que_ladrador_key', 'sabias_que', ['ladrador'])
    op.create_unique_constraint('sabias_que_hipoalergenica_key', 'sabias_que', ['hipoalergenica'])
    op.create_unique_constraint('sabias_que_guardian_key', 'sabias_que', ['guardian'])
    op.create_unique_constraint('sabias_que_experiencia_key', 'sabias_que', ['experiencia'])
    op.create_unique_constraint('sabias_que_entre_otroperros_key', 'sabias_que', ['entre_otroperros'])
    op.create_unique_constraint('sabias_que_babeo_key', 'sabias_que', ['babeo'])
    op.create_unique_constraint('sabias_que_aseo_key', 'sabias_que', ['aseo'])
    op.create_unique_constraint('sabias_que_adiestramiento_key', 'sabias_que', ['adiestramiento'])
    # ### end Alembic commands ###
