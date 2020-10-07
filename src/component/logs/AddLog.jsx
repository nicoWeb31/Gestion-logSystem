import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import {addLog} from '../../actions/logActions';
import PropTypes from 'prop-types';

import '../modalStyle.css'

export const AddLog = ({addLog}) => {

    const [message, setMessage] = useState('');
    const [attention, setAtention] = useState(false);
    const [tech, setTech] = useState('')


    const onSubmitForm = (e) => {
        if (message === '' || tech === '') {
            M.toast({ html: 'please enter correct value' })
        } else {

            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }

            e.preventDefault();
            

            addLog(newLog)

            M.toast({html : `Log added by ${tech}`})
                    //clear field
            
                    setMessage('');
                    setTech('');
                    setAtention(false)
        }
    }


    return (
        <div id='add-log-modal' className="modal _mod" >
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="imput-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" value={tech} className='browser-default' onChange={e => setTech(e.target.value)}>
                            <option value="" disabled >Select a tech</option>

                            <option value="jhon">jhon</option>
                            <option value="toto">toto</option>
                            <option value="tata">tata</option>


                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>

                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAtention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href='#!' onClick={onSubmitForm} className="modal-close waves-effect waves-ligth btn blue ">Enter</a>
            </div>
        </div>
    )
}

AddLog.prototype = {
    addLog:PropTypes.func.isRequired
}


export default connect(null,{addLog})(AddLog);