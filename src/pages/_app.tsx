import { AppProps } from "next/app";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import "../styles/globals.css"; // Import your global styles

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider>
      {/* This section can be used to add a header or navigation bar */}
      <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div className="text-lg font-bold">My Clerk App</div>
        <div>
          {/* Show the SignInButton or UserButton based on authentication state */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      {/* Render the main component */}
      <main>
        <Component {...pageProps} />
      </main>
    </ClerkProvider>
  );
};

export default MyApp;
