
# from logging import exception
# from requests import session
# from flask import Flask,jsonify,request,session
# from flask_sqlalchemy import SQLAlchemy
# import psycopg2
# from flask_cors import CORS, cross_origin


# app  = Flask(__name__)
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
# hostname = 'localhost'
# database = 'MobileApp'
# username = 'postgres'
# pwd = 'kospit21'
# port_id = 5432

# try:
#     conn = psycopg2.connect(
#         host = hostname,
#         dbname = database,
#         user = username,
#         password = pwd,
#         port = port_id    )
# except Exception as error:
#     print(error)


# # @app.route('/')
# # @cross_origin()
# # def home():
# #     pass

# @app.route('/login',methods=['GET', 'POST'])
# @cross_origin()
# def login():
#     content = request.get_json(force=False, silent=False, cache=True)
    
#     _username = content['Username']
#     _password = content['Password']
#     # print(_username,_password)
#     if _password:

        
#         cur = conn.cursor()
#         query = f"SELECT * FROM accounts WHERE uselogin = '{_username}'"
#         cur.execute(query)
#         row = cur.fetchone()
#         if row == None:
#             return jsonify({'Message': 'password or login is wrong'})
#         username = row[1]
#         password = row[2]
#         cur.close()

#         if (username!= _username or password!= _password):
#             return jsonify({'Message': 'password or login is wrong'})
#         else:     
#             return jsonify({'Message': 'Success'}) 

#     else:
#         resp = jsonify({'message': 'Wypelnij wszystkie pola'})
#         resp.status_code = 400
#         return resp
# if __name__ == '__main__':
#     app.debug = True
#     app.run(host='0.0.0.0',port=5000)