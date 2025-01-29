export default function Hero11() {
  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex justify-center">
          <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
            <span className="hidden md:inline">Cachet is back.</span>
            <a href="#" target="_blank" className="font-semibold text-lime-600">
              <span className="absolute inset-0" /> Read the update{" "}
              <span>→</span>
            </a>
          </p>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            SecureCloud Backup Solution
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Introducing our cutting-edge SecureCloud Backup Solution, the
            ultimate safeguard for your critical data. In today's rapidly
            evolving IT landscape, data security and disaster recovery have
            never been more crucial.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-lime-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
            >
              Check out the demo
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more
              <span>→</span>
            </a>
          </div>
        </div>
        <div className="mt-10 flow-root sm:mt-20">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            {/* Photo by '@tvick' on Unsplash */}
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxiYWNrdXB8ZW58MHwwfHx8MTY5MjAwMjg2M3ww&ixlib=rb-4.0.3&q=80&w=1080"
              width={2432}
              height={1442}
              className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
