var myLoc;
var myMap;
var canvas;

var g1Lat = 45.486827;
var g1Lon = 9.206789;

var g2Lat = 45.457894;
var g2Lon = 9.212632;

var g3Lat = 45.457569;
var g3Lon = 9.181131;

var g4Lat = 45.489335;
var g4Lon = 9.186705;

var g5Lat = 45.472379;
var g5Lon = 9.306093;

var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoibHVjaWFhbmRyZWEiLCJhIjoiY2pwMDUxbXp3MDB1djN4cGRqZHZiZDBudCJ9.Pj0IG_Mgjex-rL9gKh29GA');

var options = {
  lat : g1Lat,
  lng : g1Lon,
  zoom: 12,
  style: 'mapbox://styles/luciaandrea/cjp05433navm92rn02w7ctbs9',
  pitch: 50
}

function preload(){
  // put preload code here
  myLoc = getCurrentPosition();
}

function setup() {
  // put setup code here
  canvas = createCanvas(windowWidth, windowHeight);

  options.lat = myLoc.latitude;
  options.lng = myLoc.longitude;

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  fill('orange');
  noStroke();

  var dis1 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g1Lat, g2Lon, "km");
  console.log(dis1);
  text('distance1',width/2,50);
  var dis2 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g2Lat, g2Lon, "km");
  console.log(dis2);
  var dis3 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g3Lat, g3Lon, "km");
  console.log(dis3);
  var dis4 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g4Lat, g4Lon, "km");
  console.log(dis4);
  var dis5 = calcGeoDistance(myLoc.latitude, myLoc.longitude, g5Lat, g5Lon, "km");
  console.log(dis5);

}

function draw() {
  // put drawing code here
  clear();

  fill('orange');
  textSize(22);
  text('My favourite ice-cream places in the city', 100, 300);

  fill('orange');
  textSize(25);
  var point1 = myMap.latLngToPixel(g1Lat, g1Lon);
  ellipse(point1.x, point1.y, 10);
  var point2 = myMap.latLngToPixel(g2Lat, g2Lon);
  ellipse(point2.x, point2.y, 10);
  var point3 = myMap.latLngToPixel(g3Lat, g3Lon);
  ellipse(point3.x, point3.y, 10);
  var point4 = myMap.latLngToPixel(g4Lat, g4Lon);
  ellipse(point4.x, point4.y, 10);
  var point5 = myMap.latLngToPixel(g5Lat, g5Lon);
  ellipse(point5.x, point5.y, 10);


  fill('purple');
  text('Sartori', point1.x, point1.y-10);
  text('La gelateria della musica', point2.x, point2.y-10);
  text('Grom', point3.x, point3.y-10);
  text('Artico', point4.x, point4.y-10);
  text('Il massimo del gelato', point5.x, point5.y-10);

}
