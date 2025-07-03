import { useState } from "react";

type AddColumnModalProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (name: string) => void;
};

function AddColumnModal({ open, onClose, onAdd }: AddColumnModalProps) {
  const [colName, setColName] = useState("");

  if (!open) return null;

  return (
    <div className='modal'>
      <div className='modal-container'>
        <h2 className='text-2xl font-semibold mb-4'>Add New Column</h2>

        <input
          placeholder='Column name'
          value={colName}
          onChange={(e) => setColName(e.target.value)}
        />

        <div className='flex justify-end gap-2'>
          <button
            className='bg-gray-200 hover:bg-gray-300'
            onClick={() => {
              setColName("");
              onClose();
            }}>
            Cancel
          </button>

          <button
            className='bg-green-600 hover:bg-green-700 text-white'
            onClick={() => {
              if (colName.trim()) {
                onAdd(colName.trim());
                setColName("");
                onClose();
              }
            }}>
            Add Column
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddColumnModal;
