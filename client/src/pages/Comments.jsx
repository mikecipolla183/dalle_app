import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, CommentCard, FormField } from '../components';

const Comments = () => {
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [newComment, setNewComment] = useState({ user: '', text: '' });

  // Fetches selected post from the database using the get post route.
  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:8080/api/v1/post/${postId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const result = await response.json();
          setPost(result.data);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  // Take input from keyboard for the comment.
  const handleInputChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
    });
  };

  // Store the input as a comment of the post
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/v1/post/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: newComment.user,
          text: newComment.text,
        }),
      });

      if (response.ok) {
        // Reset the new comment state after successfully adding the comment
        setNewComment({ user: '', text: '' });

        // Fetch the post again to update the comments list
        const updatedResponse = await fetch(`http://localhost:8080/api/v1/post/${postId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (updatedResponse.ok) {
          const result = await updatedResponse.json();
          setPost(result.data);
        }
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  // All style and layout of the Comments page.
  return (
    <section className="max-w-7xl mx-auto">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          {post && (
            <div>
              <h1 className="font-extrabold text-[#e1d9d1] text-2xl">{post.name}'s</h1>
              <p className="mt-2 text-[#e1d9d1] text-lg">"{post.prompt}"</p>
              <img src={post.photo} alt={post.name} className="mt-4" />

              {/* Display Comments */}
              <div className="mt-8">
                <h2 className="font-semibold text-[#e1d9d1] text-lg mb-3">Comments</h2>
                {post.comments.map((comment) => (
                  <CommentCard key={comment._id} {...comment} />
                ))}
              </div>

              {/* Form to submit new comment */}
              <form className="mt-8" onSubmit={handleCommentSubmit}>
                <div className="flex flex-col space-y-2">
                  <FormField
                    LabelName="Your Name"
                    type="text"
                    name="user"
                    placeholder="Jane Doe"
                    value={newComment.user}
                    handleChange={handleInputChange}
                    required
                  />
                  <FormField
                    LabelName="Your Comment"
                    type="text"
                    name="text"
                    placeholder="This looks great!"
                    value={newComment.text}
                    handleChange={handleInputChange}
                    required
                  />
                </div>
                <button
                    type="submit"
                    className="mt-3 text-white bg-[#6469ff]
                    font-medium rounded-md text-sm w-full sm:w-auto
                    px-5 py-2.5 text-center"
                    >
                    {loading ? 'Sharing...' : 'Submit Comment'}
            </button>
              </form>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Comments;
