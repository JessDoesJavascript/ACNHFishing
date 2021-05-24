import React  from 'react';
import './App.css';
import CreatureCardFish from './Components/CreatureCard'
import fishJSON from './CreaturesJSON/FishJSON';



// fish JSON example: 
// "name": "Bitterling", 
// "imageLink": "https://vignette.wikia.nocookie.net/animalcrossing/images/e/ea/NH-Icon-bitterling.png/revision/latest?cb=20200401003128", 
// "price": 900, 
// "location": "River", 
// "shadowSize": "1", 
// "time": "All day", 
// "jan": true, "feb": true, "mar": true, "apr": false, "may": false, "jun": false, 
// "jul": false, "aug": false, "sep": false, "oct": false, "nov": true, "dec": true 


const fishList = [...fishJSON];


class App extends React.Component {
  state = {
      whichCreatureToShow: "all",
      fishList: [...fishList],
      fishToShow: "all",
      userSearch: "",
      searchedFish: "",
  }

    updateFishToShow = (string) => {
        this.setState({
            fishToShow: string
        })
    }
    handleChange = (event) => {

            this.setState({
                [event.target.name]: event.target.value,
                
            })
        
        }
    
    searchSubmit = (event) => {
        event.preventDefault();
        this.setState({
            fishToShow: this.state.userSearch
        })
    }

    render() {
        let fishies = [];
        let userSearch = this.state.userSearch;
        if (this.state.fishToShow === "all" || this.state.fishToShow === "") {
            fishies = this.state.fishList;
        } else if (this.state.fishToShow === "river") {
            fishies = fishList.filter(function (fishy) {
                return fishy.location.includes("River")
            });
        } else if (this.state.fishToShow === "pond") {
            fishies = fishList.filter(function (fishy) {
                return fishy.location.includes("Pond");
            });
        } else if (this.state.fishToShow === "sea") {
            fishies = fishList.filter(function (fishy) {
                return fishy.location.includes("Sea");
            });
        } else if (this.state.fishToShow === userSearch) {
            fishies = fishList
                .filter(function (fishy) {
                    return (fishy.name.toLowerCase().includes(userSearch.toLowerCase())) 
                    }
                )
        }

        return (
             <div className="App">
                <div>
                    <div 
                        style={{
                            border: "solid",
                            padding: "0",
                            margin: "0vw 25vw 0vw 25vw",
                            boxShadow: "3px 3px 8px 0px rgba(166, 166, 166, 1)",
                            borderRadius: "10px",
                            background: 'white'
                        }}>
                        <h1>Animal Crossing: New Horizons</h1>
                        <h3>Find a fish!</h3>
                    </div>
                    <form>
                      
                                <input 
                                    name="userSearch"
                                    type="text"
                                    placeholder="search for a fish here..."
                                    value={this.state.userSearch}
                                    onChange={this.handleChange}>

                                </input>
                                    <button 
                                    type="submit"
                                    onClick={this.searchSubmit}
                                    >
                                    Search</button>
                    </form>
                </div>
                <div>
                    <button onClick={() => this.updateFishToShow("all")}> All </button>
                    
                    <button onClick={() => this.updateFishToShow("river")}> River Fish</button>
                    <button onClick={() => this.updateFishToShow("pond")}> Pond Fish</button>
                    <button onClick={() => this.updateFishToShow("sea")}> Sea Fish</button>
                </div>
               
                <div
                style={{ 
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "100vw"
                    
                
                }}>
                {fishies.map(fishy => (
                    <CreatureCardFish 
                            key={fishy.name} 
                            name={fishy.name} 
                            location={fishy.location} 
                            price={fishy.price} 
                            time={fishy.time} />))}
                </div>
               

              

            </div>   
        )

    }
}




export default App
