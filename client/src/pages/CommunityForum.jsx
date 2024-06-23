import { Link } from 'react-router-dom';

const CommunityForum = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-12 mt-14">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Community Forum</h1>
                <p className="text-lg text-center text-gray-600 mb-8">
                    Welcome to the BronxWatch Community Forum. Join the discussion and share your insights!
                </p>

                {/* Forum Posts Section */}
                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="font-semibold text-xl text-gray-800">General Discussion</h2>
                        <p className="text-gray-600">Discuss any topic related to community safety and awareness.</p>
                        <Link to="/community_forum/general" className="text-blue-500 hover:text-blue-700">Visit</Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="font-semibold text-xl text-gray-800">Tips and Resources</h2>
                        <p className="text-gray-600">Share and find tips on how to make Bronx better.</p>
                        <Link to="/community_forum/tip" className="text-blue-500 hover:text-blue-700">Visit</Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="font-semibold text-xl text-gray-800">Event Announcements</h2>
                        <p className="text-gray-600">Get information about upcoming workshops and community gatherings.</p>
                        <Link to="/community_forum/event" className="text-blue-500 hover:text-blue-700">Visit</Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="font-semibold text-xl text-gray-800">Emergency Resources</h2>
                        <p className="text-gray-600">Using Maps to find resources at a single tap.</p> 
                        <Link to="/community_forum/emergency" className="text-blue-500 hover:text-blue-700">Visit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommunityForum;
