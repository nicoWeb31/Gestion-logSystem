import React, { useState,useEffect } from 'react'


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
        return <h4>Lodaing .....</h4>
    }

    return (
        <div>
            <ul className="collection-with-haeader">

                <li className="collection-header">
                    <h4 className="center">System Logs</h4>
                </li>
                {!loading && logs.length === 0 ? (<p className='center'> No logs to show</p>) :(
                    logs.map(log =>{
                        return(
                            <li>{log.message}</li>
                        )
                    })
                )}
            </ul>
        </div>
    );
}

export default Logs;