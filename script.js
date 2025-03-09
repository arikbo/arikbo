body {
    font-family: Arial, sans-serif;
    direction: rtl;
    text-align: center;
    background-color: #f4f4f9;
}

.container {
    width: 80%;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.exercise {
    background: #eef;
    padding: 15px;
    margin: 10px 0;
    border-radius: 5px;
    text-align: right;
}

.equation {
    font-size: 20px;
    direction: ltr; /* כיוון משמאל לימין */
    text-align: left; /* מיישר משוואות לשמאל */
    font-weight: bold;
}

.operation-box {
    display: inline-block;
    width: 50px;
    height: 30px;
    border: 1px solid black;
    margin-right: 10px;
    text-align: center;
    font-size: 18px;
    background: white;
}

.input-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
}

input {
    width: 80px;
    text-align: center;
    font-size: 18px;
    margin: 5px;
}

.result {
    font-size: 20px;
    margin-left: 10px;
}

button {
    margin: 10px;
    padding: 10px 15px;
    font-size: 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}
