# Pokédex
Know the Pokémon!

## What is Pokédex? ##
Pokédex allows the user to search for any Pokémon’s information by name or id. It’s like a dictionary for Pokémons!

The following information will be displayed about the Pokémon:
- An image of the Pokémon.
- The color of the Pokémon.
- The evolution of the Pokémon.
- The gender ratio of the Pokémon.
- Locations that the Pokémon can be found in the wild.
- All the moves that this Pokémon can learn.
- All the types that Pokémon is.
- All the varieties of this Pokémonp

## How to Get Started ##
Enter the name or id of the Pokémon to be searched and click the Search button. After a successful search by Pokédex, you may click on any of the Pokémon’s evolution to get further information on that specific evolution. Each successful search will also be recorded in the history tab to the right. All the Pokémon names on the history tab can also be clicked to perform the lookup again.

## Possible additional features ##
- Adding more information: More Pokémon information can be added to the display. These information may include: growth rate, habitats, shapes, stats, etc.
- Persistent data storage: Currently when shutoff, Pokédex louses all the data it had. This means history and current or most recently search Pokémon entry is gone. A database can be a good option to help store data persistently. Writing the data onto a file using Node file system is another option to use without introducing new technologies. 
- Store user’s information: A login and user account that can keep track of the user’s information such as name, Pokémon collected, Pokémon searched, for example.
- Network and friends: Adding friends so users can trade or show their collection amongst each other.

## Visual enhancements in the consideration ##
- Turning history, ability, moves, and location box to a dropdown. This may make the application look more minimalistic.
- Adding the back side image of the Pokémon to the main display and turning it into a carousel.

## Performance concerns ##
- Currently, a search consists of multiple API requests to https://pokeapi.co/ in a promise chain. The data is sent from the server-side to the client-side all in one bulk. This means that the client-side only renders after all of the requests have been completed, and components basically wait on each other to load. By dividing the component into microservices, components can load independently allowing users to view partial information instead of waiting for all the components to load at once. Microservice architecture can introduce another layer of complexity to the application and at this point, I believe it is not needed because the application is simple and fast enough.

## Currently known bugs ##
- Searching a variant of a Pokemon currently does not work. This is because the name and id can be inconsistent in the PokeAPI database. Adding code to perform additional search attempts (with the name instead of id or vise versa) after the initial search failed may solve this problem. 

## Technologies used ##
- React
- Node/Express
- webpack
