import { useState } from "react";
import { GptMessage } from "../components/chat-bubbles/GptMessage";
import { MyMessage } from "../components/chat-bubbles/MyMessage";
import { TypingLoader } from "../components/loaders/TypingLoader";
import { TextMessageBox } from "../components/chatInputBoxes/TextMessageBox";

interface Message {
  text: string;
  isGpt: boolean;
}

export const ChatTemplate = () => {
  const [isloading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessage((prev) => [...prev, { text: text, isGpt: false }]);
    // TODO: useCase

    setIsLoading(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/**Bienvenida */}
          <GptMessage
            text={
              "Hola , puedes escribir tu texto en español, y yo te ayudo con las corecciones"
            }
          />

          {message.map((messageItem, index) =>
            messageItem.isGpt ? (
              <GptMessage key={`gpt-${index}`} text="Esto es de OpenAI" />
            ) : (
              <MyMessage key={`my-${index}`} text={messageItem.text} />
            )
          )}

          {isloading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe aqui lo que deseas"
      />
    </div>
  );
};
