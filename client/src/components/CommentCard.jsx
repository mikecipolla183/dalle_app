import React from 'react';

const CommentCard = ({ user, text }) => {
  return (
    <div className="bg-zinc-700 rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-green-700 text-white font-bold flex justify-center items-center rounded-full mr-2">
          {user[0]}
        </div>
        <p className="text-[#e1d9d1] font-semibold">{user}</p>
      </div>
      <p className="text-[#e1d9d1]">{text}</p>
    </div>
  );
};

export default CommentCard;