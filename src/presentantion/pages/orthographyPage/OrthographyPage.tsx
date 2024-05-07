import { useState } from "react";
import { GptMessage } from "../../components/chat-bubbles/GptMessage";
import { MyMessage } from "../../components/chat-bubbles/MyMessage";
import { TypingLoader } from "../../components/loaders/TypingLoader";
import { TextMessageBox } from "../../components/chatInputBoxes/TextMessageBox";
import { orthographyUseCase } from "../../../core/use-case";
import { GptOrthographyMessage } from "../../components";

interface Message {
  text: string;
  isGpt: boolean;
  info?: {
    userScore: number;
    errors: string[];
    message: string;
  };
}

export const OrthographyPage = () => {
  const [isloading, setIsLoading] = useState(false);
  const [messages, setMessage] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessage((prev) => [...prev, { text: text, isGpt: false }]);

    const { ok, errors, message, userScore } = await orthographyUseCase(text);

    if (!ok) {
      setMessage((prev) => [
        ...prev,
        {
          text: "no se pudo realizar la correccion",
          isGpt: true,
        },
      ]);
    } else {
      setMessage((prev) => [
        ...prev,
        {
          text: message,
          isGpt: true,
          info: {
            userScore,
            errors,
            message,
          },
        },
      ]);
    }

    setIsLoading(false);
  };

  console.log(messages);

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

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptOrthographyMessage
                key={index}
                userScore={message.info!.userScore}
                errors={message.info!.errors}
                message={message.info!.message}
              />
            ) : (
              <MyMessage key={`my-${index}`} text={message.text} />
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
