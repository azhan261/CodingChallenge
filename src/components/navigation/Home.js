import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
const test = "test"
  return (
  <div>
       <div >
        <section>
            <div >
          <div className="imgBox">
            <img src="assets/img/content.jpg" width="240px" />
            <h4>Select a category to view details</h4>
            <br />
            <div className="discover">
              <Link style={{textDecoration:'none'}} className = 'text-white' to={{
                  pathname:'/category/Films',
                  state:test,
              }}>Star Wars Films </Link>
            </div>
            <div className="discover">
              <Link style={{textDecoration:'none'}} className = 'text-white' to={{
                  pathname:'/category/Characters',
                 
              }}>Star Wars Characters</Link>
            </div>
            <div className="discover">
              <Link style={{textDecoration:'none'}} className = 'text-white' to={{
                  pathname:'/category/Planets',
                  
              }}>Star Wars Planets  </Link>
            </div>
            <br />
            <br />
            <div className="discover">
              <Link style={{textDecoration:'none'}} className = 'text-white' to={{
                  pathname:'/category/Starships',
                 
              }}>Star Wars Starships </Link>
            </div>
          </div>
              </div>
        </section>
       
      </div>
  </div>
  )
}

export default Home;
