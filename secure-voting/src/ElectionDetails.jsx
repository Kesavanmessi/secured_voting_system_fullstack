import { useState } from 'react';
import { Link } from 'react-router-dom';
function ElectionDetails() {
  // Mock data for election details (you can replace this with actual data later)
  const [electionDetails, setElectionDetails] = useState({
    name: 'Presidential Election 2024',
    candidates: [
      { id: 1, name: 'Candidate 1', description: 'A brief description about Candidate 1.' },
      { id: 2, name: 'Candidate 2', description: 'A brief description about Candidate 2.' },
      { id: 3, name: 'Candidate 3', description: 'A brief description about Candidate 3.' },
    ],
    startTime: new Date('2024-10-01T08:00:00'), // Mock start time
    endTime: new Date('2024-10-20T18:00:00'),  // Mock end time
    isResultPublished: false, // To be updated after backend integration
  });

  // Current date to compare with election time
  const currentTime = new Date();

  // Logic for ongoing and finished election
  const isOngoing = currentTime >= electionDetails.startTime && currentTime <= electionDetails.endTime;
  const isFinished = false;

  return (
    <div className="bg-gray-800 p-10 text-white flex flex-col items-center">
      <h1 className="text-4xl mb-8">{electionDetails.name}</h1>

      {isOngoing && !electionDetails.isResultPublished && !isFinished &&(
        <div>
          {/* Display election information while it's ongoing */}
          <h2 className="text-2xl mb-4">Participating Candidates</h2>
          <ul className="list-disc mb-6">
            {electionDetails.candidates.map(candidate => (
              <li key={candidate.id} className="mb-2">
                <strong>{candidate.name}:</strong> {candidate.description}
              </li>
            ))}
          </ul>

          <div className="flex space-x-4 mb-8">
            <button className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded">
              Description
            </button>
            <Link to='/voting-page' className="bg-green-500 hover:bg-green-400 text-white py-2 px-4 rounded">
              Proceed to Vote
            </Link>
          </div>
        </div>
      )}

      {isFinished && (
        <div className="text-center">
          <h2 className="text-2xl mb-4">The election has finished.</h2>
          {electionDetails.isResultPublished ? (
            <button className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded">
              View Result
            </button>
          ) : (
            <p className="text-gray-400">The result is not yet published. Please check back later.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ElectionDetails;
