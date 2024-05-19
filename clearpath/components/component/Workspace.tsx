import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CreateWorkspaceModal from './CreateWorkspacemodal';

type Params = Record<string, string | undefined>;

const Workspace: React.FC = () => {
  const { workspaceId } = useParams<Params>();
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState<string[]>(['Workspace1', 'Workspace2']);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleWorkspaceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedWorkspace = event.target.value;
    if (selectedWorkspace === 'createNew') {
      setShowModal(true);
    } else {
      navigate(`/workspace/${selectedWorkspace}`);
    }
  };

  const handleCreateWorkspace = (newWorkspace: string) => {
    setWorkspaces([...workspaces, newWorkspace]);
    setShowModal(false);
    navigate(`/workspace/${newWorkspace}`);
  };

  return (
    <div>
      <h1>Workspace: {workspaceId || 'None Selected'}</h1>
      <select onChange={handleWorkspaceChange} value={workspaceId || ''}>
        <option value="" disabled>Select a workspace</option>
        {workspaces.map((workspace, index) => (
          <option key={index} value={workspace}>{workspace}</option>
        ))}
        <option value="createNew">Create New Workspace</option>
      </select>
      {showModal && <CreateWorkspaceModal onCreate={handleCreateWorkspace} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Workspace;