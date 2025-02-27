import { useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
// import useSendMessage from "../hooks/useSendMessage"

const MessageInput = () => {
  const [message, setMessage] = useState("")
//   const { handler, loading } = useSendMessage()

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) { return }
    // await handler({ message: message})
    setMessage("")
  }

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Send a message"
          aria-label="Message input"
          value={message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-200 focus:outline-none"
          aria-label="Send"
        >
          {/* {loading ? <div className='loading loading-spinner'></div> : <SendIcon />} */}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
