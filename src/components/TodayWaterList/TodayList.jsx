import { delWaterThunk, getDailyWaterThunk } from 'Store/water/waterThunks';

import { useDispatch, useSelector } from 'react-redux';
import { StyledWaterList } from './TodayList.styled';
import { CreateWaterCardMarkup } from './WaterCard';
import { waterArrSelector } from 'Store/water/waterSelectors';
import { useState, useEffect } from 'react';
import { DeleteConfirmDialog } from './DeleteDialog';
import { StyledBackdrop } from './DeleteDialog.styled';
import { EditWaterModal } from './modals/EditWaterModal';
import { PlusSvg } from './StyledTodayListIcons';
// import { parseUtcTime } from 'services/helpers/getUtcTime';
import { Modal } from 'components/Modal/Modal';
import { AddWaterModal } from './modals/AddWaterModal';
import {
  toggleAddWateVisibility,
  toggleEditWateVisibility,
} from 'Store/modals/modalSlice';
import { selectAddWater, selectEditWater } from 'Store/modals/modalSelector';

// import { Dialog } from '@mui/material';

export const TodayList = () => {
  const dispatch = useDispatch();

  const waterArr = useSelector(waterArrSelector);
  const [dialogStatus, setDialogStatus] = useState({
    visible: false,
    idToDelete: null,
  });

  const showAddModal = useSelector(selectAddWater);
  const showEditModal = useSelector(selectEditWater);

  useEffect(() => {
    dispatch(getDailyWaterThunk());
  }, [dispatch]);

  const [currentEditObj, setCurrentEditObj] = useState(null);
  //Creating marcup arr
  const markup = waterArr.map(item => {
    const waterCardId = item._id;

    // Calculating adding time
    const waterAddTime = item.time;

    const waterQuantity = item.amount;

    return CreateWaterCardMarkup({
      waterAddTime,
      waterCardId,
      waterQuantity,
      dialogStatus,
      setDialogStatus,
      setCurrentEditObj,
    });
  });

  const delWaterById = idToDel => {
    dispatch(delWaterThunk(idToDel));
  };

  return (
    <StyledWaterList>
      {markup}
      <button
        className="add-btn"
        onClick={() => dispatch(toggleAddWateVisibility())}
      >
        {showAddModal && (
          <Modal toggleModal={toggleAddWateVisibility}>
            <AddWaterModal togleModal={toggleAddWateVisibility} />
          </Modal>
        )}
        {showEditModal && (
          <Modal toggleModal={toggleEditWateVisibility}>
            <EditWaterModal
              prevVal={currentEditObj}
              togleModal={toggleEditWateVisibility}
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
