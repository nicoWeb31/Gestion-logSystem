import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

import '../modalStyle.css'

export const AddTechModal = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');



    const onSubmitForm = (e) => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'please enter correct value' })
        } else {

            e.preventDefault();
            console.log(firstName, lastName)

            //clear field

            setLastName('');
            setfirstName('')
        }
    }


    return (
        <div id='tech-modal' className="modal _mod" >
            <div className="modal-content">
                <h4>Enter New tech</h4>
                <div className="row">
                    <div className="imput-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => setfirstName(e.target.value)} />
                        <label htmlFor="firstName" className="active">FirstName</label>
                    </div>
                </div>


                <div className="row">
                    <div className="imput-field">
                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName" className="active">lastName</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href='#!' onClick={onSubmitForm} className="modal-close waves-effect waves-ligth btn blue ">Enter</a>
            </div>
        </div>
    )
}


export default AddTechModal;