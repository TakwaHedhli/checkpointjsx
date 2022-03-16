
import './App.css';
import myImg from "./Images/imageInSrc.jpg"
import "./Style.css"

function App() {
  return (
    
      <div style={{border :"solid 1px noir",maxWidth:"100vw"}} >

<h1 className="titlered">Takwa</h1>

<br/>
<p className="test">
  
<img src={myImg} alt="myimg" width="500" height="300"/>
<img src="/imageInPublic.jpg" alt="notreimage" width="500" height="300"/>
</p>
<br/>
<div  className="video">
<h3>Youtube Video player</h3>
<br/>
<br/>
<iframe width="500" height="300" src="https://www.youtube.com/watch?v=1G4iqsNVxI4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
    </div>
  );
}

export default App;
