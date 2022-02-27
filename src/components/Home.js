import { Grid } from "@chakra-ui/react";  
import Navbar from "./Navbar/Navbar";
import Content from "./content/Content";

const Home = () => {
    return ( 
        <Grid>
            <Navbar />
            <Content />
        </Grid>
     );
}
 
export default Home;