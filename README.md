# Leaflet Challenge
## [Link: All Earthquakes In The Last 7 Days](https://liceloo.github.io/leaflet-challenge/)
## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.  
The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.  
## Instructions
![image](https://github.com/liceloo/leaflet-challenge/assets/90805881/4eb48bbd-38dc-44ae-827f-f61d058952ab)
Your first task is to visualize an earthquake dataset. Complete the following steps:  
1. The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:  
![image](https://github.com/liceloo/leaflet-challenge/assets/90805881/ec6ab286-80d6-4d3d-a824-9924af3c0807)   
* When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
![image](https://github.com/liceloo/leaflet-challenge/assets/90805881/7f0b5023-e1ae-4eab-9b5d-6fe0d0ad8a3d)
2. Import and visualize the data by doing the following:  
* Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.  
  * Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.  
  * Hint: The depth of the earth can be found as the third coordinate for each earthquake.
* Include popups that provide additional information about the earthquake when its associated marker is clicked.
* Create a legend that will provide context for your map data.
* Your visualization should look something like the preceding map.
