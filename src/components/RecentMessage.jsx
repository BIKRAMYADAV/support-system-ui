import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosNotifications } from 'react-icons/io';

function App() {
  // The recent message must appear to pop up a while later
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Set showNotification to true after a delay to trigger the animation
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 0); //delay is adjusted as needed

    // the timer on component is cleared to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center p-4 ">
      <section className="max-w-7xl sm:px-6 lg:px-4 flex justify-center items-center ">
        <article >
          <section className="gap-x-1 gap-y-1 opacity-100">
            <article className={`relative  w-full h-20 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out ${showNotification ? 'animate-pop-up' : ''}`}>
              <div className="absolute inset-0 bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
              <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                <h3 className="text-center">
                  <Link className="flex items-center justify-around text-center" to="/messages">
                    <div>
                      <h3 className="font-bold">Recent Message</h3>
                      <h3>No problem, just chat in below if you have...</h3>
                    </div>
                    <div>
                      <IoIosNotifications />
                    </div>
                  </Link>
                </h3>
              </div>
            </article>
          </section>
        </article>
      </section>
    </div>
  );
}

export default App;
