import React, { useEffect, useState } from "react";
import LayoutWrapper from "./layouts/LayoutWrapper";
import AvatarMaker from "./components/AvatarMaker/AvatarMaker";
import CharacterPicker from "./components/CharacterPicker/CharacterPicker";
import Modal from "./components/Modal/Modal";
import CharacterContainer from "./components/CharacterContainer/CharacterContainer";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [emojis, setEmojis] = useState({
    hat: [],
    face: [],
    top: [],
    bottom: [],
    shoe: []
  });
  const [avatars, setAvatars] = useState([]);
  const [selectedChar, setSelectedChar] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getEmojis = async () => {
      try {
        const data = await fetch("http://localhost:3001/emojis");
        const json = await data.json();
        // If the category doesn't exist, add the category. Else append item to category array
        const formattedEmojis = json.reduce((acc, current) => {
          if (!acc[current.category])
            return { ...acc, [current.category]: [current] };
          return {
            ...acc,
            [current.category]: [...acc[current.category], current]
          };
        }, emojis);
        setEmojis(formattedEmojis);
        // Simulate loading time
        setTimeout(() => setIsLoading(false), 1000);
      } catch {
        setIsError(true);
      }
    };

    getEmojis();
    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Sorry, an error has occurred.</p>;
  }

  const onSave = avatar => {
    setAvatars(prev => [...prev, avatar]);
  };

  const displaySelectedCharacter = character => {
    setSelectedChar(character);
    setIsOpen(true);
  };

  return (
    <div className="App">
      <h1>DFP Emoji Creator</h1>
      <LayoutWrapper>
        <AvatarMaker emojis={emojis} onSave={onSave} />
        <CharacterPicker select={displaySelectedCharacter} avatars={avatars} />
        <Modal isOpen={isOpen}>
          <CharacterContainer
            onFrameClose={() => setIsOpen(false)}
            character={selectedChar}
          />
        </Modal>
      </LayoutWrapper>
    </div>
  );
}

export default App;
