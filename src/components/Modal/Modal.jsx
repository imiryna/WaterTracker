import { useEffect } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';
import { createPortal } from 'react-dom';
// const modalRoot = document.getElementById('modal-root');
const modalRoot = document.querySelector('#modal-root');

export function Modal({ children, toggleModal }) {
  //Functions

  const handleBakcdropClick = e => {
    e.currentTarget === e.target && toggleModal();
  };

  useEffect(() => {
    const handleKeyDown = e => e.code === 'Escape' && toggleModal();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleModal]);

  return createPortal(
    <StyledOverlay onClick={handleBakcdropClick}>
      <StyledModal>{children}</StyledModal>
    </StyledOverlay>,
    modalRoot
  );
}
