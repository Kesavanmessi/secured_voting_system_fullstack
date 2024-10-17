import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateElection() {
  // Mock voters and candidates data
  const mockVoters = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'David Johnson' }
  ];

  const mockCandidates = [
    { id: 1, name: 'Candidate A' },
    { id: 2, name: 'Candidate B' }
  ];

  const [electionName, setElectionName] = useState('');
  const [selectedVoters, setSelectedVoters] = useState([]);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [message, setMessage] = useState(null);  // Success or error message
  const navigate = useNavigate();

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!electionName) {
      setMessage("Election name cannot be empty.");
      return;
    }
    if (selectedVoters.length === 0) {
      setMessage("You must select at least one voter.");
      return;
    }
    if (selectedCandidates.length === 0) {
      setMessage("You must select at least one candidate.");
      return;
    }

    // Success: display success message and redirect after 5 seconds
    setMessage(`Election "${electionName}" created successfully with ${selectedVoters.length} voters and ${selectedCandidates.length} candidates.`);
    
    // Redirect to home page after 5 seconds
    setTimeout(() => {
      navigate('/admin-dashboard');
    }, 8000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <form className="w-full max-w-md p-10 bg-gray-800 rounded-lg" onSubmit={handleSubmit}>
        <h2 className="text-3xl text-green-500 mb-5">Create Election</h2>

        {/* Display success or error message */}
        {message && (
          <div className={`mb-5 p-3 rounded ${message.includes("successfully") ? "bg-green-600" : "bg-red-600"}`}>
            {message}
          </div>
        )}

        {/* Election Name Input */}
        <div className="mb-5">
          <label htmlFor="election-name" className="text-lg">Election Name:</label>
          <input
            id="election-name"
            type="text"
            className="w-full mt-2 p-2 rounded-lg text-black"
            value={electionName}
            onChange={(e) => setElectionName(e.target.value)}
            required
          />
        </div>

        {/* Voters List */}
        <div className="mb-5">
          <h3 className="text-lg">Select Voters:</h3>
          <ul>
            {mockVoters.map(voter => (
              <li key={voter.id}>
                <input
                  type="checkbox"
                  value={voter.id}
                  onChange={(e) => {
                    const voterId = parseInt(e.target.value);
                    setSelectedVoters((prev) =>
                      prev.includes(voterId)
                        ? prev.filter(id => id !== voterId)
                        : [...prev, voterId]
                    );
                  }}
                />
                <span className="ml-2">{voter.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Candidates List */}
        <div className="mb-5">
          <h3 className="text-lg">Select Candidates:</h3>
          <ul>
            {mockCandidates.map(candidate => (
              <li key={candidate.id}>
                <input
                  type="checkbox"
                  value={candidate.id}
                  onChange={(e) => {
                    const candidateId = parseInt(e.target.value);
                    setSelectedCandidates((prev) =>
                      prev.includes(candidateId)
                        ? prev.filter(id => id !== candidateId)
                        : [...prev, candidateId]
                    );
                  }}
                />
                <span className="ml-2">{candidate.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className="w-full bg-green-500 p-2 mt-5 rounded-lg">
          Create Election
        </button>
      </form>
    </div>
  );
}

export default CreateElection;
