from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
import requests

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///trading.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    api_key = db.Column(db.String(100), nullable=False)
    api_secret = db.Column(db.String(100), nullable=False)

@app.route('/trade', methods=['POST'])
def trade():
    username = request.json['username']
    market_category = request.json['market_category'].lower()  # e.g., 'nasdaq'
    risk_category = request.json['risk_category'].lower()  # e.g., 'low'
    amount = float(request.json['amount'])

    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404

    # Construct CSV file name based on the input
    file_name = f"{market_category}_{risk_category}.csv"
    try:
        df = pd.read_csv(file_name)
    except FileNotFoundError:
        return jsonify({'message': 'Risk category or market category file not found'}), 404

    url = "https://paper-api.alpaca.markets/v2/orders"
    headers = {
        "APCA-API-KEY-ID": user.api_key,
        "APCA-API-SECRET-KEY": user.api_secret,
        "Content-Type": "application/json"
    }

    responses = []
    for _, row in df.iterrows():
        stock = row['Stock']
        percentage = row['Allocation'] / 100
        price = row['Price']
        quantity = int((amount * percentage) / price)  # Calculate number of shares

        payload = {
            "symbol": stock,
            "qty": quantity,
            "side": "buy",
            "type": "market",
            "time_in_force": "day"
        }

        response = requests.post(url, json=payload, headers=headers)
        responses.append(response.json())

    return jsonify(responses), 200

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
