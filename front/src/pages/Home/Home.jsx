import React, {useEffect, useState} from 'react';
import './Home.css'
import Station from "../../components/Station/Station";



const Home = () => {
    let [stations, setStations] = useState([]);

    function NewStations(length){
        let newStations = []
        for (let i = 1; i <= length; i++){
            newStations.push(
                {
                    id : i,
                    name : `station ${i}`,
                    checked : false
                }
            )
        }
        return newStations
    }

    function checkAllStations(){
        let stationsChecked = stations.map(station => {
            return {...station, checked:true}
        })
        setStations(stationsChecked)
    }

    function deCheckAllStations(){
        let stationsChecked = stations.map(station => {
            return {...station, checked:false}
        })
        setStations(stationsChecked)
    }

    function changeCheck(id){
        let stationsChecked = stations.map(station => {
            if (station.id !== id){
                return station
            } else {
                return {...station, checked:!station.checked}
            }
        })
        setStations(stationsChecked)
    }

    useEffect(() => {
        setStations(NewStations(200))
    }, [])

    return (
        <>
            <button>Appeler</button>
            <button onClick={checkAllStations}>Checker toutes les stations</button>
            <button onClick={deCheckAllStations}>Dechecker toutes les stations</button>
            <table id={"stations-container"}>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Checked</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    stations.map((station, index) => {
                            return (
                                <Station key={index} name={station.name} check={station.checked} changeCheck={()=>changeCheck(station.id)}></Station>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </>
    );
};

export default Home;