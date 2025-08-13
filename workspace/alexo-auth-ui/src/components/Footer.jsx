export default function Footer() {
  function Icon({ name, className = 'w-5 h-5' }) {
    const paths = {
      home: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5M4.5 9.75V21h15V9.75" />
      ),
      inbox: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25h18M4.5 8.25 6 21h12l1.5-12.75M12 12v6" />
      ),
      plus: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />,
      user: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0" />
      ),
      chat: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a4.5 4.5 0 0 1-4.5 4.5H8.25L3 21l1.5-4.5V7.5A4.5 4.5 0 0 1 9 3h7.5A4.5 4.5 0 0 1 21 7.5V15Z" />
      ),
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        {paths[name]}
      </svg>
    );
  }

  return (
    <div className="fixed bottom-0 inset-x-0 z-30">
      <div className="mx-auto max-w-md px-4 pb-3">
        <div className="relative bg-white border border-slate-200 rounded-full h-16 flex items-center justify-around shadow-sm">
          <button className="text-slate-700" aria-label="Home"><Icon name="home" className="w-6 h-6" /></button>
          <button className="text-slate-700" aria-label="Chat"><Icon name="chat" className="w-6 h-6" /></button>
          <div className="absolute left-1/2 -translate-x-1/2 -top-4">
            <button className="w-12 h-12 rounded-full bg-indigo-600 text-white grid place-items-center shadow-lg" aria-label="New">
              <Icon name="plus" className="w-7 h-7" />
            </button>
          </div>
          <button className="text-slate-700" aria-label="Inbox"><Icon name="inbox" className="w-6 h-6" /></button>
          <button className="text-slate-700" aria-label="Profile"><Icon name="user" className="w-6 h-6" /></button>
        </div>
      </div>
    </div>
  );
}