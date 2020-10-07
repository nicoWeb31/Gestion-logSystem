import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';
import TechItem from './TechItem';
import PropTypes from 'prop-types';



const TechListModal = ({getTechs,tech:{ techs, loading}}) => {


    useEffect(() => {

        getTechs();
        //eslint-disable-next-line
        

    }, [])



    return (

        <div id="techList-modal" className='modal _mod'>
        
            <div className="modal-content">
                <h4>Technician list </h4>
                <ul className="collection">
                    {!loading && techs && techs.map(tech => {
                        return (
                            <TechItem key={tech.id} tech={tech}/>
                        )
                    })}
                </ul>
            </div>

        </div>

    );
}


TechListModal.propTypes={
    techs: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}



const mapStateToProps = state =>{
    return {
        tech : state.tech
}
}
export default connect(mapStateToProps,{getTechs})(TechListModal);