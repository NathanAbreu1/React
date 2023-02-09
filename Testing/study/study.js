// Basics

ReactDOM.render(<h1>Hello Poppers</h1>, document.getElementById("test"));
ReactDOM.render(<p>I came here in a very important mission</p>, document.getElementById("test_2"));
ReactDOM.render(<ul><li>Item 1</li> <li>Item 2</li><li>Item 3</li></ul>, document.getElementById("list"));

// Using functions to render in React
function Navbar(){
  return(
    <h1>React is Fun AF</h1>
  )
}

function Component(){
  return(
    <h2>YES PAL, IM HANDS DOWN WITHYA</h2>
  )
}

ReactDOM.render(
  <div>
    <Navbar/>
    <Component/>
  </div>,
  document.getElementById("test3")
)

// Rendering Elements 

const element = <h1 className = "header">Ive done everything I know</h1>
ReactDOM.render(element, document.getElementById("test1"));

ReactDOM.render(
  <div>
    <h1 className = "header">To try and make you mine</h1>
    <p>And I think im gonna love you, for a long, long time.</p>
  </div>,
  document.getElementById("test4")
)

// Or

const page = (
  <div>
    <h1 className= "header">Love will abide</h1>
    <p>Take things and stride</p>
  </div>
)

ReactDOM.render(page, document.getElementById("test4"));

// && 

const navbar = (
<div>
  <h1>For a long, long time</h1>
  <ul>
    <li>login</li>
    <li>Sign-in</li>
    <li>About</li>
    <li>Settings</li>
  </ul>
</div>
)

ReactDOM.render(navbar, document.getElementById("test4"));


// Simple Rendering Style
//--------------------------------------------------------------------------------------
// Function Based
function Image(){
  return(
<img src="images/react-icon.svg.png" width ="100px" height="100px"></img>
  )
}

function Text(){
  return(
    <div>
    <h1>Fun Facts About React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </div>
  )
}

ReactDOM.render(
  <div>
    <Image/>
    <Text/>
  </div>,
  document.getElementById("root")
)

//----------------------------------------------------------------------------
// Object Based
const obj = (
  <div>
    <img src="images/react-icon.svg.png" width="100px" height="100"></img>
    <h1>Fun Facts about react</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      </ul>
  </div>
)

ReactDOM.render(obj, document.getElementById("root"))

//-----------------------------------------------------------------------------
// Normal React sintax without the modules separeted by files

function Header(){
  return(
    <header>
      <navbar className="navbar">
        <img src="images/react.png" width="100px" height="100px"></img>
        <ul>
          <li>Contact</li>
          <li>Settings</li>
          <li>About</li>
          <li>Pricing</li>
        </ul>
      </navbar>
    </header>
  )
}

function Content(){
  return(
    <div className="container">
      <div className="content">
      <h1>Reasons to Learn React</h1>
      <ol>
        <li>React is one of the most used frameworks related to webdev</li>
        <li>If you want to land a job, without react it will be almost impossible</li>
        <li>With the react skill, you will be able to develop a lot of websites, 
          including non static pages, which holds all the fun
        </li>
        <li>React is very fun when u get it, and if you manage to stick to it, you will love it</li>
      </ol>
      </div>
      <div className="ImgBx">
        <img src="images/coder.webp"></img>
      </div>
    </div>
  )
}

function Footer(){
  return(
    <footer className="footer">
      <h1>Designed and Developed by Natejpg</h1>
    </footer>
  )
}


function Component(){
  return(
    <div>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
    </div>
  )
}

ReactDOM.render(<Component></Component>, document.getElementById("root"));

