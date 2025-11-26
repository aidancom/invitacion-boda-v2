from flask import Flask, request, jsonify
from flask_cors import CORS
from connection import column_guests, column_songs

server = Flask(__name__)
CORS(server)

@server.route('/getGuestsData', methods=['POST'])
def get_guests_data():
    data = request.get_json()
    code = data.get('code')

    guest_information = column_guests.find_one(
        {"guest_id": code}, 
        {"_id": 0 }
    )
    
    return jsonify(guest_information)


@server.route('/updateGuest', methods=['POST'])
def update_guest():
    data = request.get_json()
    actual_guest = data['actual_guest']     
    updated_guest = data['update_guest']    

    filter = {
        "guest_id": data["guest_code"], 
        "guest_family_information.name": actual_guest["name"]
    }

    nuevos_valores = {
        "$set": {
            "guest_family_information.$.confirm": updated_guest["confirm"],
            "guest_family_information.$.additional_information": updated_guest["additional_information"]
        }
    }

    result = column_guests.update_one(filter, nuevos_valores)

    if result.modified_count > 0:
        return {"status": "ok", "message": "Invitado actualizado"}
    else:
        return {"status": "error", "message": "No se encontró el invitado"}


@server.route('/sendSong', methods=['POST'])
def send_song():
    data = request.get_json()
    insert = column_songs.insert_one(data)
    if insert:
        return jsonify({"status": "ok", "message": "Sugerencia recibida"})
    else:
        return jsonify({"status": "error", "message": "Ha ocurrido un error inesperado"})        

if __name__ == '__main__':
    server.run(debug=True, port=5000)