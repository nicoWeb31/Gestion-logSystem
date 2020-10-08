import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';




const TechSelectOption = ({ getTechs,techs}) => {

    useEffect(() => {
        console.log(techs)
        getTechs();
        //eslint-disable-next-line
    }, [])


    if(!techs){
        return (
            <option>......</option>
        )
    }

    return (
        
            techs && techs.map(tech => (
                
                    <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
                        {tech.firstName} {tech.lastName}
                    </option>

                
            ))
        
    );
}




const mapStateToProps = state => {
    return {
        techs: state.tech.techs
    }
}
export default connect(mapStateToProps, { getTechs })(TechSelectOption);