"use client"

const ThankYou: React.FC = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center h-screen overflow-hidden"
            style={{ overflowY: 'hidden', height: '100vh' }}
        >
            <div className="text-center p-6 rounded shadow-lg">
                <h1 className="text-3xl font-bold text-red-600 mb-6">Thank you for your Gift!</h1>
                <p className="text-lg mb-4">Your donation can save lives and bring hope to those in need.</p>
            </div>
        </div>
    )
}

export default ThankYou;

