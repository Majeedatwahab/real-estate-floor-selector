import { Link } from "react-router-dom"


export default function TowerOverview(){

    const towers = [
        { id: 'A', name: 'Tower A', description: 'Modern design, serene views. Explore now.' },
        { id: 'B', name: 'Tower B', description: 'Luxury meets comfort on every floor.' },
        { id: 'C', name: 'Tower C', description: 'Each tower tells a unique story. Start yours.' },
        { id: 'D', name: 'Tower D', description: 'Discover elevated living with timeless style.' }
    ];
      
    return(
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-500  to-white p-8 mx-auto"
               
                >
        <h1 className="text-3xl font-bold text-center mb-6">Select A Tower</h1>
<div className="grid grid-cols-2 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {towers.map((tower)=>(
        <Link 
        to={`/floors/${tower.id}`}
        key={tower.id}
            className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 p-6 shadow-lg rounded-xl hover:scale-105 transition-transform text-center"

        >
            <h2 className="text-xl font-semibold  ">{tower.name}</h2>
            <p className="text-base mt-4 text-gray-700">{tower.description}</p>

        </Link>
    ))}
</div>
     </div>
        </>
    )
}