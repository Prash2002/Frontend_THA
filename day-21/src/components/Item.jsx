import React , {useState} from 'react'
import EditForm from './EditForm';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = (props) => {
    var ans = props.diet.find(x => x.id === props.id);
    const [edit, setEdit] = useState(false);
    function onEdit(){
        setEdit(true);
    }
    function onDelete(){
        
        var newDiet = props.diet.filter((i)=> i.id!==props.id)
        props.setDiet(newDiet)
    }
    return (
        <div className="item">
            {
            edit? 
            <EditForm id={props.id} setEdit={setEdit} diet={props.diet} setDiet={props.setDiet}/>
            :
                    <>
                        <div className="item-text">
                            <h3 className="heading">{ans.title}: </h3>
                            <p className="details">You have consumed {ans.cal} calories</p>
                        </div>
                        <div className="item-btns">
                            <button onClick={onEdit}><EditIcon /></button>
                            <br />
                            <button onClick={onDelete}><DeleteIcon /></button>
                        </div>
                    </>
                
            }
        </div>
    )
}

export default Item
