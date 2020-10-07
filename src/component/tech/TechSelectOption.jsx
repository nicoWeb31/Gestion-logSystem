import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';
import PropTypes from 'prop-types'



const TechSelectOption = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {

        getTechs();
        //eslint-disable-next-line
    }, [])

    return (
        <>
            {!loading && techs && techs.map(tech => {
                return (
                    <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
                        {tech.firstName} {tech.lastName}
                    </option>

                )
            })}
        </>
    );
}

TechSelectOption.prototype = {
    getTechs: PropTypes.object.isRequired,
    // tech: PropTypes.object.isRequired
}


const mapStateToProps = state => {
    return {
        tech: state.tech
    }
}
export default connect(mapStateToProps, { getTechs })(TechSelectOption);