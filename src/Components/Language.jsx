import { useState } from "react";

function Language() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translations = {
    hello: {
      tamil: "வணக்கம்",
      hindi: "नमस्ते",
    },
    thankyou: {
      tamil: "நன்றி",
      hindi: "धन्यवाद",
    },
    welcome: {
      tamil: "வரவேற்பு",
      hindi: "स्वागत है",
    },
  };

  const handleTranslate = (language) => {
    const word = text.toLowerCase();
    if (translations[word]) {
      setTranslatedText(translations[word][language]);
    } else {
      setTranslatedText("Translation not available");
    }
  };

  return (
    <div className="bg-amber-300 text-center" style={{ padding: "20px" }}>
      <h2>Language Translator</h2>

      <input className="bg-gray-400 p-2  border-2 items-center" 
        type="text"
        placeholder="Enter word (hello, thankyou, welcome)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button className="bg-green-300 p-2 rounded-2xl" onClick={() => handleTranslate("tamil")}>
        Translate to Tamil
      </button><br></br>

      <button className="bg-orange-500 p-2 rounded-2xl" onClick={() => handleTranslate("hindi")}>
        Translate to Hindi
      </button>

      <h3>Result: {translatedText}</h3>
    </div>
  );
}

export default Language;
