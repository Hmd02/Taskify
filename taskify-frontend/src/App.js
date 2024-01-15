
import './App.css';
import EmptyBoard from "./components/EmptyBoard.js";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from './redux/boardsSlice.js';
import { useState } from 'react';
import Home from './components/Home.js';
import AddEditBoardModal from './modals/AddEditBoardModal.js';


function App() {

  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const activeBoard = boards.find((board) => board.isActive);
  if (!activeBoard && boards.length > 0)
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));

  return (
    <div className=" overflow-hidden  overflow-x-scroll">
      {boards.length > 0 ?
        <>
        {/* <Header
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
        /> */}
        <Home
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
        />
        </>
        :
        <>
          <EmptyBoard type='add'/>
        </>
      }
    </div>
  );
}

export default App;
