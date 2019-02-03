import React, { Component } from "react";

const Heading = ({ title, owner }) => {
  return (
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{title}</h1>
          <h2 class="subtitle">By {owner}</h2>
        </div>
      </div>
    </section>
  );
};

export default Heading;
