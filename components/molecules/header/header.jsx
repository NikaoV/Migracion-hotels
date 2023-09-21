import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./header.module.css";

export const Header = ({ updateCity, updatePrice, updateSizes, changeDateFrom, changeDateTo }) => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}> Book It </h1>
        <div className={styles.filtersBox}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                <font size="3" sx={{ marginBottom: "100px" }}>
                  Country
                </font>
              </InputLabel>
              <Select
                name=""
                id=""
                className={`${styles.filtersBox__input} ${styles.input}`}
                onChange={(e) => updateCity(e.target.value)}
              >
                <MenuItem value="all">
                  {" "}
                  <font size="3">All countrys</font>
                </MenuItem>
                <MenuItem value="argentina">
                  {" "}
                  <font size="3">Argentina</font>
                </MenuItem>
                <MenuItem value="brasil">
                  {" "}
                  <font size="3">Brasil </font>
                </MenuItem>
                <MenuItem value="chile">
                  {" "}
                  <font size="3">Chile</font>
                </MenuItem>
                <MenuItem value="uruguay">
                  {" "}
                  <font size="3">Uruguay </font>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <input
            onChange={(e) => changeDateFrom(e.target.value)}
            type="date"
            className={`${styles.filtersBox__input} ${styles.input}`}
          />

          <input
          onChange={(e) => changeDateTo(e.target.value)}
            type="date"
            className={`${styles.filtersBox__input} ${styles.input}`}
          />

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                <font size="3">Price</font>
              </InputLabel>
              <Select
                name=""
                id=""
                className={`${styles.filtersBox__input} ${styles.input}`}
                onChange={(e) => updatePrice(e.target.value)}
              >
                <MenuItem value="all">
                  <font size="3">All Prices</font>
                </MenuItem>
                <MenuItem value="1">
                  <font size="3">$</font>
                </MenuItem>
                <MenuItem value="2">
                  <font size="3">$$ </font>
                </MenuItem>
                <MenuItem value="3">
                  <font size="3">$$$</font>
                </MenuItem>
                <MenuItem value="4">
                  <font size="3">$$$$</font>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                <font size="3">Sizes</font>
              </InputLabel>
              <Select
                name=""
                id=""
                className={`${styles.filtersBox__input} ${styles.input}`}
                onChange={(e) => updateSizes(e.target.value)}
              >
                
                  <MenuItem value="all">
                    <font size="3">All sizes </font>
                  </MenuItem>
                  <MenuItem value="small">
                    <font size="3">Small</font>
                  </MenuItem>
                  <MenuItem value="medium">
                    <font size="3">Medium</font>
                  </MenuItem>
                  <MenuItem value="large">
                    <font size="3">large </font>
                  </MenuItem>
                
              </Select>
            </FormControl>
          </Box>
        </div>
      </header>
    </>
  );
};
