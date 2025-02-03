export default function FullscreenLoader() {
  return (
    <div className="h-screen w-screen flex justify-center items-center dark:bg-dark-900 bg-gray-200">
      <svg width="150" height="150" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <rect className="spinner_9y7u" x="1" y="1" rx="1" width="30" height="30" fill="#94cc34" />
        <rect className="spinner_9y7u spinner_DF2s" x="1" y="1" rx="1" width="30" height="30" fill="#1e1e1e" />
        <rect className="spinner_9y7u spinner_q27e" x="1" y="1" rx="1" width="30" height="30" fill="#1e1e1e" />
      </svg>
    </div>
  );
}
