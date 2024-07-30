import React from 'react';
import Typed from 'typed.js';


function Preloader() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['loading', 'loading.', 'loading..', 'loading...', 'loading....'],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 0,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="preloader">
      <span ref={el} />
    </div>
  );
}

export default Preloader;