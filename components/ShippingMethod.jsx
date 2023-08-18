"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Tooltip from "@mui/material/Tooltip";
import Radio from "@mui/material/Radio";
import { Shipping } from "../config/shipping";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

const defaultTheme = createTheme();
const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "2em",
          color: "yellow",
          backgroundColor: "red"
        }
      }
    }
  }
});
const WhiteOnGreenTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />
))(`
    color: white;
    background-color: #469635;
    font-size: 1em;
    width: 130%;
`);


function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export function ShippingMethod({ shippingCharge, setShippingCharge }) {
  const [value, setValue] = useState("free");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (value === "free") {
      setShippingCharge(Shipping[0].price);
    }
    if (value === "local") {
      setShippingCharge(Shipping[1].price);
    }
  }, [value]);

  return (
    <RadioGroup name="shipping-method" value={value} onChange={handleChange}>
      {Shipping.map((ship) => {
        if (ship.id === 3) {
          return (
            <ThemeProvider theme={defaultTheme}>
            <div key={ship.name}>
              <div className="flex justify-between">
              <ThemeProvider theme={theme}>
                <WhiteOnGreenTooltip id="popup" title={ship.description} placement="left" >
                  <MyFormControlLabel
                    value="custom"
                    label={ship.name}
                    control={
                      <Radio sx={{ " &.Mui-checked": { color: "#6a8d39" } }} />
                    }
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: "black",
                      },
                      "& .MuiFormControlLabel-label.Mui-checked": {
                        color: "#6a8d39",
                      },
                    }}
                  />
                </WhiteOnGreenTooltip>
                </ThemeProvider>
                {value === "custom" && (
                  <section className="flex justify-center items-center space-x-2">
                    <label className="font-semibold">£</label>
                    <input
                      type="number"
                      name="price"
                      value={
                        (shippingCharge >= 1 || shippingCharge === 1500) &&
                        shippingCharge
                      }
                      onChange={(e) =>
                        setShippingCharge(Number(e.target.value))
                      }
                      required
                      className="border border-gray-400 w-16 h-8 p-1"
                    />
                  </section>
                )}
              </div>
              <div></div>
            </div>
            </ThemeProvider>
          );
        } else {
          return (
              <ThemeProvider theme={defaultTheme}>
            <div key={ship.name}>
              <div className="flex justify-between">
              <ThemeProvider theme={theme}>
                <WhiteOnGreenTooltip id="popup"  title={ship.description} placement="left">
                  <MyFormControlLabel
                    value={ship.price === 0 ? "free" : "local"}
                    label={ship.name}
                    control={
                      <Radio sx={{ " &.Mui-checked": { color: "#6a8d39" } }} />
                    }
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        color: "black",
                      },
                      "& .MuiFormControlLabel-label.Mui-checked": {
                        color: "#6a8d39",
                      },
                    }}
                  />
                </WhiteOnGreenTooltip>
                </ThemeProvider>
                <p>{ship.price === 0 ? "Free" : `£${ship.price}.00`}</p>
              </div>
              <div></div>
            </div>
      </ThemeProvider>
          );
        }
      })}
    </RadioGroup>
  );
}
