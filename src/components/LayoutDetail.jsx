import { useParams, useNavigate } from "react-router-dom";
import twobed from '../assets/2-bed.jpg';
import threebed from '../assets/3-bedd.jpg';
import fourbed from '../assets/4-bedd.jpg';
import onebed from '../assets/1-bed.jpg';

const apartmentData = {
    1: {
        image: twobed,
        area: "85 sqm",
        unitType: "2 Bedroom",
        rooms: 3,
    },
    2: {
        image: threebed,
        area: "120 sqm",
        unitType: "3 Bedroom",
        rooms: 4,
    },
    3: {
        image: onebed,
        area: "65 sqm",
        unitType: "1 Bedroom",
        rooms: 2,
    },
    4: {
        image: fourbed,
        area: "100 sqm",
        unitType: "2 Bedroom + Study",
        rooms: 4,
    },
};

export default function LayoutDetail() {
    const { layoutId } = useParams();
    const navigate = useNavigate();
    const layout = apartmentData[layoutId];

    if (!layout) return <p>Apartment not found</p>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-white p-8">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-blue-700 text-white rounded cursor-pointer"
            >
                ← Back
            </button>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                <img
                    src={layout.image}
                    alt="Apartment layout"
                    className="w-full h-72 object-cover rounded mb-6"
                />

                <h2 className="text-2xl font-bold mb-2">{layout.unitType}</h2>
                <p className="text-gray-700 mb-1"><strong>Area:</strong> {layout.area}</p>
                <p className="text-gray-700"><strong>Rooms:</strong> {layout.rooms}</p>
            </div>
        </div>
    );
}
