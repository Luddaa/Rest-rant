const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <img src="public\images\sarah-kilian-52jRtc2S_VE-unsplash.jpg" alt="spilled ice cream"/>
              photo by <a href = "author_link">Sarah killian</a> on <a href ="UNSPLASH_LINK">unsplash</a>

          </main>
      </Def>
    )
  }
  
  
module.exports = error404
