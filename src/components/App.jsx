import React, { Component } from 'react';

var App = React.createClass({
  getInitialState(){
    return{
      stuff: " "
    }
  },
  changeHandler: function(e){
    this.setState({
      stuff: e.target.value
    })
  },
  render: function(){
    return (
      <div className="App">

        <header className="clearfix">
          <div className="logo">REACT DEMO</div>
          <nav>
            <ul>
              <li>Posts</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>

        <h1>Welcome to {this.state.stuff}'s House</h1>
        <br/>
        <p>Enter Your Name:</p>
        <input type="text" onChange={this.changeHandler} />  
        <br/>
        <br/>

        <div className="container clearfix">
          <div className="content1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores suscipit quidem exercitationem consequuntur molestias soluta eius rem, nobis odio tenetur laboriosam assumenda pariatur veniam alias, minus magnam porro, perspiciatis neque.</p>
            <img src="http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" alt="" />
          </div>
          <div className="content2">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa minima, quibusdam ducimus fuga, aut architecto distinctio quidem aliquam quas vel dolores eligendi voluptas amet dolore nesciunt labore autem eaque consectetur.</p>
            <img src="http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" alt="" />
          </div>
          <div className="content3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nisi voluptas fugiat maxime accusantium repudiandae vero quas aspernatur laudantium beatae voluptate, rerum quia, accusamus dolores quos dolore ea, possimus esse.</p>
            <img src="http://vignette2.wikia.nocookie.net/pokemon/images/b/b1/025Pikachu_XY_anime_3.png/revision/latest?cb=20140902050035" alt="" />
          </div>
        </div>

      </div>
    )
  }
})

export default App;
