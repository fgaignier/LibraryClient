# Launch the Rest web service

https://github.com/charroux/CorrectionWebServiceJPA

# CarRental

download an unzip the project

npm install

npm start


# Procedure for adding a new component

Add a routerLink into <a href="https://github.com/charroux/CarRental/blob/master/src/app/app.component.ts">app.component.ts</a>

Add a route into <a href="https://github.com/charroux/CarRental/blob/master/src/app/app-routing.module.ts">app-routing.module.ts</a>: a path + a component + its import

Add into <a href="https://github.com/charroux/CarRental/blob/master/src/app/app.module.ts">app.module.ts</a> the declaration + the import of the component

Create a component (the filename is given by the import into <a href="https://github.com/charroux/CarRental/blob/master/src/app/app-routing.module.ts">app-routing.module.ts</a>), the component name is in the routes of le  nom du composant est dans les routes de <a href="https://github.com/charroux/CarRental/blob/master/src/app/app-routing.module.ts">app-routing.module.ts</a>

Create an html file associated to the component (the name of the html file is given by the templateUrl of the component)