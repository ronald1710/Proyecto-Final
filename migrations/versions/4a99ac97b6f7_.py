"""empty message

Revision ID: 4a99ac97b6f7
Revises: f4e0740ab46d
Create Date: 2022-11-12 21:41:14.058666

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '4a99ac97b6f7'
down_revision = 'f4e0740ab46d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('answer', 'answer1',
               existing_type=sa.VARCHAR(length=250),
               type_=postgresql.ARRAY(sa.String(length=50)),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('answer', 'answer1',
               existing_type=postgresql.ARRAY(sa.String(length=50)),
               type_=sa.VARCHAR(length=250),
               nullable=True)
    # ### end Alembic commands ###
