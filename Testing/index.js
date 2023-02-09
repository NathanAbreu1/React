import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"


function Component(){
  return(
    <div>
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
    </div>
  )
}

ReactDOM.render(<Component/>, document.getElementById("root"));

