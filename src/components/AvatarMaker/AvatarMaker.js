import React, { useState } from "react";
import EmojiPicker from "../EmojiPicker/EmojiPicker";
import FittingRoom from "../FittingRoom/FittingRoom";
import "./AvatarMaker.css";

const AvatarMaker = ({ emojis, onSave }) => {
  const categories = Object.keys(emojis);
  const [character, setCharacter] = useState({
    name: "",
    ...categories.map(cat => {
      return { [cat]: "" };
    })
  });
  const [step, setStep] = useState(0);
  const isFirstInput = step === 0;
  const isLastInput = step === categories.length - 1;

  /**
   * Function to update the character being built
   * @param {string} emojiCategory - the current category to update emoji with
   * @param {string} emoji - the emoji to add to specified category
   */
  const updateCharacter = emojiCategory => emoji => {
    setCharacter(currentChar => ({
      ...currentChar,
      [categories[step]]: emoji
    }));
  };

  /**
   * Function to update the name on the character being built
   * @param {Object} e - event triggered from input change
   */
  const handleNameChange = event => {
    // Must destructure event target since setting state is asynchronous ..
    // .. and we would lose the value of the event target upon declaration
    const { value: name } = event.target;
    setCharacter(currentChar => ({
      ...currentChar,
      name
    }));
  };

  /**
   * Function to finalize emoji character
   * @param {Object} event - event triggered from form submission
   */
  const createEmoji = event => {
    // Prevent default behavior of refreshing page on form submission
    event.preventDefault();
    onSave(character);
    setCharacter({
      name: ""
    });
    setStep(0);
  };

  return (
    <section className="create-emoji cont cont--direction-col cont--align-center">
      <input
        className="create-emoji__input cont__item--grow create-emoji__input"
        type="text"
        onChange={handleNameChange}
        placeholder="Enter character name..."
        value={character.name || ""}
      />
      <FittingRoom character={character} />
      <div>
        <form onSubmit={createEmoji}>
          <EmojiPicker
            emojis={emojis[categories[step]]}
            currentSelection={
              character[categories[step]] ? character[categories[step]] : ""
            }
            emojiGroupName={categories[step]}
            onEmojiSelection={updateCharacter(categories[step])}
          />
          <div className="cont cont--justify-center">
            <button
              className={`create-emoji__btn ${isFirstInput &&
                "create-emoji__btn--disabled"}`}
              type="button"
              onClick={() => {
                setStep(prevNum => prevNum - 1);
              }}
              disabled={isFirstInput}
            >
              Previous Category
            </button>
            {isLastInput ? (
              <input
                className="create-emoji__btn"
                type="submit"
                value="Submit"
              />
            ) : (
              <button
                className="create-emoji__btn"
                type="button"
                onClick={() => {
                  setStep(prevNum => prevNum + 1);
                }}
              >
                Next Category
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AvatarMaker;
