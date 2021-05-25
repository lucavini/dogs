import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState(window.matchMedia(media).matches);

  React.useEffect(() => {
    function changeMatch() {
        const {matches} = window.matchMedia(media);
        setMatch(matches);
    }
    window.addEventListener('resize',changeMatch);
    return () =>{
        window.removeEventListener('resize',changeMatch);
    }
  }, [media]);

  return match;
};

export default useMedia;
