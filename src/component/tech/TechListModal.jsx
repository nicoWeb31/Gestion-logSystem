import React, { useState, useEffect } from 'react';
import TechItem from './TechItem'



const TechListModal = () => {

    const [techs, setTechs] = useState([]);
    const [loading, setLoding] = useState(false);


    useEffect(() => {

        getTechs();
        //eslint-disable-naext-line
        

    }, [])


    const getTechs = async () => {
        setLoding(true);
        const response = await fetch('http://localhost:3001/techs')
        const data = await response.json();
        setTechs(data)
        setLoding(false)
    }



    console.log(techs)

    return (

        <div id="techList-modal" className='modal _mod'>
        
            <div className="modal-content">
                <h4>Technician list </h4>
                <ul className="collection">
                    {techs && techs.map(tech => {
                        return (
                            <TechItem key={tech.id} tech={tech}/>
                        )
                    })}
                </ul>
            </div>

        </div>

    );
}

export default TechListModal;