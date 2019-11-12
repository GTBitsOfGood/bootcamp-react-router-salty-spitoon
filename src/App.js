import React from 'react'
import './App.css'

import Spitoon from './Spitoon'
import Weenie from './Weenie'
import Superweenie from './Superweenie'
import Home from './Home'

/**
 * WECLOME TO REACT ROUTER. HOW TOUGH ARE YA?
 * 1. Let's add in our BrowserRouter to wrap around everything
 * 2. Create a <Route> around each of our components. They should be:
 *    - "/" for Home
 *    - "/spitoon" for Spitoon
 *    - "/weenie" for Weenie
 *    - "/superweenie" for Superweenie
 * 3. Wrap all our Routes in a Switch
 * Checkpoint: Try visiting each of the links above in your browser.
 * You should see the component change based on which page you're on!
 * 4. Head to Home.js. Notice how each weblink is a lousy <a> tag.
 *    We should change these to <Link>s!
 * 5. If you have time, try adding a <Link> to each of the other pages
 *    and have them link back to the home page. You'll need to use exact path="/"
 */

function App() {
  return (
    <section>
      <Home />
      <Spitoon />
      <Weenie />
      <Superweenie />
    </section>
  )
}

export default App
