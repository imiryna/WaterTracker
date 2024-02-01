import { delWaterThunk, getDailyWaterThunk } from 'Store/water/waterThunks';
import { useDispatch, useSelector } from 'react-redux';
import { StyledWaterList } from './TodayList.styled';
import { createWaterCardMarcup } from './WaterCard';
import { waterArrSelector } from 'Store/water/waterSelectors';
import { useEffect, useState } from 'react';
import { DeleteConfirmDialog } from './DeleteDialog';
import { StyledBackdrop } from './DeleteDialog.styled';
import { Modal } from 'components/Modal/Modal';
import { AddWaterModal } from './modals/AddWaterModal';
import { EditWaterModal } from './modals/EditWaterModal';
import { PlusSvg } from './StyledTodayListIcons';
// import { parseUtcTime } from 'services/helpers/getUtcTime';
// import { Dialog } from '@mui/material';

export const TodayList = () => {
  const dispatch = useDispatch();

  const waterArr = useSelector(waterArrSelector);
  const [dialogStatus, setDialogStatus] = useState({
    visible: false,
    idToDelete: null,
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  useEffect(() => {
    dispatch(getDailyWaterThunk());
  }, [dispatch]);

  const [showEditModal, setShowEditModal] = useState(false);
  const togleEditModal = () => setShowEditModal(!showEditModal);
  const [currentEditObj, setCurrentEditObj] = useState(null);
  //Creating marcup arr
  const marcup = waterArr.map(item => {
    const waterCardId = item._id;

    // Calculating adding time
    const waterAddTime = item.time;

    const waterQuantity = item.amount;

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
          toggleAddModal();
        }}
      >
        {showAddModal && (
          <Modal togleModal={toggleAddModal}>
            <AddWaterModal togleModal={toggleAddModal} />
          </Modal>
        )}
        {showEditModal && (
          <Modal togleModal={togleEditModal}>
            <EditWaterModal
              prevVal={currentEditObj}
              togleModal={togleEditModal}
            />
          </Modal>
        )}
        <PlusSvg />
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
