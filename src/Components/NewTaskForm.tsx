import React from 'react';

const NewTaskForm = (props: any) => {
    return (
        <div className='form' id='form'>
            <form>
                <div>
                    <label htmlFor="tast">Task</label> <br/>
                    <input type="text" placeholder='Title' name='title' id='task'/>
                </div>
                <div>
                    <input type="text" placeholder='Description' name='descrip' />
                </div>
                <div>
                    <select name="assignto" id="">
                        <option value="">Assign to</option>
                        <option value="Eric">Eric</option>
                        <option value="Alex">Alex</option>
                    </select>
                </div>
                <div>
                    <button type='submit'className='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default NewTaskForm;