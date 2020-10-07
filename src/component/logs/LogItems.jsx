import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import {deleteLogs} from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';


const LogItems = ({ log, deleteLogs }) => {

    const onDelete = (id) =>{
        deleteLogs(id);
        M.toast({html: 'Log deleted'})
    }


    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
                <br />
                <span className='grey-text'>
                    <span className="black-text">ID #{log.id}</span> to last updated by
                <span className="black-text"> {log.tech}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>

                </span>
                <a href="#!" className='secondary-content'>
                    <i className="material-icons grey-text" onClick={()=>onDelete(log.id)}>delete</i>
                </a>
            </div>
        </li>
    );
}
LogItems.prototype = {
    log: PropTypes.object.isRequired,
    deleteLogs: PropTypes.func.isRequired
}

export default connect(null,{deleteLogs})(LogItems);