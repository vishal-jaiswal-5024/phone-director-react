import { Component } from "react";

class List extends Component{
    render(){
        return(
            <div>
                <ul className="list-group">
                    {
                        this.props.dir.map((item,index)=>(
                   <li className="list-group-item" key={index}>
                       {item.name} {item.las}
                    
                    <span className="float-end ">    
                        <button 
                        className="btn btn-success btn-sm me-2"
                        onClick={(e)=>this.props.view(item,e)}
                        >View</button>
                        <button 
                        className="btn btn-warning btn-sm me-2"
                        onClick={(e)=>this.props.edit(index,e)}
                        >Edit</button>
                        <button 
                        className="btn btn-danger btn-sm "
                        onClick={(e)=>this.props.delete(index,e)}
                        >Delete</button>
                    </span>
                    </li>

                        ))
                    }
                    
                </ul>
            </div>
        )
    }

}

export default List;