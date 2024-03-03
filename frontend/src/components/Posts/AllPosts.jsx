import PostCard from "./PostCard";

function AllPosts() {
  return (
    <div className="flex justify-center items-center ">
      <div>
        <div className="space-y-4">
          <PostCard
          postText="n this modification, I added a textClass prop that accepts a CSS class name for styling the text section. This allows you to pass a custom class to style the text as needed."
            avatarUrl="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            username="JohnDoe"
            postDate="2024-03-02"
            mediaType="image"
            mediaUrl="https://images.unsplash.com/photo-1466112928291-0903b80a9466?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            likes={10}
            comments={5}
            shares={2}
          />
          <PostCard
                    postText="n this modification, I added a textClass prop that accepts a CSS class name for styling the text section. This allows you to pass a custom class to style the text as needed."

            avatarUrl="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            username="JaneDoe"
            postDate="2024-03-01"
            mediaType="video"
            mediaUrl="https://www.w3schools.com/html/mov_bbb.mp4"
            likes={15}
            comments={8}
            shares={3}
          />
          <PostCard
                    postText="n this modification,the text section. This allows you to pass a custom class to style the text as needed."

            avatarUrl="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            username="JohnDoe"
            postDate="2024-03-02"
            mediaType="image"
            mediaUrl="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            likes={10}
            comments={5}
            shares={2}
          />
          <PostCard
            avatarUrl="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            username="JohnDoe"
            postDate="2024-03-02"
            mediaType="image"
            mediaUrl="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?b=1&s=170667a&w=0&k=20&c=cVdVl-0bpliZ0Sduc7ZDkMPwLnbxaMXZONllS39oeFc="
            likes={10}
            comments={5}
            shares={2}
          />
        </div>
      </div>
    </div>
  );
}

export default AllPosts;
