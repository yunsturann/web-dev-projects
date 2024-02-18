export default async function Home() {
  return (
    <section className="flex-1 flex flex-col max-sm:px-4 py-6 gap-4 sm:gap-6 ">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-wider">Home</h1>
        <p>Welcome to the home page.</p>
      </div>
      <hr className="h-0.5 bg-gray-400" />
    </section>
  );
}
