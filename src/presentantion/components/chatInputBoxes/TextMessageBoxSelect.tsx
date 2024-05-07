import { FormEvent, useState } from "react";

interface Props {
  onSendMessage: (massage: string) => void;
  placeholder?: string;
  disableCorrections?: boolean;
  options: Options[];
}

interface Options {
  id: string;
  text: string;
}

export const TextMessageBoxSelect = ({
  onSendMessage,
  placeholder,
  disableCorrections = false,
  options,
}: Props) => {
  const [message, setMessage] = useState("");
  const [selectedOptions, setSelectedOption] = useState<string>("");

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim().length === 0) return;

    onSendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className="flex-grow">
        <div className="flex">
          <input
            autoFocus
            type="text"
            name="message"
            className="flex w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h10"
            placeholder={placeholder}
            autoComplete={disableCorrections ? "on" : "off"}
            autoCorrect={disableCorrections ? "on" : "off"}
            spellCheck={disableCorrections ? "true" : "false"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <select
            className="w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            name=""
            id=""
            value={selectedOptions}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value=""> seleccione una opcion </option>
            {options.map(({ id, text }) => (
              <option key={id} value={id}>
                {" "}
                {text}{" "}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="ml-4">
        <button className="btn-primary">
          <span className="fa-regular fa-paper-plane"></span>
        </button>
      </div>
    </form>
  );
};
