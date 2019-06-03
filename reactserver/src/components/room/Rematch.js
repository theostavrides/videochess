import React, { Component } from 'react';
import axios from 'axios'
const axiosOptions = {
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "http://localhost:3000"
  },
  withCredentials: true
}

class Rematch extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){


  }

  render() {
    const boxStyle = {
      'zIndex': '1000',
      'position': 'absolute',
      'backgroundColor': 'white',
      'height': '400px',
      'width': '400px'

    }

    let { black_username, white_username, gameData, roomData } = this.props.allData;

    if (gameData) {
      const room = this.props.room;
      const blackid = gameData.black_id;
      const whiteid = gameData.white_id;
      black_username = black_username.username;
      white_username = white_username.username;

      const me = this.props.username;
      const them = (me === black_username) ? white_username : black_username;

      const result = gameData.result;

      const creator_victories = roomData.creator_victories;
      const guest_victories = roomData.games_completed - roomData.creator_victories;

      const myVictories = (me === roomData.creator) ? creator_victories : guest_victories;
      const theirVictories = (them === roomData.creator) ? creator_victories : guest_victories;

      const start_color = roomData.start_color;
      const time_per_move = roomData.time_per_move;


      let resultSentence = 'rwagg'
      if (result === 'w') {
        resultSentence = `${white_username} won the game`;
      } else if (result === 'b') {
        resultSentence = `${black_username} won the game`;
      } else {
        resultSentence = 'The game resulted in a draw';
      }
      // {resultSentence} {me}{myVictories} - {them}{theirVictories}
    }

    return (


        <h3 style={boxStyle}> theo won the game    theo(1) - tom(2) </h3>


    )
  }
}

export default Rematch;