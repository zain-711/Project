import EditBtn from "./EditButton";
import "./ReceiptRender.css";
import { useState } from "react";
import Removebtn from "./RemoveBtn";
import EditComp from "./EditComp";

export default function RecieptRender({ saveHandler, removeHandler, item }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <EditComp
          saveHandler={saveHandler}
          handleClick={handleSave}
          item={item}
        ></EditComp>
      ) : (
        <div className="object">
          <div className="txt">{item.id}</div>
          <div className="txt">{item.Name}</div>
          <div className="txt">£{item.Price}</div>
          <div className="txt">{item.Category}</div>
          <div>
            <EditBtn handleClick={handleEdit}></EditBtn>
            <Removebtn removeHandler={removeHandler} id={item.id}></Removebtn>
          </div>
        </div>
      )}
    </div>
  );
}
