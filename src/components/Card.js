import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div class="col s12 m7">
      <h2 class="header">Horizontal Card</h2>
      <div class="card horizontal medium">
        <div class="card-image">
          <img alt="poster" src="https://lorempixel.com/100/190/nature/6"/>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div class="card-action">
            <a href="!#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Card;