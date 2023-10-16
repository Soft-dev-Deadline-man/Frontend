import {
    Menu,
    MenuItem,
    MenuList,
    PopperProps,
    Popper,
    Fade,
    Paper,
    IconButton,
    ListItemIcon,
    ListItemText,
  } from "@mui/material";
  import {useRecentSearches } from "@/components/useRecentSearches";
  import { AccessTime, Close } from "@mui/icons-material";
  import { useOnClickOutside } from "usehooks-ts";
  import { useRef } from "react";
 
  type Props = {
    onClose(): void;
  } & PopperProps;
  
  const RecentSearches = ({ open, anchorEl, onClose }: Props) => {
    const { recentSearches, setRecentSearches } = useRecentSearches();
    const paperRef = useRef<HTMLDivElement>(null);
    const el = anchorEl as HTMLElement;
    const removeItem = (searchTerm: string) => {
      setRecentSearches(recentSearches.filter((item) => item !== searchTerm));
    };
    useOnClickOutside(paperRef, onClose);
    if (!anchorEl) return null;
    return (
      <Popper anchorEl={anchorEl} open={open} disablePortal>
        <Paper sx={{ width: el.clientWidth }} ref={paperRef}>
          <MenuList>
            {!recentSearches.length ? (
              <>
                <MenuItem disabled>You have no recent searches...</MenuItem>
              </>
            ) : (
              <>
                {recentSearches.map((searchTerm, i) => {
                  return (
                    <MenuItem key={i}>
                      <ListItemIcon>
                        <AccessTime />
                      </ListItemIcon>
                      <ListItemText>{searchTerm}</ListItemText>
                      <IconButton onClick={() => removeItem(searchTerm)}>
                        <Close />
                      </IconButton>
                    </MenuItem>
                  );
                })}
              </>
            )}
          </MenuList>
        </Paper>
      </Popper>
    );
  };
  export default RecentSearches;
  