from flask import Flask, request, jsonify
from flask_cors import CORS
from connection import column_guests

server = Flask(__name__)
CORS(server)

@server.route('/getGuestsData', methods=['POST'])
def get_guests_data():
    data = request.get_json()
    code = data.get('code')

    pipeline = [
        {
            "$match": {
                "guest_id": code
            }
        },
        {
            "$project": {
                "_id": 0 
            }
        }
    ]

    guest_information = list(column_guests.aggregate(pipeline))
    return jsonify(guest_information)

if __name__ == '__main__':
    server.run(debug=True, port=5000)