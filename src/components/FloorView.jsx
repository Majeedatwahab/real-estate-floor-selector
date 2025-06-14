import { useParams, Link, useNavigate} from "react-router-dom"

export default function FloorView(){
const {towerId} = useParams();
const navigate = useNavigate()
    const floors = Array.from({length: 15}, (_, i)=> 1 + i);
    return(
        <>
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-white p-8">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 px-4 py-2 bg-blue-700 text-white rounded cursor-pointer"
                >
                    ← Back
                </button>
            <h1 className="text-2xl font-bold text-center mb-6">
                {`Select a floor in Tower ${towerId}`}
            </h1>
<div className="grid grid-cols-2 sm:grid-cols-3  gap-6 mb-6 max-w-4xl mx-auto ">
    {floors.map((floor)=>(
        <Link 
        key={floor}
            to={`/layouts/${towerId}/floor-${floor}`}

            className="bg-white border border-blue-200 rounded-lg p-4 shadow hover:scale-105 transition-transform text-center"
        >
            <h2 className="text-lg font-semibold">Floor {floor}</h2>
            <p className="text-sm text-gray-600">Explore available units</p>
        </Link>
    ))}

</div>
        </div>
        </>
    )
}