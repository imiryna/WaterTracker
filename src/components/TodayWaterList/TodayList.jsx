import { delWaterThunk, getDailyWaterThunk } from 'Store/water/waterThunks';

import { useDispatch, useSelector } from 'react-redux';
import { StyledWaterList } from './TodayList.styled';
import { createWaterCardMarkup } from './WaterCard';
import { waterArrSelector } from 'Store/water/waterSelectors';
import { useState, useEffect } from 'react';
import { DeleteConfirmDialog } from './DeleteDialog';
import { StyledBackdrop } from './DeleteDialog.styled';
import { EditWaterModal } from './modals/EditWaterModal';
import { PlusSvg } from './StyledTodayListIcons';
import { Modal } from 'components/Modal/Modal';
import { AddWaterModal } from './modals/AddWaterModal';
import {
  toggleAddWateVisibility,
  toggleEditWateVisibility,
} from 'Store/modals/modalSlice';
import { selectAddWater, selectEditWater } from 'Store/modals/modalSelector';
import { selectAuthToken } from 'Store/auth/authSelector';
import { setWater } from 'Store/water/waterReducer';


export const TodayList = () => {
  const dispatch = useDispatch();

  const [dialogStatus, setDialogStatus] = useState({
    visible: false,
    idToDelete: null,
  });

  const [currentEditObj, setCurrentEditObj] = useState(null);
  //Creating marcup arr

  const delWaterById = idToDel => {
    dispatch(delWaterThunk(idToDel));
  };

  useEffect(() => {
    const fetchWater = () => {
      dispatch(getDailyWaterThunk());
    };
    fetchWater();
  }, [dispatch]);

  
  const showAddModal = useSelector(selectAddWater);
  const showEditModal = useSelector(selectEditWater);
  const waterArr = useSelector(waterArrSelector);
  const token = useSelector(selectAuthToken)
  
  useEffect(() =>{
    return () => {
      dispatch(setWater([]))
    }
  }, [token, dispatch]) 

  const markup = waterArr.map(item => {
    const waterCardId = item._id;

    // Calculating adding time
    const waterAddTime = item.time;

    const waterQuantity = item.amount;

    return createWaterCardMarkup({
      waterAddTime,
      waterCardId,
      waterQuantity,
      dialogStatus,
      setDialogStatus,
      setCurrentEditObj,
      dispatch
    });
  });

  return (
    <StyledWaterList>
      <p className="main-title">Today</p>
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
