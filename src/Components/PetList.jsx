import {useState, useEffect} from "react"



export const PetList = ({employeeId}) => {
  const [pets, setPets] = useState([])
  useEffect(()=>{
    fetch(`https://vet-api-1.onrender.com/api/pets?employeeId=${employeeId}`)
    .then((res)=> res.json())
    .then((apiData)=> {
      setPets(apiData)
    })
  }, [employeeId])

  return (
    <div className="pets-list">
      
        {" "}
        {pets.length ? (
          pets.map((pet)=> {
            return <p key={pet.name}>{...pet.name}</p>
          })
        ) : (
        <p>No pets listed for this employee.</p>
        )}
        
    </div>
  );
};

export default PetList;
