import React from 'react';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

function PostCard({ username, postDate, mediaType, mediaUrl, likes, comments, shares, avatarUrl, postText }) {
  return (
    <div className="border mb-4 w-full md:w-2/5 mx-auto">
      <div className="flex items-center bg-gray-200 pb-2 pt-2 pr-3">
        <img src={avatarUrl} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
        <div className="font-semibold text-blue-500">{username}</div>
        <div className="text-gray-500 text-blue-500 ml-auto">{postDate}</div>
      </div>
      <div className="p-3">{postText}</div>
      {mediaType === 'video' ? (
        <video className="w-full rounded-lg" src={mediaUrl} controls />
      ) : (
        <img className="w-full rounded-lg" src={mediaUrl} alt="Post" />
      )}
      <div className="flex justify-around items-center mt-2 mb-2">
        <div className="flex justify-around w-full">
          <button className="text-blue-500 flex justify-between items-center">
            <FaThumbsUp className="mr-1" /> Like {likes}
          </button>
          <button className="text-blue-500 flex items-center ml-4">
            <FaComment className="mr-1" /> Comment {comments}
          </button>
          <button className="text-blue-500 flex items-center ml-4">
            <FaShare className="mr-1" /> Share {shares}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
