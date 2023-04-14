# aframe-bitcoin-ticker
Bitcoin Price Ticker  component for Aframe.io Using coingeko api  




A-Frame Bitcoin Ticker Component
This A-Frame component displays the current Bitcoin price, fetched from the CoinGecko API, as a text entity in your A-Frame scene. The price updates every 2 seconds.

Requirements
A-Frame v1.2.0 or later
Installation
Include the A-Frame library in your HTML file:

html
Copy code
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
Include the bitcoin-ticker component:

html
Copy code
<script src="path/to/bitcoin-ticker-component.js"></script>
Alternatively, you can copy the component's code directly into your HTML file within a <script> tag.

Usage
To use the bitcoin-ticker component, add the bitcoin-ticker attribute to an A-Frame text entity in your scene:

html
Copy code
<a-text
  bitcoin-ticker
  position="0 1.5 -4"
  text="width: 7; color: #c7c7c7; align: center; font: exo2bold; side: double"
  scale="1.69839 1.34039 5"
  value="">
</a-text>
The bitcoin-ticker component will update the value attribute of the text entity with the latest Bitcoin price in USD every 2 seconds.

Customization
You can change the update interval (in milliseconds) by setting the interval property of the bitcoin-ticker component:

html
Copy code
<a-text
  bitcoin-ticker="interval: 5000"
  position="0 1.5 -4"
  text="width: 7; color: #c7c7c7; align: center; font: exo2bold; side: double"
  scale="1.69839 1.34039 5"
  value="">
</a-text>
In this example, the Bitcoin price will update every 5 seconds (5000 ms).

License
This component is licensed under the MIT License.

Acknowledgements
This component uses the CoinGecko API to fetch the latest Bitcoin price. Please adhere to the API's usage guidelines and terms of service.




















