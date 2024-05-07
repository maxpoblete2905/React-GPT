// import Markdown from "react-markdown"; // Make sure to import Markdown from 'react-markdown'

interface GptMessagePros {
  text: string;
}

export const MyMessage = ({ text }: GptMessagePros) => {
  // Make sure to receive `text` as a prop
  return (
    <div className="col-start-6 col-end-13 p-2 rounded-lg">
      <div className="flex items-center justify-start flex-row-reverse">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 ml-3">
          F
        </div>
        <div className="relative ml-3 text-sm bg-indigo-700 bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
          <div>{text}</div> {/* Make sure `text` is a string */}
        </div>
      </div>
    </div>
  );
};
