import type { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import Searchbar from "@/components/Searchbar";
import { useRouter } from "next/router";
import { useRecentSearches } from "@/components/useRecentSearches";
import RecentSearches from "@/components/RecentSearches";
import { useRef, useState } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const { recentSearches, setRecentSearches } = useRecentSearches();
  const [open, setOpen] = useState(false);
  const anchorEl = useRef<HTMLDivElement>(null);
  return (
    <Box maxWidth={"sm"} margin="auto">
      <Typography textAlign="center" my={2}>
        MUI <code>{`<SearchBar/>`}</code> Tutorial
      </Typography>
      <Box ref={anchorEl}>
        <Searchbar
          onSubmit={(searchTerm: string) => {
            router.push({
              query: {
                search: searchTerm,
              },
            });
            if (!recentSearches.includes(searchTerm)) {
              setRecentSearches([searchTerm, ...recentSearches]);
            }
          }}
          inputProps={{
            onFocus: () => setOpen(true),
          }}
        />
        <RecentSearches
          open={open}
          anchorEl={anchorEl.current}
          onClose={() => {
            setOpen(false);
          }}
        />
      </Box>
    </Box>
  );
};
export default Home;