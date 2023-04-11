# Routing

## What is Routing?
When visiting websites, we can typically append a path after the domain name by clicking links on the site. For example, there may be a link to the "About Us" section in a site's navigation bar. Clicking this link may do something like append `/about` to the end of the domain name and then load the "About Us" page of the site.

Similarly, perhaps we click another link in the navbar or elsewhere that takes us to another page on the site. Something like "Contact Us" may append `/contact` to the end of the domain name and the "Contact Us" page would then load.

You get the idea. The path of the route, the portion after the domain name, dictates what the user sees in the browser. Different URL paths load different content on the screen.

Up to this point, we did not have this feature in the projects we've built in this stack. We've had one page and one page only - `http://localhost:3000`.

## Traditional Multi-Page Routing
Traditionally, servers would respond with different HTML pages for different routes or different paths. Clicking "About Us" would send a request to the server, and the server would respond with a new HTML file. Something named `about.html` perhaps.

This is called server-side routing. It's how we built applications in the Python stack, and how we would typically build multi-page applications without a client-side JavaScript library like React.js.

The disadvantage of this approach is that for every link the user clicks, the browser must make a new request  and the server must respond with a new document. This can kind of break the user's flow, introduce lag, and slow down your website, leading to a suboptimal user experience.

## Client-Side Routing in SPAs
When building a single-page application in React.js or some other client side JavaScript library, only one initial request and response occurs. The server responds with one `index.html` page and a bundle of JavaScript.

Thereafter, the extra JavaScript takes over in the client and manipulates the DOM to adjust what the user sees on the screen. This is how single-page applications work.

**This does not mean that we cannot support different paths, or load different content based on that path, or that we can't have routing in SPAs.**

We can have client-side React.js code that watches the address bar for changes in the URL and then triggers changes in the DOM when that URL changes. A change in the path will simply load a new component.

We are still in a single-page application, but we now support different paths with client-side routing.

React.js does not natively support client-side routing out of the box. We will use a third-party package for this -- React Router.

## React Router
We will install this package using npm with the command `npm install react-router-dom`.

Once we have the package installed, implementing client-side routing is generally straightforward.

### The `BrowserRouter` Component

First, we import the `BrowserRouter` component from React Router in our `index.js` file.
```js
// index.js
import { BrowserRouter } from 'react-router-dom';
```
We then wrap our `<App />` component inside the `BrowserRouter` component.
```js
<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>
```

### The `Routes` and `Route` Components

Next, in `App.jsx`, we import the `Routes` and `Route` components from React Router.
```js
import { Routes, Route } from 'react-router-dom';
```
Any routes we would like to support will be defined in the `Route` component. Two important things to remember - `Route` components must be children of the `Routes` component, and the `Routes` component can **only** contain `Route` components -- nothing else.

We can then configure each route with a `path` prop and an `element` prop on the corresponding `Route` component.
```js
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
```
As you can see, the `path` prop defines the path for each route (the portion after the domain name), and the `element` prop defines with component should be displayed at that path.

### The `Link` Component
Linking to other routes on our site requires the `Link` component from React Router. We do not use the default HTML anchor tag. The `Link` component must be imported of course, and we define the route it links to with the `to` prop. This prop is like the `href` prop on the default anchor tag.

So instead of `<a href="/about">About Us</a>`, we instead use the imported `Link` component like so:

```js
<Link to='/about'>About Us</Link>
```

### Dynamic Route Parameters
Suppose we have several projects to display, each with their own unique ID. We can define dynamic parameters in our paths by prepending a colon before the parameter name - `path="/projects/:projectId"`.

Here's what it would look like in the `Route` component (*other code removed for brevity*).

```js
// other imports removed for brevity
import ProjectDetails from './components/ProjectDetails';

// other routes removed for brevity
<Route path="/projects/:projectId" element={<ProjectDetails />} />
```

Therefore, navigating to a URL like `http://localhost:3000/projects/p1` would then display the `ProjectDetails` component.

### The `useParams()` Hook
In our `ProjectDetails` component, we can then access the value of the `:projectId` parameter using the `useParams()` hook.

Import the hook at the top of your file, and invoke it in the component to receive an object that we typically call `params`.

```js
// import the hook
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  // invoke the hook
  const params = useParams();

  return (
    <div>
      <h1>Project ID: {params.projectId}</h1>
    </div>
  );
}

export default ProjectDetails;
```

The params object that is returned from `useParams()` exposes any parameters we have defined in the path. In this example, we have defined the parameter `:projectId`, back in our `Route` component. In our `ProjectDetails` component above, we have accessed this parameter's concrete value in the `h1` tag using dot notation - `{params.projectId}`

If we navigate to `http://localhost:3000/projects/p1`, this component would display **Project ID: p1** on the page.

You can think of route parameters like variables that hold strings.

### The `useNavigate` Hook
React Router offers another hook that we can use to *programmatically* navigate our users to different paths. For example, we could use this hook to redirect the user after they submit a form. This is the `useNavigate` hook.

Import the hook at the top of your file, and invoke it in the component to receive a function that we typically call `navigate`.

We can then invoke this function to programmatically navigate to another path. In the simple example below, we are navigating to the `/dashboard` route after the user submits the form.

```js
import { useNavigate } from "react-router-dom"

function Form() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" id="firstName" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
```

## Further Reading
We have barely scratched the surface of the React Router package. To read more about what the package can do, visit their [excellent documentation](https://reactrouter.com/en/main).