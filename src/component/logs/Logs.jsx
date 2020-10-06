import React, { useState,useEffect } from 'react';
import LogItems from './LogItems';
import Preloader from '../../component/layout/Preloader/Preloader'


const Logs = () => {

    const [logs, setLogs] = useState([]);
    const [loading, setLoding] = useState(false);


    useEffect(() => {

        getLogs();
        //eslint-disable-naext-line

    }, [])


    const getLogs = async () => {
        setLoding(true);
        const response = await fetch('http://localhost:3001/logs')
        const data = await response.json();
        setLogs(data)
        setLoding(false)
    }

    if (loading) {
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

export default Logs;