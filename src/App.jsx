import { DigimonList } from "./components/DigimonList";
import { SearchBar } from "./components/SearchBar";
import { TeamSidebar } from "./components/TeamSidebar";
import { DigimonProvider } from "./DigimonContext";


export default function App() {
  return (
    <DigimonProvider>
      <div className="w-screen flex flex-col gap-5">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-blue-500 text-5xl">DigiTeam</h1>

          <SearchBar />
        </div>

        <div className="relative flex gap-5 p-5">
          <DigimonList />

          <TeamSidebar />
        </div>
      </div>

    </DigimonProvider>
  );
}
