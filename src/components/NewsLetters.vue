<template>
  <div class="signin-container">
    <div class="content">
      <h2>GamerSub is better when you sign in</h2>
      <p>Sign in and join us on our journey to discover strange and compelling PC games.</p>
      <div class="auth-options">
        <button class="google-signin" @click="signInWithGoogle">
          <svg aria-hidden="true" class="google-icon" width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8.1H8.98v3.2h4.57c-.2 1.2-1 2.4-2.2 3.2v2.2h2.8c1.6-1.5 2.6-3.8 2.6-6.4 0-.6-.1-1.1-.2-1.6z" fill="#4285F4"></path><path d="M8.98 17c2.4 0 4.5-.8 6-2.2l-2.8-2.2c-.8.5-1.8.9-3.2.9-2.5 0-4.5-1.7-5.3-4H.9v2.3C2.5 14.5 5.5 17 8.98 17z" fill="#34A853"></path><path d="M3.7 10.7c-.2-.6-.2-1.2 0-1.8V6.6H.9c-.6 1.2-1 2.5-1 4s.4 2.8 1 4l2.8-2.3z" fill="#FBBC05"></path><path d="M8.98 3.5c1.3 0 2.5.5 3.4 1.4l2.5-2.5C13.5.6 11.4 0 8.98 0 5.5 0 2.5 2.5.9 5.8l2.8 2.3c.8-2.3 2.8-4 5.3-4z" fill="#EA4335"></path></svg>
          <span>Sign in with Google</span>
        </button>
        
      </div>
      <a href="#" class="signin-email" @click.prevent="signInWithEmail">Montly NewsLetters</a>
    </div>
    <div class="illustration">
 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="#63E6BE" width="150" height="150"> <path d="M448 128C554 128 640 214 640 320C640 426 554 512 448 512L192 512C86 512 0 426 0 320C0 214 86 128 192 128L448 128zM192 240C178.7 240 168 250.7 168 264L168 296L136 296C122.7 296 112 306.7 112 320C112 333.3 122.7 344 136 344L168 344L168 376C168 389.3 178.7 400 192 400C205.3 400 216 389.3 216 376L216 344L248 344C261.3 344 272 333.3 272 320C272 306.7 261.3 296 248 296L216 296L216 264C216 250.7 205.3 240 192 240zM432 336C414.3 336 400 350.3 400 368C400 385.7 414.3 400 432 400C449.7 400 464 385.7 464 368C464 350.3 449.7 336 432 336zM496 240C478.3 240 464 254.3 464 272C464 289.7 478.3 304 496 304C513.7 304 528 289.7 528 272C528 254.3 513.7 240 496 240z"/></svg>
  
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default {
  name: "NewsLetters",
  methods: {
    signInWithGoogle() { 
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;       
    });  },
    signInWithFacebook() {
      // Placeholder for Facebook sign-in logic
      console.log("Sign in with Facebook clicked");
    },
    signInWithTwitter() {
      // Placeholder for Twitter sign-in logic
      console.log("Sign in with Twitter clicked");
    },
    signInWithReddit() {
      // Placeholder for Reddit sign-in logic
      console.log("Sign in with Reddit clicked");
    },
    signInWithEmail() {
      // Placeholder for email sign-in logic
      console.log("Sign in with email clicked");
    }
  }
}
</script>

<style scoped>
.signin-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d0d1f;
  color: white;
  padding: 30px 40px;
  border-radius: 12px;
  font-family: 'Roboto', sans-serif;
   border: 1px solid #4B4B64;
}

.content {
  flex-grow: 1;
}
@media (max-width:800px) {
  .illustration {
    display: none;
  }
}

.content h2 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px;color:white;
}

.content p {
  font-size: 16px;
  margin: 0 0 24px;
  max-width: 350px;color:white;
}

.auth-options {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.google-signin {
  display: inline-flex;
  align-items: center;
  background-color: white;
  color: #333;
  border: 1px solid #bfbfbf;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
}

.google-icon {
  margin-right: 10px;
}

.social-icons {
  display: flex;
  margin-left: 12px;
}

.social-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  margin-right: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
  font-family: sans-serif;
}

.facebook {
  background-color: #1877F2;
}

.twitter {
  background-color: #1DA1F2;
}

.reddit {
  background-color: #FF4500;
}

.signin-email {
  color: #00C896;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
}
@media only screen and (max-width: 476px) {
  .illustration{
    display: none;
  }
     
}
.illustration {
  padding-left: 14px;
}
</style>
