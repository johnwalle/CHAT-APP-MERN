import { LuMessagesSquare } from "react-icons/lu";
import { SiWelcometothejungle } from "react-icons/si";



const NoChatSelectedPage = () => {
    return (
        <div className="flex flex-col bg-slate-600 text-white items-center justify-center h-screen">
            <h1 className="text-4xl font-bold flex"><SiWelcometothejungle className="text-6xl" />elcome, 👋 John Doe!</h1>
            <p className="text-xl mt-4">Select a chat to start messaging.</p>
            <LuMessagesSquare className="text-6xl mt-7" />
        </div>
    );
};

export default NoChatSelectedPage;