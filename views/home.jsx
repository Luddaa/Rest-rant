const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
              <main>
                  <h1>HOME</h1>
                  <div>
                    <img src="public\images\joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg" />
                    <div>
                      Photo by <a href="AUTHOR_LINK">Joseph Gonzalez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                  </div>
                  <a href="/places">
                      <button className="btn-primary">Places Page</button>
                  </a>
              </main>

        </Def>
    )
}

module.exports = home
