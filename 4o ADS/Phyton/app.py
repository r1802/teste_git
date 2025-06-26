from flask import Flask, jsonify, request

app = Flask(__name__)

livros = [
    {
        'id': 1,
        'titulo': 'Senhor dos aneis',
        'autor': 'J.R.R. Tolkien',
    },
    {
        'id': 2,
        'titulo': 'Harry Potter',
        'autor': 'J.K. Rowling',
    },
    {
        'id': 3,
        'titulo': '1984',
        'autor': 'George Orwell',
    },
    {
        'id': 4,
        'titulo': 'O Alquimista',
        'autor': 'Paulo Coelho',
    },
]

#Consultar todos
@app.route('/livros',methods =['GET'])
def obter_livros():
    return jsonify(livros)

#Consultar um livro
@app.route('/livros/<int:id>',methods=['GET'])
def obter_livro_id(id):
    for livro in livros:
        if livro.get('id') == id:
            return jsonify(livro)

#Editar
@app.route('/livros/<int:id>',methods=['PUT'])
def editar_livro_id(id):
    alterado_livro = request.get_json()
    for indice,livro in enumerate(livros):
        if livro.get('id') == id:
            livros[indice].update(alterado_livro)
            return jsonify(livros[indice])
#Criar
@app.route('/livros',methods=['POST'])
def adicionar_livro():
    novo_livro = request.get_json()
    livros.append(novo_livro)
    return jsonify(livros)

#excluir
@app.route('/livros/<int:id>',methods=['DELETE'])
def excluir_livro(id):
    for indice, livro in enumerate(livros):
        if livro.get('id') == id:
            del livros[indice]
            return jsonify(livros)


app.run(port=5000,host='localhost',debug=True)