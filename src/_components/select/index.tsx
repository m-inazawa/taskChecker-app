import { useState } from "react";
import "./style.css"
import { type GenreType } from "../../interfaces/GenreType";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FormModal } from "../modal/index";

interface Props {
  isInsideModal?: boolean;
  genres?: GenreType[];
  value?: number;
  changeSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const renderOption = ( genres: GenreType[] ) => {
  return (
    genres.map((genre: GenreType) => (
      <option key={genre.id} value={genre.id}>
        {genre.name}
      </option>
    ))
  );
};

export const Select = ({
  isInsideModal = false,
  genres=[],
  value,
  changeSelect = () => {}
}: Props ) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const selectedGenre = genres?.find((genre) => genre.id === value);

  return (
    <div>
      <select
        className="select"
        value={value}
        onChange={changeSelect}
      >
        <option value={0} hidden></option>
        {genres && genres.length > 0 && renderOption(genres)}
      </select>

      {isInsideModal ? (<></>
      ) : (
      <IconButton onClick={handleOpen}>
        <AddCircleOutlineIcon className="AAddCircleOutlineIcon"/>
      </IconButton>
      )}
      
      {!isInsideModal && (
        <FormModal
          isOpen={isOpen}
          handleClose={handleClose}
          editingGenre={selectedGenre}
        >
        </FormModal>
      )}
    </div>
  )
}