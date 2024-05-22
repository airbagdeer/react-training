import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import "./ConteactUs.css";

export function ConteactUs(): JSX.Element {
  return (
    <div className="ConteactUs">
      <form>
        <Typography variant="h4">Contact Us</Typography>

        <TextField type="text" label="Full Name" className="Input"></TextField>
        <TextField type="text" label="Email" className="Input"></TextField>
        <TextField type="text" label="Phone" className="Input"></TextField>
        <TextField
          type="text"
          label="Message"
          multiline
          rows={5}
          className="Input"
        ></TextField>

        <FormControlLabel
          label="Send as a promotional email"
          control={<Checkbox></Checkbox>}
        ></FormControlLabel>

        <ButtonGroup fullWidth variant="contained">
          <Button type="button" color="primary">
            Send
          </Button>
          <Button type="reset" color="secondary">
            Clear
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}
