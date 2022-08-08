
from logging import exception
from requests import session
from flask import Flask,jsonify,request,session
from flask_sqlalchemy import SQLAlchemy
import psycopg2
import requests
import json
from flask_cors import CORS, cross_origin


app  = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
hostname = 'localhost'
database = 'MobileApp'
username = 'postgres'
pwd = 'kospit21'
port_id = 5432

try:
    conn = psycopg2.connect(
        host = hostname,
        dbname = database,
        user = username,
        password = pwd,
        port = port_id    )
    # query = "select * from accounts   WHERE uselogin = 'admin'"
    # cur = conn.cursor()
    # cur.execute(query)
    # records = cur.fetchall()
    # for row in records:
    #     print('id',row[0])
    #     print('login',row[1])
    #     print('pass',row[2])
except Exception as error:
    print(error)


@app.route('/')
@cross_origin()
def home():
    pass

@app.route('/login',methods=['GET', 'POST'])
def login():
    # _json = request.json
    # _username = _json['username']
    # _password = _json['password']
    # print(_password)
    # if _username and _password:
    #     return jsonify({'message': 'You are logged succesfully'})
    # else:
    #     resp = jsonify({'message': 'Invalide credentials'})
    #     resp.status_code = 400
    #     return resp
    content = request.get_json(force=False, silent=False, cache=True)
    
    _username = content['Username']
    _password = content['Password']
    # print(_username,_password)
    if _password:

        
        cur = conn.cursor()
        query = f"SELECT * FROM accounts WHERE uselogin = '{_username}'" # powoduje błąd przy zle podanym loginie.
        cur.execute(query)
        row = cur.fetchone()
        if row == None:
            return jsonify({'Message': 'password or login is wrong'})
        username = row[1]
        password = row[2]
        cur.close()

        if (username!= _username or password!= _password):
            return jsonify({'Message': 'password or login is wrong'})
        else:     
            return jsonify({'Message': 'Success'}) 

    else:
        resp = jsonify({'message': 'Wypelnij wszystkie pola'})
        resp.status_code = 400
        return resp
if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0',port=5000)