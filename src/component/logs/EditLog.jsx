import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { updateLogs } from '../../actions/logActions';
import TechSelectOption from '../tech/TechSelectOption'


import '../modalStyle.css'

export const EditLog = ({ClearCurrentLog,updateLogs,curentLog}) => {

    const [message, setMessage] = useState('');
    const [attention, setAtention] = useState(false);
    const [tech, setTech] = useState('');


    useEffect(()=>{
        if(curentLog){
            setMessage(curentLog.message)
            setAtention(curentLog.attention)
            setTech(curentLog.tech)

        }
    },[curentLog])

    const onSubmitForm = (e) => {
        if(curentLog.message === '' || curentLog.curentLogtech === '' ){
            M.toast({html: 'please enter correct value'})
        }else{

            e.preventDefault();
            
            const updatelog = {
                id:curentLog.id,
                message : message,
                tech: tech,
                attention: attention,
                date: new Date()
            }
            updateLogs(curentLog.id,updatelog)
            M.toast({html:`log  ${curentLog.id} updtate with success by ${tech} `})



        }

    }


    return (
        <div id='edit-log-modal' className="modal _mod" >
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

                            <TechSelectOption/>

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

const mapStateToProps = state =>{
    return {curentLog: state.log.current}
}
export default connect(mapStateToProps,{updateLogs})(EditLog);