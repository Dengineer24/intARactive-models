import React from 'react'
import {
    Grid,
    TextField,
    Card,
    AppBar,
    Toolbar,
    Typography,
    Button,
} from "@material-ui/core"

class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            room: "",
        };
    }
    login = () => {
        const {email, room } = this.state;
        if(email && room) {
            this.props.history.push("chat", { room, email });
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        const { email, room } = this.state;
        return (
          <div className="h-screen pt-16">
          
            
            <Grid
              style={styles.grid}
              container
              direction="column"
              justify="center"
              alignItems="center">
              <Card style={styles.card} elevation={10}>
                <Grid item style={styles.gridItem}>
                  <TextField
                    name="email"
                    required
                    style={styles.textField}
                    label="Email address"
                    placeholder="Enter email address"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={this.handleChange}/>
                </Grid>
                <Grid item style={styles.gridItem}>
                  <TextField
                    name="room"
                    required
                    style={styles.textField}
                    label="Room"
                    placeholder="Enter room name"
                    variant="outlined"
                    value={room}
                    onChange={this.handleChange}/>
                </Grid>
                <Grid item style={styles.gridItem}>
                  <Button
                    color="primary"
                    variant="contained"
                    style={styles.button}
                    onClick={this.login}>
                    Login
                  </Button>
                </Grid>
              </Card>
            </Grid>
          </div>
        );
      }
}

const styles = {
    header: {},
    grid: { positon: "absolute", top: 0, left: 0, right: 0, bottom: 0 },
    card: { padding: 40, borderRadius:16},
    textField: { width: 300 },
    gridItem: { paddingTop: 12, paddingBottom: 12 },
    button: { width: 300, borderRadius:20, backgroundColor: "#282C4D"},

};

console.log("Cahtroom ran!");
export default WelcomeScreen;
console.log("Cahtroom ran!");