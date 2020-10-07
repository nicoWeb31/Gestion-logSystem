import React, { useEffect } from 'react';
import LogItems from './LogItems';
import Preloader from '../../component/layout/Preloader/Preloader';

import {connect} from 'react-redux';
import {getLogs,setLoading} from '../../actions/logActions'


const Logs = ({ logs,loading,getLogs }) => {


    useEffect(() => {
        const fetchdata = () =>{
            return getLogs();
        }
        fetchdata()
        //eslint-disable-naext-line

    }, [])// eslint-disable-line react-hooks/exhaustive-deps


    if (loading || logs === null) {
        return <Preloader/>
    }

    return (

            <ul className="collection-with-header">

                <li className="collection-header">
                    <h4 className="center">System Logs</h4>
                </li>
                {!loading && logs.length === 0 ? (<p className='center'> No logs to show</p>) :(
                    logs.map(log =>{
                        return(
                            
                            <LogItems log={log} key={log.id}/>
                            

                        )
                    })
                )}
            </ul>

    );
}




const mapStateToProps = state =>{
    return {
        logs: state.log.logs,
        loading: state.log.loading
        
    }
}

export default connect(mapStateToProps,{getLogs})(Logs);