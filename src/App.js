import React from 'react'
import './App.css'

import Spitoon from './Spitoon'
import Weenie from './Weenie'
import Superweenie from './Superweenie'
import Home from './Home'

/**
 * WECLOME TO REACT ROUTER. HOW TOUGH ARE YA?
 * 1. Let's add in our BrowserRouter to wrap around the entire app.
 * This should always be your first step when using React Router!
 * 2. Create a `<Route>` around each of our components.
 * The "path" attribute for each one should be:
    - "/" for `<Home />`
    - "/spitoon" for `<Spitoon />`
    - "/weenie" for `<Weenie />`
    - "/superweenie" for `<Superweenie />`
    **Note:** Use your best judgment to decide where you should use an `exact` path!

 * 3. Wrap all our Routes in a `<Switch>`. You'll see that this isn't totally necessary
 * here, but it's best practice when you only want at most 1 component to display for a
 * given route.
   **Checkpoint:** Try visiting each of the links above in your browser
   (ex. visit `localhost:3000/weenie`). You should see the component change
   based on which page you're on!

   However, you'll notice that our buttons don't do anything yet...

  * 4. Head to `Home.js`. Notice how each weblink is a lousy `<a>` tag. We should change
  * these to `<Link>`s! Figure out which links to put in the `to` field so each hyperlink
  * goes to the appropriate page.
  * 5. 5. If you have time, try adding a `<Link>` to each of the other pages and have them
  * link back to the home page.
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
