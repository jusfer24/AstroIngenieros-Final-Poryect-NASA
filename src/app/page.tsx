import Orrery from "@/components/Orrery";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen lg:px-12 px-6 py-8">
      <div>
        <h1 className="text-3xl font-bold">Galaxy Eye</h1>
        <h2 className="text-lg font-medium text-muted-foreground">
          Astro ingenieros
        </h2>
        <h3 className="text-lg font-medium text-muted-foreground">
          Descubre el cosmos a tu alcance
        </h3>
      </div>
      <Orrery />
    </div>
  );
}
