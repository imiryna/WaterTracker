import React from 'react';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { logOutThunk } from 'Store/auth/authOperations';
import { useDispatch } from 'react-redux';
import { GlobalConfirmDialogStyles } from './LogOutModal.styled';

const LogoutConfirmationDialog = ({ visible, onHide }) => {
  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(logOutThunk());
    localStorage.clear();
    onHide();
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onHide();
    }
  };

  return (
    <>
      <GlobalConfirmDialogStyles overlayVisible={visible} />
      <div className="custom-confirm-overlay" onClick={onHide} />
      <ConfirmDialog
        visible={visible}
        onHide={onHide}
        header="Log out"
        message="Do you really want to leave?"
        icon="pi pi-exclamation-triangle"
        acceptLabel="Log out"
        rejectLabel="Cancel"
        accept={onConfirm}
        reject={onHide}
        onKeyDown={onKeyDown}
        className="custom-confirm-dialog"
        contentClassName="custom-confirm-dialog-content"
      />
    </>
  );
};

export default LogoutConfirmationDialog;
