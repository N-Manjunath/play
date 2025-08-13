import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store';

function Icon({ name, className = 'w-5 h-5' }) {
  // Minimal inline icons to avoid extra deps
  const paths = {
    search: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
    ),
    bell: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 18.75a2.25 2.25 0 0 1-4.5 0m10.5-5.25c0 2.485-2.239 4.5-5 4.5h-7c-2.761 0-5-2.015-5-4.5 0-1.657.895-3.122 2.25-3.969V8.25a5.75 5.75 0 1 1 11.5 0v1.281A4.493 4.493 0 0 1 20.25 13.5Z" />
    ),
    chevronRight: <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />,
    heart: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.86 0-3.5 1.05-4.5 2.625C10.5 4.8 8.86 3.75 7 3.75c-2.761 0-5 2.015-5 4.5 0 5.25 10.5 12 10.5 12S21 13.5 21 8.25Z" />,
    home: <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5M4.5 9.75V21h15V9.75" />,
    inbox: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25h18M4.5 8.25 6 21h12l1.5-12.75M12 12v6" />,
    plus: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />,
    user: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0" />,
    chat: <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a4.5 4.5 0 0 1-4.5 4.5H8.25L3 21l1.5-4.5V7.5A4.5 4.5 0 0 1 9 3h7.5A4.5 4.5 0 0 1 21 7.5V15Z" />,
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      {paths[name]}
    </svg>
  );
}

function CategoryPill({ emoji, label }) {
  return (
    <div className="min-w-[64px] flex flex-col items-center gap-1">
      <div className="w-12 h-12 rounded-full bg-slate-100 grid place-items-center text-lg">{emoji}</div>
      <span className="text-[11px] text-slate-600 text-center leading-tight">{label}</span>
    </div>
  );
}

function Badge({ color = 'yellow', children }) {
  const map = {
    yellow: 'bg-yellow-100 text-yellow-800',
    blue: 'bg-blue-100 text-blue-700',
    slate: 'bg-slate-100 text-slate-700',
    green: 'bg-green-100 text-green-700',
  };
  return <span className={`px-1.5 py-0.5 text-[10px] rounded ${map[color]}`}>{children}</span>;
}

function ProductCard({ item }) {
  return (
    <div className="snap-start w-64 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-white">
      <div className="relative h-40 bg-slate-100">
        <img alt={item.title} src={item.imageUrl} className="absolute inset-0 w-full h-full object-cover" />
        <button className="absolute top-2 right-2 grid place-items-center bg-white/80 rounded-full p-1 text-slate-700">
          <Icon name="heart" className="w-5 h-5" />
        </button>
        <div className="absolute bottom-2 left-2"><Badge color="yellow">Featured</Badge></div>
      </div>
      <div className="p-3 space-y-1.5">
        <div className="text-[13px] text-slate-700 line-clamp-1">{item.title}</div>
        <div className="text-sm font-semibold">Rs {item.price.toLocaleString()}</div>
        <div className="flex items-center gap-1.5">
          {item.condition === 'new' ? <Badge color="blue">New</Badge> : <Badge color="slate">Used</Badge>}
          <Badge color="slate">{item.rating}</Badge>
        </div>
        <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
          <span>{item.location}</span>
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const locationState = useAppSelector((s) => s.location);

  const locationLabel =
    locationState.permission === 'granted' && locationState.coords
      ? `${locationState.coords.latitude.toFixed(4)}, ${locationState.coords.longitude.toFixed(4)}`
      : locationState.permission === 'manual'
      ? locationState.manualLocationLabel
      : 'Set location';

  const categories = [
    { emoji: '📱', label: 'Mobiles' },
    { emoji: '🏠', label: 'Property for Sale' },
    { emoji: '🚗', label: 'Vehicles' },
    { emoji: '🏍️', label: 'Bikes' },
    { emoji: '🏭', label: 'Business Industrial' },
    { emoji: '🛋️', label: 'Home & Furniture' },
  ];

  const items = [
    {
      id: 'mac14',
      title: 'Macbook 14',
      price: 450000,
      condition: 'new',
      rating: '10/10',
      location: 'Gulberg Phase 4, Lahore',
      date: '22 Sep',
      imageUrl:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'iphone14pm',
      title: 'Iphone 14 Pro Max',
      price: 600000,
      condition: 'used',
      rating: '08/10',
      location: 'Gulberg Phase 4, Lahore',
      date: '22 Sep',
      imageUrl:
        'https://images.unsplash.com/photo-1661347330538-6386bc0b7deb?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'watch',
      title: 'Smart Watch Series 8',
      price: 35000,
      condition: 'new',
      rating: '09/10',
      location: 'DHA, Lahore',
      date: '20 Sep',
      imageUrl:
        'https://images.unsplash.com/photo-1518442072089-1e3b3aee9d24?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-md px-4 py-3">
          <div className="flex items-center justify-center">
            <div className="text-3xl font-extrabold text-indigo-600 tracking-tight">Alexo</div>
          </div>
          <div className="text-center text-[11px] text-slate-500 -mt-1">Sell or Buy in One Marketplace</div>

          {/* Category + actions */}
          <div className="mt-3 flex items-center gap-2">
            <select className="text-sm border rounded-md px-2 py-2 flex-1">
              <option>Accessories</option>
              <option>Mobiles</option>
              <option>Vehicles</option>
            </select>
            <button className="w-10 h-10 grid place-items-center border rounded-md text-slate-600">
              <Icon name="search" />
            </button>
            <button className="w-10 h-10 grid place-items-center border rounded-md text-slate-600">
              <Icon name="bell" />
            </button>
          </div>

          {/* Location pill */}
          <button
            onClick={() => navigate('/location')}
            className="mt-2 w-full flex items-center gap-2 border rounded-md px-3 py-2 text-sm text-slate-700"
          >
            <span className="inline-flex items-center gap-2 text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-indigo-600">
                <path fillRule="evenodd" d="M11.54 22.352a.75.75 0 0 0 .92 0c1.284-1.02 5.79-4.858 7.698-8.692 1.005-2.008 1.14-4.127.485-5.985C19.747 4.165 16.78 2.25 12 2.25S4.253 4.165 3.357 7.675c-.655 1.858-.52 3.977.485 5.985 1.908 3.834 6.414 7.672 7.698 8.692ZM12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
              {locationLabel}
            </span>
            <span className="ml-auto text-slate-400">
              <Icon name="chevronRight" />
            </span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 pt-3 space-y-6">
        {/* Browse categories */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold">Browse Categories <span className="text-slate-500 font-normal">15+</span></div>
            <button className="text-xs text-indigo-600">See more</button>
          </div>
          <div className="flex gap-3 overflow-x-auto snap-x">
            {categories.map((c) => (
              <CategoryPill key={c.label} emoji={c.emoji} label={c.label} />
            ))}
          </div>
        </div>

        {/* Featured */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold">Featured <span className="text-slate-500 font-normal">10+</span></div>
            <button className="text-xs text-indigo-600">See more</button>
          </div>
          <div className="flex gap-3 overflow-x-auto snap-x pb-1">
            {items.map((it) => (
              <ProductCard key={it.id} item={it} />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold">Mobile <span className="text-slate-500 font-normal">100+</span></div>
            <button className="text-xs text-indigo-600">See more</button>
          </div>
          <div className="flex gap-3 overflow-x-auto snap-x pb-1">
            {items.map((it) => (
              <ProductCard key={`m-${it.id}`} item={it} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav moved to global Footer component */}
    </div>
  );
}