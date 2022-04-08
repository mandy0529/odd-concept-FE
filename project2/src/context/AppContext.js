import React, {useContext, useState} from 'react';

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [position, setPosition] = useState([]);
  const [newPosition, setNewPosition] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState('');
  const [addPosition, setAddPosition] = useState({});

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

  const closeModal = () => {
    setIsModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addPositions = [...position, {...addPosition, text: value}];
    setPosition(addPositions);
    closeModal();
  };

  const handleChange = (e) => {
    const {value} = e.target;
    setValue(value);
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
