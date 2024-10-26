import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    alert('Password reset link sent to ' + email);
  };

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-2xl'>Forgot Password</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 mt-5'>
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border p-3 rounded-lg'
          required
        />
        <button type='submit' className='bg-blue-700 text-white rounded-lg p-3'>
          Send Reset Link
        </button>
      </form>
      <button
        onClick={() => navigate('/sign-in')}
        className='mt-3 bg-gray-500 text-white rounded-lg p-3'
      >
        Back to Sign In
      </button>
    </div>
  );
}

export default ForgotPassword;

