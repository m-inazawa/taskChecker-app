import { useState, useContext } from "react";
import { type GenreType } from "../../interfaces/GenreType";
import { DataContext } from "../../pages/home";
import "./genreBody.css";

interface GenreBodyProps {
  onClose?: () => void;
}

export const GenreBody = ({ onClose }: GenreBodyProps) => {
  const [genreName, setGenreName] = useState("");
  const { dispatch } = useContext(DataContext);

  const handleAdd = async () => {
    const trimmedName = genreName.trim();
    if (!genreName) return alert("ジャンル名を入力してください");

  try {
    const response = await fetch("/api/genres", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: trimmedName }),
    });

    if (!response.ok) throw new Error("保存に失敗しました");

    const newGenre: GenreType = await response.json();

    dispatch({
      type: "genreAdd",
      payload: { genre: newGenre }
    });

    setGenreName("");
    if (onClose) onClose();
  } catch (error) {
      console.error(error);
      alert("保存中にエラーが発生しました");
    }
  };

  return (
    <div className="modal_body">
      <h2 className="input_menu">ジャンルを追加</h2>
      <h4 className="input_title">ジャンル名</h4>
      <input 
        type="text" 
        placeholder="例：仕事、買い物"
        value={genreName} 
        onChange={(e) => setGenreName(e.target.value)} 
      />
      <input 
        className="input_submit" 
        type="button" 
        value="追加" 
        onClick={handleAdd} 
      />
    </div>
  );
};