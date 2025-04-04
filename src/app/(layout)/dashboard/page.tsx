export default function Dashboard() {
  return (
    <div className="relative flex flex-col h-screen w-screen overflow-hidden">
      <div className="h-[126px] w-full home fixed top-0 left-0 z-10" />

      <div className="flex-grow bg-white w-full z-0" />

      <div className="absolute bottom-0 left-0 w-full h-[60px] overflow-hidden z-10">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0 C150,100 350,100 500,0 L500,150 L0,150 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(-152)">
              <stop offset="21%" stopColor="#2C938E" />
              <stop offset="77%" stopColor="#0A5967" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
