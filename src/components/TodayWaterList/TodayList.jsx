import { addWaterThunk, delWaterThunk } from '../../Redux/water/waterThunks';
import { useDispatch, useSelector } from 'react-redux';
import { StyledWaterList } from './TodayList.styled';
import { createWaterCardMarcup } from './WaterCard';
import { TodayListIcons } from './TodayListIcons';
import { waterArrSelector } from '../../Redux/water/waterSelectors';
import { useState } from 'react';
import { DeleteConfirmDialog } from './DeleteDialog';
import { StyledBackdrop } from './DeleteDialog.styled';
// import { Dialog } from '@mui/material';

export const TodayList = () => {
  const dispatch = useDispatch();

  const waterArr = useSelector(waterArrSelector);
  const [dialogStatus, setDialogStatus] = useState({
    visible: false,
    idToDelete: null,
  });
  //Creating marcup arr
  const marcup = waterArr.map(item => {
    const waterCardId = item._id;

    // Calculating adding time
    const waterAddTime = `${
      item.time.getHours() >= 10
        ? item.time.getHours()
        : '0' + item.time.getHours()
    }:${
      item.time.getMinutes() >= 10
        ? item.time.getMinutes()
        : '0' + item.time.getMinutes()
    } ${item.time.getHours() > 12 ? 'PM' : 'AM'}`;

    const waterQuantity = item.quantity;

    return createWaterCardMarcup({
      waterAddTime,
      waterCardId,
      waterQuantity,
      dialogStatus,
      setDialogStatus,
      dispatch,
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
          dispatch(
            addWaterThunk({ quantity: prompt('Quantity'), time: new Date() })
          );
        }}
      >
        <TodayListIcons id="plus-icon" width={24} height={24} />
        Add Water {dialogStatus.visible}{dialogStatus.idToDelete}
      </button>
      {dialogStatus.visible && <StyledBackdrop ></StyledBackdrop>}
      <DeleteConfirmDialog
        visible={dialogStatus.visible}
        idToDelete={dialogStatus.idToDelete}
        setDialogStatus={setDialogStatus}
        deleteWater={delWaterById}
      />
    </StyledWaterList>
  );
};
