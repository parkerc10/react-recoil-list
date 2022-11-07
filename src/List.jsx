import { useState } from "react";
import { useRecoilState } from "recoil";
import { listState } from "./atoms";

const List = () => {
  const [list, setList] = useRecoilState(listState);
  const [input, setInput] = useState("");

  const addToList = () => {
    if (input !== "") {
      setList([...list, input]);
      setInput("")
    }
  }

  const clearList = () => {
    setList([]);
  }

  const removeEntry = (entry) => {
    let array = [...list];
    let index = array.indexOf(entry);
    array.splice(index, 1);
    setList(array)
  }

  const handleKeyPress = (e) => {
    if (e.code === 'Enter') {
      addToList();
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-5">
        <input className="p-3 rounded mr-2" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => handleKeyPress(e)}/>
        <button className="bg-red-400 p-3 rounded hover:bg-red-900 text-white mr-2" onClick={addToList}>Add to List</button>
        <button className="bg-red-400 p-3 rounded hover:bg-red-900 text-white" onClick={clearList}>Clear List</button>
      </div>
      {
        list.map(entry => {
          return <p className="m-auto mb-5 w-1/4 p-2 bg-yellow-200 cursor-pointer hover:bg-yellow-600" onClick={() => removeEntry(entry)}>{entry}</p>
        })
      }
    </div>
  )
}

export default List;