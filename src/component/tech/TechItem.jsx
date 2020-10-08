import React from 'react';
import { connect } from 'react-redux';
import { deleteTechs } from '../../actions/techAction';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ( {tech,deleteTechs}) => {


    const onDeleteTech = () =>{
        deleteTechs(tech.id)
        M.toast({html: `tech ${tech.id} delete with sucess`})
    }

    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#!" className="secondary-content"
                onClick={onDeleteTech}
                >
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
}

export default connect(null,{deleteTechs})(TechItem);