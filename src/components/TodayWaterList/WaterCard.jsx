import { Button } from 'primereact/button';
import { CupSvg, DeleteSvg, EditSvg } from './StyledTodayListIcons';
import { parseUtcTime } from 'services/helpers/getUtcTime';
import { toggleEditWateVisibility } from 'Store/modals/modalSlice';

export const createWaterCardMarkup = ({
  waterCardId,
  waterQuantity,
  waterAddTime,
  setDialogStatus,
  setCurrentEditObj,
  dispatch,
}) => {
  const time = parseUtcTime(waterAddTime);

  const toggleModal = () => dispatch(toggleEditWateVisibility());

  if (time.hours > 12) {
    time.hours = time.hours - 12;
    time.dayPart = 'PM';
  } else {
    time.dayPart = 'AM';
  }

  return (
    <div className="water-card" key={waterCardId}>
      <div className="water-card-left-side">
        <CupSvg />
        <div className="water-info">
          <span className="water-quantity">{waterQuantity} ml</span>
          <span className="water-add-time">{`${time.hours}:${time.minutes} ${time.dayPart}`}</span>
        </div>
      </div>
      <div className="btns">
        <button
          className="edit-btn"
          onClick={() => {
            setCurrentEditObj({
              _id: waterCardId,
              quantity: waterQuantity,
              time: waterAddTime,
            });
            toggleModal();
          }}
          children={<EditSvg />}
        />
        {/* remove btn */}
        <Button
          className="delete-btn"
          label={<DeleteSvg data-place="card" />}
          icon="pi pi-info-circle"
          onClick={() =>
            setDialogStatus({ visible: true, idToDelete: waterCardId })
          }
        />
      </div>
    </div>
  );
};
