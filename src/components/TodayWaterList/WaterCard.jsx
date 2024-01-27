import {
  changeWaterThunk,
  delWaterThunk,
} from '../../Redux/water/waterReducer';
import { TodayListIcons } from './TodayListIcons';

const WaterBtn = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
export const createWaterCardMarcup = ({
  waterCardId,
  waterQuantity,
  waterAddTime,
  dispatch,
}) => {
  return (
    <div className="water-card" key={waterCardId}>
      <div className="water-card-left-side">
        <TodayListIcons id="cup-icon" width={36} height={36} />
        <div className="water-info">
          <span className="water-quantity">{waterQuantity} ml</span>
          <span className="water-add-time">{waterAddTime}</span>
        </div>
      </div>
      <div className="btns">
        <WaterBtn
          onClick={() =>
            dispatch(
              changeWaterThunk({
                waterId: waterCardId,
                newQuantity: prompt('New quantity'),
                newTime: new Date(),
              })
            )
          }
          children={<TodayListIcons id="edit-icon" width="16" height="16" />}
        />
        {/* remove btn */}
        <WaterBtn
          onClick={() => dispatch(delWaterThunk(waterCardId))}
          children={<TodayListIcons id="delete-icon" width="16" height="16" />}
        />
      </div>
    </div>
  );
};
