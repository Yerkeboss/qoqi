import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <div style={{ position: "absolute", top: "9.5rem", marginLeft: "10rem" }}>
      <h2 style={{ color: "#12141799" }}>Шаг 3</h2>
      <h2>Уточните детали </h2>

      <FormControl
        style={{
          marginLeft: "2rem",
        }}
      >
        <Label for="username" style={{ background: "none" }}>
          Какое количество времени нужно на ваш проект?
        </Label>

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="long"
            control={<Radio />}
            label="Больше 6 месяцев"
            style={{
              marginTop: "1rem",
              background: "white",
              border: "1px solid black",
              width: "28rem",
              height: "4rem",
            }}
          />
          <FormControlLabel
            value="med"
            control={<Radio />}
            label="Больше 6 месяцев"
            style={{
              marginTop: "1rem",
              background: "white",
              border: "1px solid black",
              width: "28rem",
              height: "4rem",
            }}
          />
          <FormControlLabel
            value="small"
            control={<Radio />}
            label="от 1 до 3 месяцев"
            style={{
              marginTop: "1rem",
              background: "white",
              border: "1px solid black",
              width: "28rem",
              height: "4rem",
            }}
          />
        </RadioGroup>
        <Label for="username" style={{ background: "none" }}>
          Определите бюджет за ваш проект
        </Label>
        <div style={{ display: "flex" }}>
          <Button
            style={{
              color: "white",
              background: "#F28290",
              border: "1px solid #F28290",
              height: "3rem",
              borderRadius: "5rem",
            }}
          >
            Ежемесячно
          </Button>
          <Button
            style={{
              color: "white",
              background: "#F28290",
              border: "1px solid #F28290",
              height: "3rem",
              borderRadius: "5rem",
              marginLeft: "2rem",
            }}
          >
            Проектно
          </Button>
         
        <h4>От</h4>
        <div style={{ display: "flex" }}>
        <Input
            style={{ borderRadius: "5rem" }}
            type="text"
            name="username"
            id="username"
            placeholder="Тнг"
            value={props.username} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
                 <h4>До</h4>
            <Input
            style={{ borderRadius: "5rem" }}
            type="text"
            name="username"
            id="username"
            placeholder="Тнг"
            value={props.username} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </div>
        </div>
  
      </FormControl>
    </div>
  );
};

export default Step3;
