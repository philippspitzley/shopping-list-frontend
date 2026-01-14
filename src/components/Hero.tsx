function Hero() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-3 blur-3xl"
      >
        <div className="hero-clip mx-auto aspect-1155/900 w-288.75 bg-linear-to-tr from-[#9380ff] to-[#00fc32] opacity-20"></div>
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-primary text-xl font-semibold">Shopping List</h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
          Keep track of your groceries with ease.
        </p>
        <p className="mt-10 text-lg font-light text-balance text-white/60">
          Add new items by typing a name into the input. Click an item to mark
          or unmark it as bought. Tap the trash icon to delete an item.
        </p>
      </div>
    </>
  )
}

export default Hero
