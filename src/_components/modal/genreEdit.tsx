// modal/genreEdit.tsx

import { useState, useContext } from "react";
import { DataContext } from "../../pages/home";
import type { GenreType } from "../../interfaces/GenreType";

interface GenreEditProps {
  editingGenre: GenreType; // ジャンルの型を指定
  onClose: () => void;
}

export const GenreEdit = ({ editingGenre, onClose }: GenreEditProps) => {
  const { dispatch } = useContext(DataContext);
  const [genreName, setGenreName] = useState(editingGenre.name);

  const handleUpdate = () => {
    if (!genreName) return alert("ジャンル名を入力してください");

    dispatch({
      type: "genreEdit", // reducerにこのActionTypeがあることを確認してください
      payload: { 
        genre: { ...editingGenre, name: genreName } 
      }
    });
    onClose();
  };

  return (
    <div className="modal_body">
      <h2 className="input_menu">ジャンルを編集</h2>
      <h4 className="input_title">ジャンル名</h4>
      <input 
        type="text" 
        value={genreName} 
        onChange={(e) => setGenreName(e.target.value)} 
      />
      <input 
        className="input_submit" 
        type="button" 
        value="更新" 
        onClick={handleUpdate} 
      />
    </div>
  );
};