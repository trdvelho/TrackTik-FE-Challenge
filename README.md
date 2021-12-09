# TrackTik FrontEnd Challenge
## App developed for TrackTik as FE challenge
### Challenge main goal:
- Create a web app (mobile first approach) with following features:
  - Request TrackTik REST API server (GET, POST, PACTH, PUT, DELETE)
  - Create Sites list page
  - View site details page
  - Add a pagination mechanism
  - Use development bast practices
  - Use any preferable FE framework
  - FILTER is a nice to have feature
  - DESKTOP VIEW is a nice to have feature
  - ANY EXTRA FEATURE is a nice to ahve

### Chosen framework & Libs
For this challenge I used Ionic 5/ Angular 12 with Typescript for the development.
VS code for editting the code.

Angular libs:
- Router
- Forms
- HTTP
- HTTP Interceptor

Ionic Libs:
- ToastController
- PopoverController
- AlertController

External libs:
- ngx-pagination

### Installation
- Clone the repo and run the command inside its folder
  ```
  npm i
  ```
- Serving the web app ( to see it as mobile app go to the mobile view of your browser)
  ```
  ionic serve
  ```
- Generate Production build (will be inside www folder)
  ```
  npm run build-prod
  ```
- Run Android app (make sure you have either a android simulator opened or a device connected to your computer)
  ```
  npm run android
  ```
-
### Overview of the Web App
#### Features:

- Home page: Lists all sites from Tracktik API GET request
- Add new site: Clicking on the floating button on the bottom right side the user can add a new site (witch is included at the end of the list - last page).
- Sliding items to the left gives the user its DELETING option.
- Filtering: By clicking on the funnel icon it is possivel to filter the list by Site title or Main contact first name.
- After a successfull filter is listed, a button on the left side is available to exit the filter.
- Pagination is available at the footer of Home page for both normal and filter listing.
- Site Details page: Details an item clicked on Home page list
- Site Details Edit mode: Clicking on the "EDIT" button on the footer the page turns into EDIT MODE page where the user can edit main contact informations through PATCH request.

