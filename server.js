const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());
app.get("/cards", function (req, res) {
  let cards = [
    {
      date: new Date("2022-11-24T16:01:00"),
      player1: "brazil",
      player2: "serbia",
    },
    {
      date: new Date("2022-11-28T13:00:00"),
      player1: "brazil",
      player2: "switzerland",
    },
    {
      date: new Date("2022-12-02T16:00:00"),
      player1: "brazil",
      player2: "cameroon",
    },
    {
      date: new Date("2022-12-02T16:00:00"),
      player1: "brazil",
      player2: "cameroon",
    }
  ];

  res.status(200).json(cards);
});

app.listen(3000);
