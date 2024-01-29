import { Button } from 'primereact/button';
import { CupSvg, DeleteSvg, EditSvg } from './StyledTodayListIcons';

const WaterBtn = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
export const createWaterCardMarcup = ({
  waterCardId,
  waterQuantity,
  waterAddTime,
  setDialogStatus,
  setCurrentEditObj,
  togleEditModal,
}) => {
  return (
    <div className="water-card" key={waterCardId}>
      <div className="water-card-left-side">
        <CupSvg/>
        <div className="water-info">
          <span className="water-quantity">{waterQuantity} ml</span>
          <span className="water-add-time">{waterAddTime}</span>
        </div>
      </div>
      <div className="btns">
        <WaterBtn
          onClick={() => {
            setCurrentEditObj({_id: waterCardId, quantity: waterQuantity, time: waterAddTime});
            togleEditModal();
          }}
          children={<EditSvg/>}
        />
        {/* remove btn */}
        <Button
          label={<DeleteSvg data-place="card"/>}
          icon="pi pi-info-circle"
          onClick={() =>
            setDialogStatus({ visible: true, idToDelete: waterCardId })
          }
        />
      </div>
    </div>
  );
};
