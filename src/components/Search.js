import { makeStyles } from "@material-ui/core";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  search: {
    position: "relative",
    borderRadius: "20px"
  },
  searchIcon: {
    paddingLeft: "512px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

function Search() {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        variant="contained"
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}

export default Search;
