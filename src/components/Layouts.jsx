import { Link, useParams, useNavigate } from "react-router-dom";
import twobed from '../assets/2-bed.jpg';
import threebed from '../assets/3-bed.jpg';
import fourbed from '../assets/4-bed.jpg';
import onebed from '../assets/1-bed.jpg';

export default function Layouts() {
    const { towerId, floorId } = useParams();
    const navigate = useNavigate();
    const apartments = [
        {
            id: 1,
            image: twobed,
            area: "85 sqm",
            unitType: "2 Bedroom",
            rooms: 3,
        },
        {
            id: 2,
            image: threebed,
            area: "120 sqm",
            unitType: "3 Bedroom",
            rooms: 4,
        },
        {
            id: 3,
            image: onebed,
            area: "65 sqm",
            unitType: "1 Bedroom",
            rooms: 2,
        },
        {
            id: 4,
            image: fourbed,
            area: "100 sqm",
            unitType: "2 Bedroom + Study",
            rooms: 4,
        },
    ];

    return (
        <div className="min-h-screen p-8 bg-gradient-to-br from-blue-500 to-white">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-blue-700 text-white rounded cursor-pointer"
            >
                ← Back
            </button>
            <h1 className="text-2xl font-bold text-center mb-6">
                {`Apartments in Tower ${towerId}, ${floorId}`}
            </h1>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {apartments.map((apartment)=>(
                <Link
                    to={`/layout/${apartment.id}`}
                    key={apartment.id}>
                    <div

                        
                        className="relative group bg-white p-6 shadow-md rounded-lg transition duration-300 ease-in-out hover:shadow-xl hover:bg-blue-300"
                    >
                        <div className="overflow-hidden rounded-md">
                            <img
                                src={apartment.image}
                                alt={`Layout ${apartment.id}`}
                                className="w-full h-48 object-cover object-center rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                        </div>

                        <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
                            <p>{apartment.area}</p>
                            <p>{apartment.rooms} Rooms</p>
                        </div>
                        <p className="mt-1 text-center text-base font-semibold">{apartment.unitType}</p>


                    </div>
                </Link>
            ))}

           </div>
        </div>
    );
}
