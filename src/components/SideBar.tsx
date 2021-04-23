import { Button } from './Button'
import { GenreContext } from '../contexts/GenreContext'
import { useContext } from 'react';

import '../styles/sidebar.scss';

export function SideBar() {
  // Complete aqui

  const { genres, selectedGenreId, handleClickButton } = useContext(GenreContext);

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}