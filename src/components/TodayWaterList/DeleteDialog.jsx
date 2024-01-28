import { StyledDeleteDialog } from './DeleteDialog.styled';

export const DeleteConfirmDialog = ({
  visible,
  idToDelete,
  setDialogStatus,
  deleteWater,
}) => {
  return (
    <>
      <StyledDeleteDialog
        header="Delete entry"
        visible={visible}
        // style={}
        onHide={() => setDialogStatus({ visible: false, idToDelete: null })}
      >
        <p className='text'>Are you sure you want to delete the entry?</p>
        <div className="btn-box">
          <button
          className='cancel-btn'
            onClick={() =>
              setDialogStatus({ visible: false, idToDelete: null })
            }
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={() => {
              deleteWater(idToDelete);
              setDialogStatus({ visible: false, idToDelete: null });
            }}
          >
            Delete
          </button>
        </div>
        <div className="backdrop"></div>
      </StyledDeleteDialog>
    </>
  );
};
