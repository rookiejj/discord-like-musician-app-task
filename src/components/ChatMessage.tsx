import React from 'react';
import { formatDistanceToNow } from 'date-fns';

interface ChatMessageProps {
  message: {
    content: string;
    user: {
      name: string;
      avatar: string;
    };
    timestamp: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className="flex items-start gap-3 p-4 hover:bg-gray-50">
      <img
        src={message.user.avatar}
        alt={message.user.name}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <h4 className="font-medium text-gray-900">{message.user.name}</h4>
          <span className="text-xs text-gray-500">
            {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
          </span>
        </div>
        <p className="text-gray-700 mt-1">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;