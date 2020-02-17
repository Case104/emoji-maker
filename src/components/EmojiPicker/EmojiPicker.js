import React from "react";
import "./EmojiPicker.css";

const EmojiPicker = props => {
  return (
    <fieldset className="emoji-fieldset">
      <legend>Pick your {props.emojiGroupName}:</legend>
      {props.emojis.map(option => (
        <span
          className={`emoji-fieldset__optn ${
            props.currentSelection === option.emoji
              ? "emoji-fieldset__optn--selected"
              : "emoji-fieldset__optn--not-selected"
          }`}
          key={option.emoji}
        >
          <label htmlFor={option.name}>{option.emoji}</label>
          <input
            checked={props.currentSelection === option.emoji}
            value={option.emoji}
            type="radio"
            id={option.name}
            name={props.emojiGroupName}
            onChange={() => props.onEmojiSelection(option.emoji)}
          />
        </span>
      ))}
    </fieldset>
  );
};

export default EmojiPicker;
