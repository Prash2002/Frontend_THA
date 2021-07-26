import React , {useState} from 'react';
import DoneIcon from '@material-ui/icons/Done';
const EditForm = (props) => {
    const [food, setFood] = useState(props.diet[props.id].title);
    const [cal, setCal] = useState(props.diet[props.id].cal);

    function submitForm(event){
        event.preventDefault();
        var editedItem = {"id": props.id ,"title": food, "cal": cal};
        props.diet[props.id] = editedItem;
        props.setDiet(props.diet);
        props.setEdit(false);
    }

    return (
        <form onSubmit={submitForm} className="editForm">
            <label htmlFor="item">Food: </label>
            <input type="text" name="item" id="item" value={food} onChange={(e)=>setFood(e.target.value)} />
            <label htmlFor="calory">Calories: </label>
            <input type="number" name="calory" id="calory" value={cal} onChange={(e)=>setCal(e.target.value)} />
            <br />
            <button><DoneIcon /></button>
        </form>
    )
}

export default EditForm
