import { delWaterThunk } from '../../Redux/water/waterThunks';
import { useDispatch, useSelector } from 'react-redux';
import { StyledWaterList } from './TodayList.styled';
import { createWaterCardMarcup } from './WaterCard';
import { TodayListIcons } from './TodayListIcons';
import { waterArrSelector } from '../../Redux/water/waterSelectors';
import { useState } from 'react';
import { DeleteConfirmDialog } from './DeleteDialog';
import { StyledBackdrop } from './DeleteDialog.styled';
import { Modal } from 'components/Modal';
import { AddWaterModal } from './modals/addWaterModal';
import { EditWaterModal } from './modals/editWaterModal';
// import { Dialog } from '@mui/material';

export const TodayList = () => {
  const dispatch = useDispatch();

  const waterArr = useSelector(waterArrSelector);
  const [dialogStatus, setDialogStatus] = useState({
    visible: false,
    idToDelete: null,
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const togleAddModal = () => {
    setShowAddModal(!showAddModal)};

  const [showEditModal, setShowEditModal] = useState(false);
  const togleEditModal = () => setShowEditModal(!showEditModal);
  const [currentEditObj, setCurrentEditObj] = useState(null);
  //Creating marcup arr
  const marcup = waterArr.map(item => {
    const waterCardId = item._id;

    // Calculating adding time
    const waterAddTime = calculateTime(item);

    const waterQuantity = item.quantity;

    return createWaterCardMarcup({
      waterAddTime,
      waterCardId,
      waterQuantity,
      dialogStatus,
      setDialogStatus,
      togleEditModal,
      setCurrentEditObj,
    });
  });

  const delWaterById = idToDel => {
    dispatch(delWaterThunk(idToDel));
  };

  return (
    <StyledWaterList>
      {marcup}
      <button
        className="add-btn"
        onClick={() => {
          togleAddModal();
        }}
      >
        {showAddModal && (
          <Modal togleModal={togleAddModal}>
            <AddWaterModal togleModal={togleAddModal} />
          </Modal>
        )}
        {showEditModal && (
          <Modal togleModal={togleEditModal}>
            <EditWaterModal prevVal={currentEditObj} togleModal={togleEditModal} />
          </Modal>
        )}
        <TodayListIcons id="plus-icon" width={24} height={24} />
        Add Water
      </button>
      {dialogStatus.visible && <StyledBackdrop></StyledBackdrop>}
      <DeleteConfirmDialog
        visible={dialogStatus.visible}
        idToDelete={dialogStatus.idToDelete}
        setDialogStatus={setDialogStatus}
        deleteWater={delWaterById}
      />
    </StyledWaterList>
  );
};

export const calculateTime = item =>
  `${
    item.time.getHours() >= 10
      ? item.time.getHours()
      : '0' + item.time.getHours()
  }:${
    item.time.getMinutes() >= 10
      ? item.time.getMinutes()
      : '0' + item.time.getMinutes()
  } ${item.time.getHours() > 12 ? 'PM' : 'AM'}`;
