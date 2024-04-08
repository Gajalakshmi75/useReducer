import React,{useReducer} from 'react';

const reducer=(state,action)=>{
    if(action.type==="DELETE_PERSON"){
        const newPersons=state.data.filter((eachPerson)=>{
            return eachPerson.id!==action.payload;
        });
        // console.log(newPersons);
        return{
            ...state,
            data:newPersons,
            length:state.length-1,
        };
    };

    // console.log(state);
    // console.log(action);
};


const App=()=>{
    const initialstate={
        data:[
           { id:"sfgygfyf",firstName:"lakshmi",lastName:"yarramsetti"},
           { id:"hwufhjas",firstName:"gaja",lastName:"yarramsetti"},
        ],
        length:2,
    };
    const [state,dispatch]=useReducer(reducer,initialstate);

    const handleDelete=(id)=>{
        dispatch({
            type:'DELETE_PERSON',
            payload:id
        })
    }
    return <>
    <h1>Current users length:{state.length}</h1>
    {
        state.data.map((eachItem)=>{
            const {id,firstName,lastName}=eachItem;
            return <div key={id}>
                <h3>{firstName}</h3>
                <p>{lastName}</p>
                <button onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        })
    }
    </>
};
export default App;