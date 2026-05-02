from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from flask_mysqldb import MySQL
from reportlab.pdfgen import canvas
import requests

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "*"}})
# ----------------------------
# MySQL Configuration
# ----------------------------

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "mysql@123"   # replace with your real MySQL password
app.config["MYSQL_DB"] = "career_platform"

mysql = MySQL(app)

# ----------------------------
# Home Route
# ----------------------------

@app.route("/")
def home():
    return {"message": "Backend Running Successfully"}

# ----------------------------
# Dashboard API
# ----------------------------

@app.route("/api/dashboard")
def dashboard():
    return {
        "resume_score": 85,
        "applications": 12,
        "placement_progress": 70
    }

# ----------------------------
# Register API
# ----------------------------

@app.route("/api/register", methods=["POST"])
def register():
    data = request.json

    full_name = data["full_name"]
    email = data["email"]
    password = data["password"]

    cursor = mysql.connection.cursor()

    cursor.execute(
        "INSERT INTO users (full_name, email, password) VALUES (%s, %s, %s)",
        (full_name, email, password)
    )

    mysql.connection.commit()
    cursor.close()

    return jsonify({
        "message": "User Registered Successfully"
    })

# ----------------------------
# Login API
# ----------------------------

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json

    email = data["email"]
    password = data["password"]

    cursor = mysql.connection.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email=%s AND password=%s",
        (email, password)
    )

    user = cursor.fetchone()
    cursor.close()

    if user:
        return jsonify({
            "message": "Login Successful"
        })
    else:
        return jsonify({
            "message": "Invalid Credentials"
        })

# ----------------------------
# Resume PDF Download API
# ----------------------------

@app.route("/api/download-resume")
def download_resume():
    file_path = "resume.pdf"

    c = canvas.Canvas(file_path)

    c.drawString(100, 800, "Smart Career Accelerator Resume")
    c.drawString(100, 770, "Name: John Doe")
    c.drawString(100, 740, "Email: john@gmail.com")
    c.drawString(100, 710, "Skills: Python, React, SQL")
    c.drawString(100, 680, "Projects: AI Resume Builder Platform")

    c.save()

    return send_file(
        file_path,
        as_attachment=True
    )

# ----------------------------
# Run Flask App
# ----------------------------

@app.route("/api/analyze-resume", methods=["POST", "OPTIONS"])
def analyze_resume():
    if request.method == "OPTIONS":
        return jsonify({"message": "Preflight OK"}), 200

    data = request.json
    skills = data.get("skills", "")

    return jsonify({
        "message": "Resume Analysis Complete",
        "result": f"Skills received: {skills}"
    })

if __name__ == "__main__":
    app.run(debug=True)