import React, {useContext, useState} from 'react';

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [position, setPosition] = useState([]);
  const [newPosition, setNewPosition] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState('');
  const [addPosition, setAddPosition] = useState({});
  const [msg, setMsg] = useState({state: false, message: ''});

  // position setting
  const handleMouseDown = (event) => {
    if (newPosition.length === 0) {
      const {x, y} = event.target.getStage().getPointerPosition();
      setNewPosition([{x, y, width: 0, height: 0, key: '0'}]);
    }
    setValue('');
  };

  const handleMouseMove = (event) => {
    if (newPosition.length === 1) {
      const sx = newPosition[0].x;
      const sy = newPosition[0].y;
      const {x, y} = event.target.getStage().getPointerPosition();

      setNewPosition([
        {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: '0',
        },
      ]);
    }
  };

  const handleMouseUp = (event) => {
    if (newPosition.length === 1) {
      const sx = newPosition[0].x;
      const sy = newPosition[0].y;
      const {x, y} = event.target.getStage().getPointerPosition();
      const addPositioning = {
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: position.length + 1,
      };
      setNewPosition([]);
      setIsModal(true);
      setAddPosition(addPositioning);
    }
  };

  // modal
  const closeModal = () => {
    setIsModal(false);
  };

  // input
  const handleSubmit = (e) => {
    e.preventDefault();
    const addPositions = [...position, {...addPosition, text: value}];
    if (value) {
      setPosition(addPositions);
      closeModal();
    } else {
      controlMsg();
    }
  };

  const handleChange = (e) => {
    const {value} = e.target;
    setValue(value);
  };

  // alert message
  const controlMsg = () => {
    setMsg({
      ...msg,
      state: true,
      message: '제품 이름이 필요해요. 다시 입력해주세요',
    });
  };

  const closeMsg = () => {
    setMsg({
      ...msg,
      state: false,
      message: '',
    });
  };

  return (
    <AppContext.Provider
      value={{
        position,
        setPosition,
        setNewPosition,
        newPosition,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        isModal,
        closeModal,
        handleChange,
        handleSubmit,
        value,
        addPosition,
        closeMsg,
        msg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
