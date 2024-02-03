import { GlobalConfirmDialogStyles } from './LogOutModal.styled';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { logOutThunk } from 'Store/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';

import { selectAuthAuthenticated } from 'Store/auth/authSelector';

const LogoutConfirmationDialog = ({ visible, onHide }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectAuthAuthenticated);

  const onConfirm = () => {
    dispatch(logOutThunk());
    // localStorage.clear();
    // onHide();
  };

  const onClose = () => {
    onHide();
  };

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onClose();
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <GlobalConfirmDialogStyles overlayVisible={visible} />
      <div className="custom-confirm-overlay" onClick={onClose} />
      {/* <div className="custom-confirm-overlay" /> */}
      <ConfirmDialog
        visible={visible}
        onHide={onClose}
        header="Log out"
        message="Do you really want to leave?"
        icon="pi pi-exclamation-triangle"
        acceptLabel="Log out"
        rejectLabel="Cancel"
        accept={onConfirm}
        reject={() => {}}
        onKeyDown={onKeyDown}
        className="custom-confirm-dialog"
        contentClassName="custom-confirm-dialog-content"
      />
    </>
  );
};

export default LogoutConfirmationDialog;
