import { useEffect } from "react";

/**
 * Modal for preview cards that act as "video" players.
 * Pass videoSrc if you have a real mp4 in public/videos/.
 * Otherwise shows a nice placeholder.
 */
export const VideoModal = ({
  isOpen,
  onClose,
  title = "Lesson preview",
  videoSrc,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="video-modal"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="video-modal__box" onClick={(e) => e.stopPropagation()}>
        <button
          className="video-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {videoSrc ? (
          <video
            className="video-modal__video"
            src={videoSrc}
            controls
            autoPlay
          />
        ) : (
          <div className="video-modal__placeholder">
            <span className="video-modal__placeholder-icon" aria-hidden="true">
              ▶
            </span>
            <p className="video-modal__placeholder-title">{title}</p>
            <p className="video-modal__placeholder-text">
              Video lesson placeholder. Put an mp4 into{" "}
              <code>public/videos/</code> and pass the path via{" "}
              <code>videoSrc</code>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
