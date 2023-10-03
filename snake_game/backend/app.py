from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return '¡Hola, Juego de Snake desde Flask!'

@app.route('/start_game')
def start_game():
    # Inicializa el juego aquí
    return 'Game started!'

@app.route('/move_snake/<direction>')
def move_snake(direction):
    # Actualiza la posición de la serpiente según la dirección
    return 'Snake moved in direction ' + direction


if __name__ == '__main__':
    app.run()

# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import random

# app = Flask(__name__)
# CORS(app)

# # Datos iniciales para el juego
# snake = [{'x': 5, 'y': 5}]
# food = {'x': 10, 'y': 10}

# @app.route('/api/game', methods=['GET', 'POST'])
# def game():
#     global snake, food

#     if request.method == 'GET':
#         # Retorna el estado actual del juego
#         return jsonify({'snake': snake, 'food': food})

#     elif request.method == 'POST':
#         # Mueve la serpiente y actualiza el juego
#         direction = request.json['direction']
#         move_snake(direction)
#         check_collision()
#         return jsonify({'snake': snake, 'food': food})

# def move_snake(direction):
#     # Implementa la lógica para mover la serpiente según la dirección
#     pass

# def check_collision():
#     # Implementa la lógica para verificar colisiones (comida, paredes, etc.)
#     pass

# if __name__ == '__main__':
#     app.run(debug=True)
