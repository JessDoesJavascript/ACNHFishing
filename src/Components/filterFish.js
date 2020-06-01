import React from 'react';
import fishJSON from './Creatures/FishJSON.js';

function filterFish(searchText, maxResults) {
    return fishJSON
        .filter(fish => {
            if (fish.name.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
        return false;
        })
        .slice(0, maxResults)
}


export default filterFish;