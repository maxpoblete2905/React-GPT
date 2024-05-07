import Markdown from 'react-markdown'; // Make sure to import Markdown from 'react-markdown'

interface GptMessagePros{
    text: string;
}

export const GptMessage = ({ text }: GptMessagePros) => { // Make sure to receive `text` as a prop
    return (
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex flow-row items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600">
                    G
                </div>
                <div className="relative ml-3 text-sm bg-black bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
                    <Markdown>{text}</Markdown> {/* Make sure `text` is a string */}
                </div>
            </div>
        </div>
    );
};
