import React, { useState } from 'react';

interface Props {
  onCreate: (newWorkspace: string) => void;
  onClose: () => void;
}

const CreateWorkspaceModal: React.FC<Props> = ({ onCreate, onClose }) => {
  const [workspaceName, setWorkspaceName] = useState<string>('');

  const handleSubmit = () => {
    if (workspaceName.trim()) {
      onCreate(workspaceName.trim());
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create New Workspace</h2>
        <input
          type="text"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
          placeholder="Enter workspace name"
        />
        <button onClick={handleSubmit}>Create</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CreateWorkspaceModal;
