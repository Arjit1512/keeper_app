import {useState} from "react";
import './styles.css';


export default function App() {
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [arraytitle,setArrayTitle] = useState([]);

    function handleAdd(){

        setArrayTitle([...arraytitle,[title,content]]);
        setTitle("");
        setContent("");
    }

    function handleDelete(item){
        var newarray = arraytitle.filter(function(_,value) {
            return value !== item;
        })
        setArrayTitle(newarray);
    }

    function display(){
        return(
            <div className="entire-div">
                {arraytitle.map( ([item0,item1],index) => (
                <div className="output">
                    <h4>{item0}</h4>
                    <p>{item1}</p>
                    <button onClick={ () => handleDelete(index)}>Delete</button>
                </div>    
            ))}
                    
            </div>
        )
        
    }
  return (
      <>
          <h2>Keeper</h2>

         <div className='box'>
             <input type="text" placeholder="Title" value={title}
                 onChange={(e) => setTitle(e.target.value)}/>
             <input type="text" placeholder="Content" value={content}
                 onChange={(e) => setContent(e.target.value)}/>
             <button onClick={handleAdd}>Add</button>
         </div>

          {display()}

          
      </>
  )
}
